const queries = require('../queries/productsQueries');
const executeQuery = require('../utils/queryExecutor');

const getProductById = async (id) => {
    const result = await executeQuery(queries.getProductById, [id]);
    return result.rows[0];
};

const getProducts = async () => {
    const result = await executeQuery(queries.getProducts);
    return result.rows;
};

module.exports = {
    getProductById,
    getProducts
};