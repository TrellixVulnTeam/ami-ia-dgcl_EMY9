const qcm = {
    "nature" : {
        "content" : "Quelle est la nature de l'acte ?",
        "skip": false,
        "justif": false,
        "response" : [
            {
                "content" : "Aucun",
                "label": "A",
                "code": 0
            },
            {
                "content" : "Délibérations",
                "label": "DE",
                "code": 1
            },
            {
                "content" : "Actes réglementaires",
                "label": "AR",
                "code": 2
            },
            {
                "content" : "Actes individuels",
                "label": "AI",
                "code": 3
            },
            {
                "content" : "Contrats, conventions et avenants",
                "label": "CC",
                "code": 4
            }
        ]
    },
    "matière" : {
        "content" : "Quelle est la matière de l'acte ?",
        "skip": false,
        "justif": false,
        "response" : [
            {
                "content" : "Aucune",
                "code": 0
            },
            {
                "content" : "Commande publique",
                "code": 1,
                "children": [
                    {
                        "content": "Aucun",
                        "code": 1.0
                    },
                    {
                        "content": "Marchés publics",
                        "code": 1.1
                    },
                    {
                        "content": "Délégation de service public",
                        "code": 1.2
                    },
                    {
                        "content": "Conventions de Mandat",
                        "code": 1.3
                    },
                    {
                        "content": "Autres types de contrats",
                        "code": 1.4
                    },
                    {
                        "content": "Transactions / protocole d'accord transactionnel",
                        "code": 1.5
                    },
                    {
                        "content": "Actes relatifs à la maîtrise d'oeuvre",
                        "code": 1.6
                    },
                    {
                        "content": "Actes speciaux et divers",
                        "code": 1.7
                    }
                ]
            },
            {
                "content" : "Urbanisme",
                "code": 2,
                "children": [
                    {
                        "content": "Aucun",
                        "code": 2.0
                    },
                    {
                        "content": "Documents d'urbanisme",
                        "code": 2.1
                    },
                    {
                        "content": "Actes relatifs au droit d'occupation ou d'utilisation des sols",
                        "code": 2.2
                    },
                    {
                        "content": "Droit de préemption urbain",
                        "code": 2.3
                    }
                ]
            },
            {
                "content" : "Domaine et patrimoine",
                "code": 3,
                "children": [
                    {
                        "content": "Aucun",
                        "code": 3.0
                    },
                    {
                        "content": "Acquisitions",
                        "code": 3.1
                    },
                    {
                        "content": "Aliénations",
                        "code": 3.2
                    },
                    {
                        "content": "Locations",
                        "code": 3.3
                    },
                    {
                        "content": "Limites territoriales",
                        "code": 3.4
                    },
                    {
                        "content": "Autres actes de gestion du domaine publique",
                        "code": 3.5
                    },
                    {
                        "content": "Autres actes de gestion du domaine privé",
                        "code": 3.6
                    }
                ]
            },
            {
                "content" : "Fonction publique",
                "code": 4,
                "children": [
                    {
                        "content": "Aucun",
                        "code": 4.0
                    },
                    {
                        "content": "Personnel titulaires et stagiaires de la F.P.T",
                        "code": 4.1
                    },
                    {
                        "content": "Personnel contractuel",
                        "code": 4.2
                    },
                    {
                        "content": "Fonction publique hospitalière",
                        "code": 4.3
                    },
                    {
                        "content": "Autres catégories de personnels",
                        "code": 4.4
                    },
                    {
                        "content": "Régime indemnitaire",
                        "code": 4.5
                    }
                ]
            },
            {
                "content" : "Institutions et vie politique",
                "code": 5,
                "children": [
                    {
                        "content": "Aucun",
                        "code": 5.0
                    },
                    {
                        "content": "Election executif",
                        "code": 5.1
                    },
                    {
                        "content": "Fonctionnement des assemblées",
                        "code": 5.2
                    },
                    {
                        "content": "Designation de representants",
                        "code": 5.3
                    },
                    {
                        "content": "Delegation de fonctions",
                        "code": 5.4
                    },
                    {
                        "content": "Delegation de signature",
                        "code": 5.5
                    },
                    {
                        "content": "Exercice des mandats locaux",
                        "code": 5.6
                    },
                    {
                        "content": "Intercommunalite",
                        "code": 5.7
                    },
                    {
                        "content": "Decision d ester en justice",
                        "code": 5.8
                    }
                ]
            },
            {
                "content" : "Libertés publiques et pouvoirs de police",
                "code": 6,
                "children": [
                    {
                        "content": "Aucun",
                        "code": 6.0
                    },
                    {
                        "content": "Police municipale",
                        "code": 6.1
                    },
                    {
                        "content": "Pouvoir du president du conseil general",
                        "code": 6.2
                    },
                    {
                        "content": "Pouvoir du president du conseil regional",
                        "code": 6.3
                    },
                    {
                        "content": "Autres actes reglementaires",
                        "code": 6.4
                    },
                    {
                        "content": "Actes pris au nom de l Etat et soumis au controle hierarchique",
                        "code": 6.5
                    }
                ]
            },
            {
                "content" : "Finances locales",
                "code": 7,
                "children": [
                    {
                        "content": "Aucun",
                        "code": 7.0
                    },
                    {
                        "content": "Décisions budgetaires",
                        "code": 7.1
                    },
                    {
                        "content": "Fiscalité",
                        "code": 7.2
                    },
                    {
                        "content": "Emprunts",
                        "code": 7.3
                    },
                    {
                        "content": "Interventions economiques",
                        "code": 7.4
                    },
                    {
                        "content": "Subventions",
                        "code": 7.5
                    },
                    {
                        "content": "Contributions budgetaires",
                        "code": 7.6
                    },
                    {
                        "content": "Avances",
                        "code": 7.7
                    },
                    {
                        "content": "Fond de concours",
                        "code": 7.8
                    },
                    {
                        "content": "Prise de participation",
                        "code": 7.9
                    },
                    {
                        "content": "Divers",
                        "code": 7.10
                    }
                ]
            }
        ]
    },
    "meta" : {
        "content" : "Quel est le type de meta donnée objet ?",
        "justif": true,
        "skip": true,
        "skip_code": 0,
        "DE" : [
            "Type de décision",
            "Action",
            "Finalité",
            "Destinataire",
            "Contexte"
        ],
        "AR": [
            "Action",
            "Finalité",
            "Contexte"
        ],
        "AI" : [
            "Action",
            "Destinaire",
            "Finalité",
            "Contexte"
        ],
        "CC" : [
            "Type d'engagement",
            "Action demandée",
            "Finalité de l'obligation",
            "Contractant",
            "Contexte"
        ]
    },
    "pj" : {
        "content" : "Quel est le type de la pièce jointe",
        "justif": false,
        "skip": true,
        "skip_code": 0,
        "DE" : [
            "Accusé de réception",
            "Autre document",
            "Avenant au contrat de recrutement d'agent",
            "Courrier de demande (demande de pièce, lettre d'observation..)",
            "Courrier de réponse (demande de pièce, lettre d'observation..)",
            "Courrier d'observations",
            "Débat d'orientation du plan d'aménagement et de développement durable",
            "Décision arrêtant le projet",
            "Déclaration d'intention d'aliéner",
            "Déféré",
            "Délibération",
            "Demande d'expertise",
            "Document d'orientation et d'objectif",
            "Documents pré-contractuels",
            "Dossier de l'acte",
            "Enquête publique",
            "Fiche de suivi d'instruction",
            "Fiche navette",
            "Fichier de signature électronique",
            "Note d'observations",
            "Pièce complémentaire",
            "Plan de financement relatif à une demande de fonds de concours ou de financement",
            "Projet d'aménagement et de développement durable",
            "Projet de contrat avec l'organisme retenu",
            "Rapport biennal des avancements d'échelons",
            "Rapport de présentation",
            "Réponse à une demande d'expertise"
        ],
        "AR": [
            "Accusé de réception",
            "Acte réglementaire",
            "Autre document",
            "Courrier de demande (demande de pièce, lettre d'observation..)",
            "Courrier de réponse (demande de pièce, lettre d'observation..)",
            "Courrier d'observations",
            "Débat d'orientation du plan d'aménagement et de développement durable",
            "Décision arrêtant le projet",
            "Déféré",
            "Délibération de prescription",
            "Demande d'expertise",
            "Document d'orientation et d'objectif",
            "Dossier de l'acte",
            "Enquête publique",
            "Fiche de suivi d'instruction",
            "Fiche navette",
            "Fichier de signature électronique",
            "Note d'observations",
            "Pièce complémentaire",
            "Projet d'aménagement et de développement durable",
            "Rapport de présentation",
            "Réponse à une demande d'expertise"
        ],
        "AI" : [
            "Accord d'une autorité administrative",
            "Accusé de réception",
            "Acte individuel",
            "Agrément ou certificat",
            "Attestation fournie par l'agent public",
            "Attestation fournie par le porteur de projet",
            "Autre document",
            "Avenant au contrat de recrutement d'agent",
            "Avis",
            "Avis de création, de vacance ou de suppression de poste",
            "Avis de la commission administrative paritaire",
            "Avis de la commission mixte paritaire",
            "Avis de vacance d'emploi",
            "Candidature sur le poste vacant",
            "Convention",
            "Courrier de demande (demande de pièce, lettre d'observation..)",
            "Courrier de réponse (demande de pièce, lettre d'observation..)",
            "Courrier d'observations",
            "Décision",
            "Déféré",
            "Délibération établissant la liste de postes à pourvoir",
            "Demande",
            "Demande de l'agent",
            "Demande d'expertise",
            "Document photographique",
            "Dossier de l'acte",
            "Fiche de suivi d'instruction",
            "Fiche navette",
            "Fichier de signature électronique",
            "Information du centre de gestion",
            "Inscription sur la liste d'aptitude",
            "Lettre",
            "Liste de postes à pourvoir",
            "Note d'observations",
            "Notice explicative",
            "Pièce complémentaire",
            "Pièce du dossier de permis",
            "Plans",
            "Présentation des états initiaux et futurs",
            "Rapport d'étude",
            "Réponse à une demande d'expertise",
            "Tableau"
        ],
        "CC" : [
            "Accusé de réception",
            "Acte d'engagement",
            "Attestation fournie par l'agent public",
            "Autorisation d'occupation du domaine public",
            "Autre document",
            "Avenant au contrat de recrutement d'agent",
            "Avis d'appel public à concurrence",
            "Avis de délégation",
            "Avis de la commission consultative des services publics locaux",
            "Avis de l'autorité compétente de l'Etat",
            "Avis de vacance d'emploi",
            "Avis du jury de concours",
            "Bordereau des prix",
            "Cahier des charges de la délégation",
            "Cahier des clauses administratives particulières",
            "Cahier des clauses techniques particulières",
            "Candidature sur le poste vacant",
            "Contrat de délégation",
            "Contrat de vente",
            "Copie du jugement d'homologation de la transaction",
            "Courrier de demande (demande de pièce, lettre d'observation..)",
            "Courrier de réponse (demande de pièce, lettre d'observation..)",
            "Courrier d'observations",
            "Courriers de rejet des candidatures incomplètes ou irrecevables",
            "Déféré",
            "Délibération autorisant à passer le contrat",
            "Délibération autorisant l'acquisition",
            "Délibération autorisant le recours aux contractuels",
            "Délibération constatant la désaffectation",
            "Délibération de déclassement",
            "Demande de cautionnement",
            "Demande d'expertise",
            "Document contractuel",
            "Documents pré-contractuels",
            "Dossier de l'acte",
            "Fiche de suivi d'instruction",
            "Fiche navette",
            "Fichier de signature électronique",
            "Garantie d'emprunt",
            "Invitation à présenter une offre",
            "Invitation des candidats à soumissionner",
            "Mémoire technique",
            "Modification du contrat",
            "Note d'observations",
            "Notification du rejet des offres",
            "Pièce complémentaire",
            "Procès verbal de la commission d'appel d'offre ou du jury",
            "Procès verbal de la commission de délégation de service public",
            "Rapport de la commission d'appel d'offre",
            "Rapport de la commission de délégation du service public",
            "Rapport de présentation de l'acheteur",
            "Rapport justifiant le choix du marché, les modalités et la procédure de passation",
            "Registre des dépôts des offres",
            "Règlement de concours",
            "Règlement de la consultation",
            "Renseignements, attestations et déclarations fournies par l'attributaire",
            "Réponse à une demande d'expertise"
        ]
    }
}

export { qcm }