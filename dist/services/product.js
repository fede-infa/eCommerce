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
const productModel = require('../dao/models/product');
module.exports = class {
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return productModel.create(product);
        });
    }
    getProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return productModel.findById(productId);
        });
    }
    getAllProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            return productModel.find();
        });
    }
    updateProduct(productId, product) {
        return __awaiter(this, void 0, void 0, function* () {
            return productModel.findByIdAndUpdate(productId, product);
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return productModel.findByIdAndDelete(productId);
        });
    }
};
