"use strict";
class Errors {
    constructor() {
        this.products = {};
        this.file = {};
        this.server = {};
        this.products = {
            'porductList': 'There are no products',
            'productById': 'There is no product with such ID'
        };
    }
    ;
}
;
module.exports = new Errors;
