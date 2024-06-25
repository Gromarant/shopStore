const Bill = require('../models/billsModel');
const { responseHandler } = require('../utils');

const getBill = async (req, res) => {
    if(req.params.id) {
        responseHandler(Bill.getBillById(req.params.id), req, res, 200);
    };
};

const createBill = async (req, res) => responseHandler(Bill.createBill(req.body), req, res, 201);

const updateBill = async (req, res) => {
    if(req.params.id) {
        responseHandler(Bill.updateBill(req.body, req.params.id), req, res, 200);
    }
    else {
      return;
    };
};

const deleteBill = async (req, res) => {
    if(req.params.id) {
      responseHandler(Bill.deleteBill(req.params.id), req, res, 200);
    };
};

module.exports = {
    getBill,
    createBill,
    updateBill,
    deleteBill
};