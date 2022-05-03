"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.getCart = exports.addProduct = void 0;
const CartService = require('../services/cart');
const cart = new CartService();
const addProduct = (req, res, next) => {
    try {
        const productToAdd = req.product;
        cart.addProduct(productToAdd);
        res.json(cart);
    }
    catch (error) {
        res.json(error);
    }
};
exports.addProduct = addProduct;
const getCart = (req, res, next) => {
    try {
        res.json(cart);
    }
    catch (error) {
        res.json(error);
    }
};
exports.getCart = getCart;
const deleteProduct = (req, res, next) => {
    try {
        const product = cart.deleteProduct(req.params.id);
        res.json(product);
    }
    catch (error) {
        res.json(error);
    }
};
exports.deleteProduct = deleteProduct;
