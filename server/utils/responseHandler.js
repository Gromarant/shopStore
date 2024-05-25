const Products = require('../models/productsModel');

const responseHttpHandle = async (modelMethod, req, res, statusCode) => {
    try {
        let result = await modelMethod;
        res.status(statusCode).json(result);
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(error.status || 500).json({
        msj: `${error}`
        });
    };   
};

module.exports = responseHttpHandle;