import {Request, Response} from 'express';

const express = require('express');
const router = express.Router();

const file = require('../models/file');
const Product = require('../models/products');
const Cart = require('../models/cart');
const errorList = require('../api/errors');

// router.get('/cart', (req, res) =>{
    
// });

router.get('/cart/add/:id', async (req: Request, res: Response) =>{
    try {
        const productList = await file.read();
        const indexProduct = productList.findIndex((product:{id: number}) => product.id === Number(req.params.id));
        Cart.addProduct(productList[indexProduct]);
        res.json(Cart);
    } catch (error) {
        res.send(error);
    }
});

router.get('/cart/:id?', (req: Request, res: Response) =>{
    try {
        if(req.params.id){
            const product = Cart.list(req.params.id);
            res.json(product);
        } else{
            const cart = Cart.list();
            res.json(cart);
        }
    } catch (error) {
        res.send(error);
    }
})

router.delete('/cart/id', (req: Request, res: Response) =>{
    try {
        const product = Cart.deleteProduct(req.params.id);
        res.send(product);
    } catch (error) {
        return error;
    }
})

module.exports = router;