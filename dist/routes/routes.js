"use strict";
const productController = require('../controllers/product');
module.exports = (router) => {
    router
        .post('/api/v1/product', productController.createProduct)
        .get('/api/v1/student/:productid', productController.getOne)
        .get('/api/v1/product', productController.findAll)
        .patch('/api/v1/student/:productid', productController.updateProduct)
        .delete('/api/v1/student/:productid', productController.deleteProduct);
    return router;
};
