const Pantry = require('../models/pantriesModel');
const { responseHandler } = require('../utils');

const getPantry = async (req, res) => {
    if(req.params.id) {
        responseHandler(Pantry.getPantryById(req.params.id), req, res, 200);
    };
};

const createPantry = async (req, res) => responseHandler(Pantry.createPantry(req.body), req, res, 201);

const updatePantry = async (req, res) => {
    if(req.params.id) {
        responseHandler(Pantry.updatePantry(req.body, req.params.id), req, res, 200);
    }
    else {
      return;
    };
};

const deletePantry = async (req, res) => {
    if(req.params.id) {
      responseHandler(Pantry.deletePantry(req.params.id), req, res, 200);
    };
};

module.exports = {
    getPantry,
    createPantry,
    updatePantry,
    deletePantry
};