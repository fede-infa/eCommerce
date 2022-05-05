"use strict";
const productService = require('../services/product');
const instanceProductService = new productService();
describe('Testing product service', () => {
    it('Product service should be a class', () => {
        expect(instanceProductService).toBeInstanceOf(productService);
    });
    // it()
});
