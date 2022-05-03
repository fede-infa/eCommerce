"use strict";
class Cart {
    constructor() {
        this.id = 0;
        this.id++,
            this.timestamp = new Date().toLocaleString('en-GB'),
            this.cartList = [];
    }
    getNextId() {
        return this.cartList.length;
    }
    addProduct(newProduct) {
        const cartProduct = {
            id: this.getNextId(),
            timestamp: Date.now().toLocaleString(),
            product: newProduct
        };
        this.cartList.push(cartProduct);
        return cartProduct;
    }
    list(id = null) {
        if (!id) {
            return this.cartList;
        }
        else {
            return this.cartList[id];
        }
    }
    deleteProduct(id) {
        try {
            let cart = this.list();
            const indexToDelete = cart.findIndex((cartProduct) => cartProduct.id == id);
            console.log(`id to delete ${id}`);
            console.log(`indexToDelete ${indexToDelete}`);
            const deletedProduct = cart[indexToDelete];
            cart = cart.filter((cartProduct) => cartProduct.id != id);
            if (deletedProduct) {
                this.cartList = cart;
                return deletedProduct;
            }
        }
        catch (error) {
            return error;
        }
    }
}
module.exports = Cart;
