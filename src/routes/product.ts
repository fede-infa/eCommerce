import { Router } from "express";
import passport from 'passport'

const productController = require('../controllers/product');

export = (router: Router) =>{
    router
    .post('/api/v1/product', productController.createProduct)
    .get('/api/v1/product/:productid', productController.getOne)
    .get('/api/v1/product', passport.authenticate('jwt'), productController.findAll)
    .patch('/api/v1/product/:productid', productController.updateProduct)
    .delete('/api/v1/product/:productid', productController.deleteProduct)
    return router;
}