const pool = require('../utils/db_pgsql');
const queries = require('../queries/productsQueries');

const getProductById = async (productId) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getProductById, [productId])
        result = data.rows[0]
    } catch (error) {
        console.error(`Error: ${error}`);
        throw err;
    } finally {
        client.release();
    };
    return result;
};

const getProducts = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getProducts);
        result = data.rows;
    } catch (error) {
        console.error(`Error: ${error}`);
        throw err;
    } finally {
        client.release();
    };
    return result;
}

module.exports = {
    getProductById,
    getProducts
};