
/**
 * Responds with a 404 Not Found status and a custom message.
 * @param {object} res - The response object from Express.
 * @param {string} entity - The name of the entity (e.g., 'User', 'Book') that was not found.
 * @returns {object} - The response object with a 404 status and a custom message.
 */
const notFound = (res, entity = 'Resource') => {
    return res.status(404).send({ message: `${entity} not found` });
};

/**
 * Responds with a 201 Created status and a custom message.
 * @param {object} res - The response object.
 * @param {string} message - The message for successful creation (default: 'Resource created').
 * @param {object} data - The data to return with the response (default: empty object).
 * @returns {object} - The response object with a 201 status and a custom message and data.
 */
const created = (res, message = 'Resource created', data = {}) => {
    return res.status(201).send({ message, data });
};

module.exports = {
    notFound,
    created,
};
