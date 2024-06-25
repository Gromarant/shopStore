const queries = require('../queries/listItemsQueries');
const { executeQuery } = require('../utils');

const getListItemById = async (id) => {
    const result = await executeQuery(queries.getListItemById, [id]);
    return result.rows[0];
};

const createListItem = async (product) => {
    const { id } = product;
    const result = await executeQuery(queries.createListItem, [ id ]);
    const createdListItem = {
        message: 'ListItem created',
        data: {
            product
        },
        result: result.rowCount
    };
    return createdListItem;
};

const updateListItem = async (listItem, listItemId) => {
    const { productId } = listItem;
    const result = await executeQuery(queries.updateListItem, [listItemId, productId ]);
    const updatedListItem = {
        message: `ListItem with id ${listItemId} updated`,
        data: {
            product: productId
        },
        result: result.rowCount
    };
    return updatedListItem;
};

const deleteListItem = async (id) => {
    const result = await executeQuery(queries.deleteListItem, [id]);
    const deletedlistItem =  {
        message: `ListItem with id ${id} deleted`,
        result: result.rowCount
    };
    return deletedlistItem;
};

module.exports = {
    getListItemById,
    createListItem,
    updateListItem,
    deleteListItem
};