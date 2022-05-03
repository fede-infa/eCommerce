const CartService = require('../services/cart');
const cart = new CartService();

export const addProduct = (req, res, next) =>{
    try {
        const productToAdd = req.product;
        cart.addProduct(productToAdd)
        res.json(cart)
    } catch (error) {
        res.json(error);
    }
}

export const getCart = (req, res, next) =>{
    try {
        res.json(cart);
    } catch (error) {
        res.json(error)
    }
}

export const deleteProduct = (req, res, next) =>{
    try {
        const product = cart.deleteProduct(req.params.id);
        res.json(product);
    } catch (error) {
        res.json(error)
    }
}