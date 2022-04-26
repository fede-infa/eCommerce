"use strict";
class Cart {
    constructor() {
        this.id = 0;
        this.id++,
            this.timestamp = Date.now().toLocaleString(),
            this.cartList = [];
    }
    getNextId() {
        return this.cartList.length;
    }
    addProduct(newProduct) {
        const cartProduct = {
            id: this.getNextId(),
            timestamp: Date.now().toLocaleString,
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
