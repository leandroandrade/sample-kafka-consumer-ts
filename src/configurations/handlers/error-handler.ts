export default (err, req, res, next): void => {
    console.error('Server ERROR:', err);

    next(err);
};
