const cartController = require('../controllers/cart');

export = (router) =>{
    router
    .post('/api/v1/cart', cartController.addProduct)
    .get('/api/v1/cart', cartController.getCart)
    .delete('/api/v1/cart/:productid', cartController.deleteProduct)
    return router;
}