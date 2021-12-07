/**
 * Add more time to expiration when generating a new token.
 * @param {number} expiresIn - time to expiration
 * @returns {number} new time to expiration
 */
module.exports = (expiresIn) => Date.now() + expiresIn * 1000;
