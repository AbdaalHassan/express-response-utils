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

/**
 * Responds with a 400 Bad Request status and a custom message.
 * @param {object} res - The response object from Express.
 * @param {string} message - The error message for the bad request (default: 'Bad request').
 * @returns {object} - The response object with a 400 status and the provided message.
 */
const badRequest = (res, message = 'Bad request') => {
    return res.status(400).send({ message });
};

/**
 * Responds with a 500 Internal Server Error status and a custom message.
 * @param {object} res - The response object from Express.
 * @param {string} message - The error message (default: 'Internal Server Error').
 * @returns {object} - The response object with a 500 status and the provided message.
 */
const serverError = (res, message = 'Internal Server Error') => {
    return res.status(500).send({ message });
};

/**
 * Responds with a 200 OK status and a custom message or data.
 * @param {object} res - The response object from Express.
 * @param {string|object} messageOrData - The message or data to return.
 * @param {object} data - The data to return if messageOrData is a message (default: empty object).
 * @returns {object} - The response object with a 200 status and a custom message or data.
 */
const ok = (res, messageOrData = 'Request successful', data = {}) => {
    if (typeof messageOrData === 'string') {
        return res.status(200).send({ message: messageOrData });
    }
    return res.status(200).send({ data: messageOrData });
};

module.exports = {
    notFound,
    created,
    badRequest,
    serverError,
    ok,
};
