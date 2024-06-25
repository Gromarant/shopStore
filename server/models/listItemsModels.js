const queries = require('../queries/listItemsQueries');
const { executeQuery } = require('../utils');

const getListItemsById = async (id) => {
    const result = await executeQuery(queries.getListItemsById, [id]);
    console.log(result.rows[0]);
};

const createListItems = async (product) => {
    const { id } = product;
    const result = await executeQuery(queries.createListItems, [ id ]);
    const createdListItems = {
        message: 'ListItems created',
        data: {
            product
        },
        result: result.rowCount
    };
    return createdListItems;
};

const updateListItems = async (listItems, listItemsId) => {
    const { productId } = listItems;
    const result = await executeQuery(queries.updateListItems, [listItemsId, productId ]);
    const updatedListItems = {
        message: `ListItems with id ${listItemsId} updated`,
        data: {
            listItems: listItemsId,
            product: productId
        },
        result: result.rowCount
    };
    return updatedListItems;
};

const deleteListItems = async (id) => {
    const result = await executeQuery(queries.deleteListItems, [id]);
    const deletedlistItems =  {
        message: `ListItems with id ${id} deleted`,
        result: result.rowCount
    };
    return deletedlistItems;
};

module.exports = {
    getListItemsById,
    createListItems,
    updateListItems,
    deleteListItems
};