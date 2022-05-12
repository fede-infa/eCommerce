/* const productController = require('../controllers/product');

export = (router) =>{
    router
    .post('/api/v1/product', productController.createProduct)
    .get('/api/v1/product/:productid', productController.getOne)
    .get('/api/v1/product', productController.findAll)
    .patch('/api/v1/product/:productid', productController.updateProduct)
    .delete('/api/v1/product/:productid', productController.deleteProduct)
    return router;
} */

const productRouter = require('./product');
const cartRouter = require('./cart');
const authRouter = require('./auth');
const chatRouter = require('./chat');

export = {
    product: productRouter,
    cart: cartRouter,
    auth: authRouter,
    chat: chatRouter
}