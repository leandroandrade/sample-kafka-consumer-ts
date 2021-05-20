export default (err, req, res, next): void => {
    const {
        statusCode, message, date = new Date(),
    } = err;

    if (statusCode && message) {
        return res.status(statusCode).send({ code: statusCode, message, date });
    }

    return res.status(500).send({ code: 500, message: 'Ocorreu um erro no servidor.', date });
};
