class Errors{
    products: {}[];
    file: {}[];
    server: {}[];
    user:{}[];

    constructor(){
        this.products = [{
            'porductList': 'There are no products',
            'productById': 'There is no product with such ID' 
        }],
        this.file = [{}],
        this.server = [{}],
        this.user = [{
            'error': '-1',
            'description': `User not authorized`
        }];
    };
};

module.exports = new Errors;