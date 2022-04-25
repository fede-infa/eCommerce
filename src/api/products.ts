import { Request, Response } from "express";

const express = require('express');
const router = express.Router();

const file = require('../models/file');
const Product = require('../models/products');
const errorList = require('../api/errors');


// JSON with all products
router.get('/products', async (req: Request, res: Response) =>{
    const productList = await file.read();
    if(!productList.length){
        res.send({error: errorList.productList});
    } else{
        res.send(productList);
    }
});

// JSON with product from ID
router.get('/products/:id', async (req: Request, res: Response) =>{
    const productList = await file.read();
    const product = productList.find( (product:{title: string, price: number, thumbnail: string, id: string}) => product.id == req.params.id);
    if(!product){
        res.send({error: errorList.productById});
    } else{
        res.send(product);
    }
});

// Create a product
router.post('/products/', async (req: Request, res: Response) =>{
    const product = await new Product(req.body.title, req.body.price, req.body.thumbnail);
    res.send(await file.create(product));
})

// Delete a product
router.delete('/products/:id', async (req: Request, res: Response) =>{
    const resultado = await file.delete(req.params.id);
    res.json( resultado );
});

// Update a product
router.put('/products/:id', async (req: Request, res: Response) =>{
    try {
        const product = await new Product(req.body.title, req.body.price, req.body.thumbnail);
        product.id = req.params.id;
        res.send( await file.update(product));
    } catch (error) {
        return error;
    }
});

module.exports = router;