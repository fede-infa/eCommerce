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
exports.findAll = exports.createProduct = void 0;
const ProductService = require('../services/product');
const product = new ProductService();
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('req body de createProduct', req.body);
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
        const allProducts = yield product.findAll();
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
