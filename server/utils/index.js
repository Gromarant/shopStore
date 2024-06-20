const httpRequest = require('./httpRequest');
const executeQuery = require('./queryExecutor');

const getRandomTimeout = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

const concatQueryInsertValues = (table_name, columns_names=[], values) => `INSERT INTO ${table_name} (${columns_names.join(', ')})
VALUES
${values};`

module.exports = {
    httpRequest,
    executeQuery,
    getRandomTimeout,
    concatQueryInsertValues
}