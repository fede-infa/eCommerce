
class Cart{
    id: number = 0;
    timestamp: string;
    cartList:any[];
    
    constructor(){
        this.id++,
        this.timestamp = new Date().toLocaleString('en-GB'),
        this.cartList = []
    }

    getNextId(){
        return this.cartList.length;
    }


    addProduct(newProduct:{id: number, timestamp: string, title: string, description: string, code: string, image: string, price: number}):{}{
        const cartProduct = {
            id: this.getNextId(),
            timestamp: Date.now().toLocaleString(),
            product: newProduct 
        }
        this.cartList.push(cartProduct);
        return cartProduct;
    }

    list(id = null){
        if(!id){
            return this.cartList;
        } else{
            return this.cartList[id];
        }
    }

    deleteProduct(id: number){
        try {
            let cart = this.list();
            const indexToDelete = cart.findIndex( (cartProduct: {id: number}) => cartProduct.id == id);
            const deletedProduct = cart[indexToDelete];
            cart = cart.filter( (cartProduct: any) => cartProduct.id != id);
            
            if(deletedProduct){
                this.cartList = cart;
                return deletedProduct;
            }
        } catch (error) {
            return error;
        }


    }
}

module.exports = Cart;