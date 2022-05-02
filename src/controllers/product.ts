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

export const getOne = async (req, res, next) =>{
    try {
        const {params: {productid}} = req;
        const productRetrieved = await product.getProduct(productid);
        res.json(productRetrieved);
    } catch (error) {
        res.json({
            msg: 'Error',
            error: error
        });
    }
}

export const updateProduct = async (req, res, next) =>{
    try {
        const {
            body,
            params: {productid}
        } = req;
        const updatedProduct = await product.updateProduct(productid, body);
        res.json(updateProduct);
    } catch (error) {
        res.json({
            msg: 'Product could not be updated',
            error: error
        })
    }
}

export const deleteProduct = async (req, res, next) =>{
    try {
        const {params: {productid} } = req;
        await product.deleteProduct(productid);
        res.json({ msg: 'Product deleted'});
    } catch (error) {
        res.json({
            msg: 'Product could not be deleted',
            error: error
        })
    }
}