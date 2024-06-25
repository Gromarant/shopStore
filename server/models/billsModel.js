const queries = require('../queries/billsQueries');
const { executeQuery } = require('../utils');

const getBillById = async (id) => {
    const result = await executeQuery(queries.getBillById, [id]);
    return result.rows[0];
};

const createBill = async (store) => {
    const { id } = store;
    const result = await executeQuery(queries.createBill, [ id ]);
    const createdBill = {
        message: 'Bill created',
        data: {
            store
        },
        result: result.rowCount
    };
    return createdBill;
};

const updateBill = async (store, billId) => {
    const { id } = store;
    const result = await executeQuery(queries.updateBill, [billId, id ]);
    const updatedListItems = {
        message: `Bill with id ${billId} updated`,
        data: {
            product: id
        },
        result: result.rowCount
    };
    return updatedListItems;
};

const deleteBill = async (id) => {
    const result = await executeQuery(queries.deleteBill, [id]);
    const deletedBill =  {
        message: `Bill with id ${id} deleted`,
        result: result.rowCount
    };
    return deletedBill;
};

module.exports = {
    getBillById,
    createBill,
    updateBill,
    deleteBill
};