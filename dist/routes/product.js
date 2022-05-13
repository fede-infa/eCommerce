"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const passport_1 = __importDefault(require("passport"));
const productController = require('../controllers/product');
module.exports = (router) => {
    router
        .post('/api/v1/product', productController.createProduct)
        .get('/api/v1/product/:productid', productController.getOne)
        .get('/api/v1/product', passport_1.default.authenticate('jwt'), productController.findAll)
        .patch('/api/v1/product/:productid', productController.updateProduct)
        .delete('/api/v1/product/:productid', productController.deleteProduct);
    return router;
};
