import { Request, Response } from "express";
const isAdmin = require('../middlewares/authentication');

const express = require('express');
const router = express.Router();

const file = require('../models/file');
const Product = require('../models/products');
const errorList = require('../utils/errors');

const user:{name: string, isAdmin: boolean} = {
    'name': 'testing',
    'isAdmin': true
}

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
router.post('/products/', isAdmin(user), async (req: Request, res: Response) =>{
    try {
        const product = await new Product(req.body.title, req.body.description, req.body.code, req.body.price, req.body.image);
        console.log(`Product: ${JSON.stringify(product)}`);
        res.send(await file.create(product));
    } catch (error) {
        res.json(error); // One way of response
    }
})

// Delete a product
router.delete('/products/:id', isAdmin(user), async (req: Request, res: Response) =>{
    try {
        const resultado = await file.delete(req.params.id);
        res.json( resultado );
    } catch (error) {
        res.send(error) // One way of response
    }
});

// Update a product
router.put('/products/:id', isAdmin(user), async (req: Request, res: Response) =>{
    try {
        const product = await new Product(req.body.title, req.body.description, req.body.code, req.body.price, req.body.image);
        product.id = req.params.id;
        res.send( await file.update(product));
    } catch (error) {
        return error; // One way of response
    }
});

module.exports = router;