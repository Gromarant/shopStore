const queries = require('../queries/listItemsQueries');
const { executeQuery } = require('../utils');

const getListItems = async () => {
    const result = await executeQuery(queries.getListItems);
    return result.rows;
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

const deleteListItem = async () => await executeQuery(queries.deleteListItem);

module.exports = {
    getListItems,
    createListItem,
    updateListItem,
    deleteListItem
};