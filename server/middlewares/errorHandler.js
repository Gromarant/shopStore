const error404 = ( req, res, next ) => {
    const err =  new Error(`Can't find ${req.originalUrl} on the server!`);
    err.status = 'fail';
    err.statusCode = 404;
    next(err);
};

const errorServer = ( error, req, res, next ) => {
    res.status(error.statusCode || 500).json({
        status: error.statusCode,
        message: error.message
    });
};


module.exports = {
    error404,
    errorServer,
};