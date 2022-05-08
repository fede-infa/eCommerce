"use strict";
const ProductService = require('../services/product');
const productService = new ProductService();
describe('Testing product service', () => {
    it('Product service should be a class', () => {
        expect(productService).toBeInstanceOf(ProductService);
    });
    it('Should have a method called createProduct', () => {
        expect(typeof productService.createProduct).toBe('function');
    });
    it('Should have a method called getProduct', () => {
        expect(typeof productService.getProduct).toBe('function');
    });
    it('Should have a method called getAllProduct', () => {
        expect(typeof productService.getAllProduct).toBe('function');
    });
    it('Should have a method called updateProduct', () => {
        expect(typeof productService.updateProduct).toBe('function');
    });
    it('Should have a method called deleteProduct', () => {
        expect(typeof productService.deleteProduct).toBe('function');
    });
});
