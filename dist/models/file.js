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
class myDB {
    constructor(file) {
        this.fs = require('fs');
        this.file = '';
        this.file = `${__dirname}/${file}`;
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.fs.promises.readFile(this.file, 'utf-8');
                return JSON.parse(products);
            }
            catch (err) {
                return [];
            }
        });
    }
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.read();
            product.id = products[products.length - 1].id + 1;
            console.log(product);
            products.push(product);
            try {
                yield this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
                return product;
            }
            catch (err) {
                return err;
            }
        });
    }
    update(updatedProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            let products = yield this.read();
            const indexOfProduct = products.findIndex((product) => product.id == updatedProduct.id);
            products.splice(indexOfProduct, 1, updatedProduct);
            try {
                if (indexOfProduct != -1) {
                    yield this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
                    return updatedProduct;
                }
                else {
                    return { resultado: 'Error', mensaje: `No se encontro producto con el ID ${updatedProduct.id}` };
                }
            }
            catch (err) {
                return err;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let products = yield this.read();
            const indexToDelete = products.findIndex((product) => product.id == id);
            const deletedProduct = products[indexToDelete];
            products = products.filter((product) => product.id != id);
            try {
                if (deletedProduct) {
                    yield this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
                    return deletedProduct;
                }
                else {
                    return { resultado: 'Error', mensaje: `No se encontro producto con el ID ${id}` };
                }
            }
            catch (err) {
                console.log('entro en error');
                return err;
            }
        });
    }
}
module.exports = new myDB('products.txt');
