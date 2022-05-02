const productController = require('../controllers/product2');
console.log(`this is productController`, productController);

export = (router) =>{
    router
    .post('/api/v1/product', productController.createProduct)
    // .get('/api/v1/student/:studentid', productController.getOne)
    .get('/api/v1/product', productController.findAll)
    // .patch('/api/v1/student/:studentid', productController.updateStudent)
    // .delete('/api/v1/student/:studentid', productController.deleteOne)
    return router;
}