const ProductService = require('../services/product');
const product = new ProductService();

export const createProduct = async(req, res, next) => {
    try {
        console.log('req body de createProduct', req.body);
        const newProduct = await product.createProduct(req.body);
        res.json({
            msg: 'Product created',
            product: newProduct
        })
    } catch (error) {
        res.json({
            msg: 'Error',
            error: error
        })
    }
}

export const findAll = async(req, res, next) => {
    try {
        const allProducts = await product.findAll();
        res.json(allProducts)
    } catch (error) {
        res.json({
            msg: 'Error',
            error: error
        })
    }
}
