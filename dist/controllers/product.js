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
exports.deleteProduct = exports.updateProduct = exports.getOne = exports.findAll = exports.createProduct = void 0;
const ProductService = require('../services/product');
const product = new ProductService();
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params);
    try {
        const newProduct = yield product.createProduct(req.body);
        res.json({
            msg: 'Product created',
            product: newProduct
        });
    }
    catch (error) {
        res.json({
            msg: 'Error',
            error: error
        });
    }
});
exports.createProduct = createProduct;
const findAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProducts = yield product.getAllProduct();
        res.json(allProducts);
    }
    catch (error) {
        res.json({
            msg: 'Error',
            error: error
        });
    }
});
exports.findAll = findAll;
const getOne = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { productid } } = req;
        const productRetrieved = yield product.getProduct(productid);
        res.json(productRetrieved);
    }
    catch (error) {
        res.json({
            msg: 'Error',
            error: error
        });
    }
});
exports.getOne = getOne;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body, params: { productid } } = req;
        const updatedProduct = yield product.updateProduct(productid, body);
        res.json(exports.updateProduct);
    }
    catch (error) {
        res.json({
            msg: 'Product could not be updated',
            error: error
        });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { productid } } = req;
        yield product.deleteProduct(productid);
        res.json({ msg: 'Product deleted' });
    }
    catch (error) {
        res.json({
            msg: 'Product could not be deleted',
            error: error
        });
    }
});
exports.deleteProduct = deleteProduct;
