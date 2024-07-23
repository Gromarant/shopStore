const ListItems = require('../models/listItemsModel');
const { responseHandler } = require('../utils');


const updateListProductsFromShop = async(req, res) => responseHandler(ListItems.getProductsByShop(req.body), req, res, 200);

const getListItems = async(req, res) => {
    await responseHandler(ListItems.getListItems(), req, res, 200);
};

const putListItems = async(req, res) => {
    const handler = async() => {
        await ListItems.deleteListItem();
        await ListItems.createListItem(req.body);
    }
    await responseHandler(await handler(), req, res, 201);
};

const deleteListItems = async(req, res) => {
    if(req.body) {
        await responseHandler(ListItems.deleteListItem(), req, res, 200);
    };
};

module.exports = {
    updateListProductsFromShop,
    getListItems,
    putListItems,
    deleteListItems
};