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
const errorList = require('../api/errors');
// JSON with all products
router.get('/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productList = yield file.read();
    if (!productList.length) {
        res.send({ error: errorList.productList });
    }
    else {
        res.send(productList);
    }
}));
// JSON with product from ID
router.get('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productList = yield file.read();
    const product = productList.find((product) => product.id == req.params.id);
    if (!product) {
        res.send({ error: errorList.productById });
    }
    else {
        res.send(product);
    }
}));
// Create a product
router.post('/products/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield new Product(req.body.title, req.body.price, req.body.thumbnail);
    res.send(yield file.create(product));
}));
// Delete a product
router.delete('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resultado = yield file.delete(req.params.id);
    res.json(resultado);
}));
// Update a product
router.put('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield new Product(req.body.title, req.body.price, req.body.thumbnail);
        product.id = req.params.id;
        res.send(yield file.update(product));
    }
    catch (error) {
        return error;
    }
}));
module.exports = router;
