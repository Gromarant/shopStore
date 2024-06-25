const ListItems = require('../models/listItemsModel');
const { responseHandler } = require('../utils');

const getListItems = async (req, res) => {
    if(req.params.id) {
        responseHandler(ListItems.getListItemById(req.params.id), req, res, 200);
    };
};

const createListItems = async (req, res) => responseHandler(ListItems.createListItem(req.body), req, res, 201);

const updateListItems = async (req, res) => {
    if(req.params.id) {
        responseHandler(ListItems.updateListItem(req.body, req.params.id), req, res, 200);
    }
    else {
      return;
    };
};

const deleteListItems = async (req, res) => {
    if(req.params.id) {
      responseHandler(ListItems.deleteListItem(req.params.id), req, res, 200);
    };
};

module.exports = {
    getListItems,
    createListItems,
    updateListItems,
    deleteListItems
};