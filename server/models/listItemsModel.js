const queries = require('../queries/listItemsQueries');
const { executeQuery } = require('../utils');

const getListItemById = async (id) => {
    const result = await executeQuery(queries.getListItemById, [id]);
    return result.rows[0];
};

const createListItem = (products) => {
    let createdListItem;
    products?.map(async(product) => {
        const result = await executeQuery(queries.createListItem, [ product.uid, product.quantity ]);
            createdListItem = {
            message: 'ListItem created',
            data: {
                product
            },
            result: result.rowCount
        };
    })
    return createdListItem;
};

const updateListItem = async (listItem, listItemId) => {
    const { productId, quantity } = listItem;
    const result = await executeQuery(queries.updateListItem, [listItemId, productId, quantity ]);
    const updatedListItem = {
        message: `ListItem with id ${listItemId} updated`,
        data: {
            product: productId,
            quantity,
        },
        result: result.rowCount
    };
    return updatedListItem;
};

const deleteListItem = async (products) => {
    let deletedlistItem;
    products?.map(async(product) => {
        const result = await executeQuery(queries.deleteListItem, [product.uid]);
        deletedlistItem =  {
            message: `ListItem with id ${product.uid} deleted`,
            result: result.rowCount
        };
    })
    return deletedlistItem;
};

module.exports = {
    getListItemById,
    createListItem,
    updateListItem,
    deleteListItem
};