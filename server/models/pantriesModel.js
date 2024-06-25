const queries = require('../queries/pantriesQueries');
const { executeQuery } = require('../utils');

const getPantryById = async (id) => {
    const result = await executeQuery(queries.getPantryById, [id]);
    return result.rows[0];
};

const createPantry = async (pantry) => {
    const { product_uid, location_uid, name, quantity, expiration } = pantry;
    const result = await executeQuery(queries.createPantry, [ product_uid, location_uid, name, quantity, expiration ]);
    const createdPantry = {
        message: 'pantry created',
        data: {
            product: product_uid, 
            location: location_uid, 
            name, 
            quantity, 
            expiration
        },
        result: result.rowCount
    };
    return createdPantry;
};

const updatePantry = async (pantry, pantryId) => {
    const { product_uid, location_uid, name, quantity, expiration } = pantry;
    const result = await executeQuery(queries.updatePantry, [ pantryId, product_uid, location_uid, name, quantity, expiration ]);
    const updatedPantry = {
        message: `Pantry with id ${pantryId} updated`,
        data: {
            product: product_uid, 
            location: location_uid, 
            name, 
            quantity, 
            expiration
        },
        result: result.rowCount
    };
    return updatedPantry;
};

const deletePantry = async (id) => {
    const result = await executeQuery(queries.deletePantry, [id]);
    const deletedPantry =  {
        message: `Pantry with id ${id} deleted`,
        result: result.rowCount
    };
    return deletedPantry;
};

module.exports = {
    getPantryById,
    createPantry,
    updatePantry,
    deletePantry
};