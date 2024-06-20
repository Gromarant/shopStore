const pool = require('./db_pgsql');

const executeQuery = async (query, params=[]) => {
    let client, data;
    try {
        client = await pool.connect();
        data = await client.query(query, [...params]);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    };
    return data;
};
  
module.exports = executeQuery;