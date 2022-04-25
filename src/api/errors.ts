class Errors{
    products: Object = {};
    file: Object = {};
    server: Object = {};

    constructor(){
        this.products = {
            'porductList': 'There are no products',
            'productById': 'There is no product with such ID' 
        };
    };
};

module.exports = new Errors;