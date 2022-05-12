const productRouter = require('./product');
const cartRouter = require('./cart');
const authRouter = require('./auth');
const chatRouter = require('./chat');
const viewRouter = require('./views');

export = {
    product: productRouter,
    cart: cartRouter,
    auth: authRouter,
    chat: chatRouter,
    views: viewRouter,
}