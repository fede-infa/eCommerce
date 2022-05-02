const ProductService = require('../services/product');
const product = new ProductService();

export const createProduct = async(req, res, next) => {
    try {
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
        const allProducts = await product.getAllProduct();
        res.json(allProducts)
    } catch (error) {
        res.json({
            msg: 'Error',
            error: error
        })
    }
}
