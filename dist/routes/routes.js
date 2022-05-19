"use strict";
const productRouter = require('./product');
const cartRouter = require('./cart');
const authRouter = require('./auth');
const chatRouter = require('./chat');
const viewRouter = require('./views');
const userRouter = require('./user');
const authJwtRouter = require('./auth-jwt');
const processes = require('./global-child-process');
module.exports = {
    product: productRouter,
    cart: cartRouter,
    auth: authRouter,
    chat: chatRouter,
    views: viewRouter,
    user: userRouter,
    authJwt: authJwtRouter,
    appInfo: processes,
};
