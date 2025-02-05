"""
import_annotations.py
==============================================
Script to import annotations from the database
"""

import argparse
import datetime as dt
import logging
import warnings

import pandas as pd
from ML.classifier import classifier_preprocessing
from pipeline import bdd

warnings.filterwarnings("ignore")
logging.basicConfig(format="%(asctime)s %(levelname)s:%(message)s", level=logging.INFO)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Load annotations & Train model")
    parser.add_argument(
        "-a",
        "--actes",
        help="Name of the table with actes",
        type=str,
        required=False,
        default="test_annotations",
    )
    parser.add_argument(
        "-n",
        "--annotations",
        help="Name of the table with annotations",
        type=str,
        required=False,
        default="app_annotation",
    )
    parser.add_argument(
        "-s",
        "--save",
        help="Path for the saved table",
        type=str,
        required=False,
        default="annotated_actes_" + dt.datetime.now().strftime("%Y_%m_%d") + ".pkl",
    )

    args = parser.parse_args()

    # Import data
    #############

    database = bdd.PostgreSQL_DB()

    logging.info(f"Loading {args.actes} from database ...")
    actes_table = database.get_table(f"SELECT * FROM {args.actes}")

    logging.info(f"Load {args.annotations} from database ...")
    annotation_table = database.get_table(f"SELECT * FROM {args.annotations}")

    # Read data
    ###########

    logging.info("Merging dataframes ...")

    annots_df = pd.DataFrame(
        list(annotation_table["qcm"]),
        columns=[
            "nature_label",
            "nature_content",
            "matiere_code",
            "matiere_1",
            "matiere_2",
            "metaObjet",
            "isTransmissible",
            "corps",
        ],
    )
    annots_df["filename"] = annotation_table["filename"]

    # Create columns
    annots_df = annots_df.rename(
        columns={"matiere_1": "matiere_1_nom", "matiere_2": "matiere_2_nom"}
    )

    annots_df["matiere_1"] = annots_df["matiere_code"].apply(lambda code: str(code)[0])
    annots_df["matiere_2"] = annots_df["matiere_code"].apply(lambda code: str(code))

    # Convert nature to its index
    natures = {"DE": "1", "AR": "2", "AI": "3", "CC": "4"}
    annots_df["nature"] = annots_df[["nature_label"]].replace({"nature_label": natures})

    actes_df = pd.merge(
        annots_df,
        actes_table,
        how="left",
        on=["filename", "filename"],
        suffixes=("", "_metadata"),
    )
    # actes_df = actes_df.rename(columns={'texte':'extracted_text'})

    logging.info("Preprocessing data ...")
    actes_df["preprocessed_text"] = classifier_preprocessing.preprocessing(
        actes_df["texte"], stemming=False
    )
    actes_df = classifier_preprocessing.split_data(actes_df)

    actes_df.to_pickle(args.save)
