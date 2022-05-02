const productModel = require('../dao/models/product');

export = class {

    async createProduct(product){
        return productModel.create(product);
    }
    
    async getProduct(productId:Number){
        return productModel.findById(productId);
    }

    async getAllProduct(){
        return productModel.find();
    }

    async updateProduct(productId:Number, product:{}){
        return productModel.findByIdAndUpdate(productId, product);
    }

    async deleteProduct(productId:Number){
        return productModel.findByIdAndDelete(productId);
    }
}