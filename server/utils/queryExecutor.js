const pool = require('./db_pgsql');

const executeQuery = async (queryMethod, params=[]) => {
    let client, data;
    try {
        client = await pool.connect();
        data = await client.query(queryMethod, [...params]);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    };
    return data;
};
  
module.exports = executeQuery;