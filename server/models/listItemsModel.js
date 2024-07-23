const queries = require('../queries/listItemsQueries');
const { updateProducts } = require('../models/productsModel');
const { executeQuery, httpRequest } = require('../utils');


const getProductsByShop = async(products) => {
    const updatedProducts = await Promise.all(
        products?.map( 
            async(product) => 
                await httpRequest(`https://tienda.mercadona.es/api/products/${product}/?lang=es&wh=mad1`)
        )
    );
    const productsFormated = updatedProducts?.map(product => 
        ({
            id: product.id,
            price: product["price_instructions"].unit_price
        })
    )
    updateProducts(productsFormated);
};

const getListItems = async() => {
    const result = await executeQuery(queries.getListItems);
    return result.rows;
};

const createListItem = (products) => {
    let createdListItem;
    products?.map( async(product) => {
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

const updateListItem = async(listItem, listItemId) => {
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

const deleteListItem = async() => await executeQuery(queries.deleteListItem);

module.exports = {
    getProductsByShop,
    getListItems,
    createListItem,
    updateListItem,
    deleteListItem
};