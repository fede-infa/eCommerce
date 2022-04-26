"use strict";
class Product {
    constructor(title, description, code, image, price) {
        this.title = title,
            this.description = description,
            this.code = code,
            this.image = image,
            this.price = price,
            this.stock = Math.floor(Math.random() * (25 - 1) + 1);
    }
}
module.exports = Product;
