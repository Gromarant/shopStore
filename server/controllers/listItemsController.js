const ListItems = require('../models/listItemsModels');
const { responseHandler } = require('../utils');

const getListItems = async (req, res) => {
    if(req.params.id) {
        responseHandler(ListItems.getListItemsById(req.params.id), req, res, 200);
    };
};

const createListItems = async (req, res) => responseHandler(ListItems.createListItems(req.body), req, res, 201);

const updateListItems = async (req, res) => {
    if(req.params.id) {
        responseHandler(ListItems.updateListItems(req.body, req.params.id), req, res, 200);
    }
    else {
      return;
    };
};

const deleteListItems = async (req, res) => {
    if(req.params.id) {
      responseHandler(ListItems.deleteListItems(req.params.id), req, res, 200);
    };
};

module.exports = {
    getListItems,
    createListItems,
    updateListItems,
    deleteListItems
};