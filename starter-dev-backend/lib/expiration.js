/**
 * Add more time to expiration when generating a new token.
 * @param {number} expiresIn - time to expiration
 * @returns {number} new time to expiration
 */
export default (expiresIn) => Date.now() + expiresIn * 1000;
