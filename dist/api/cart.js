"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const file = require('../models/file');
const Product = require('../models/products');
const Cart = require('../models/cart');
const errorList = require('../api/errors');
// router.get('/cart', (req, res) =>{
// });
router.get('/cart/add/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productList = yield file.read();
        const indexProduct = productList.findIndex((product) => product.id === Number(req.params.id));
        Cart.addProduct(productList[indexProduct]);
        res.json(Cart);
    }
    catch (error) {
        res.send(error);
    }
}));
router.get('/cart/:id?', (req, res) => {
    try {
        if (req.params.id) {
            const product = Cart.list(req.params.id);
            res.json(product);
        }
        else {
            const cart = Cart.list();
            res.json(cart);
        }
    }
    catch (error) {
        res.send(error);
    }
});
router.delete('/cart/id', (req, res) => {
    try {
        const product = Cart.deleteProduct(req.params.id);
        res.send(product);
    }
    catch (error) {
        return error;
    }
});
module.exports = router;
