"use strict";
const productController = require('../controllers/product');
module.exports = (router) => {
    router
        .post('/api/v1/product', productController.createProduct)
        .get('/api/v1/product/:productid', productController.getOne)
        .get('/api/v1/product', productController.findAll)
        .patch('/api/v1/product/:productid', productController.updateProduct)
        .delete('/api/v1/product/:productid', productController.deleteProduct);
    return router;
};
