// Lib
import Network from '../network.js';

/**
 * @function getDashboard
 * @desc Make a GET request to get current user
 * @param {string} accessToken - userToken
 * @returns {promise} Network promise with the response
 * @version 1.0
 * @since 1.0
 * @public
 */
export function getValidationList() {
    return Network().get('/validation/list');
}

export function getActe(noacte) {
    return Network().get('/validation/acte', {
        noacte: noacte,
    });
}
