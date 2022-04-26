class Product{
    readonly fs = require('fs');
    readonly file = 'products.txt';
    title: string;
    description: string;
    code: string;
    image: string;
    price: number;
    stock: number;
    constructor(title: string, description: string, code: string, image: string, price: number, stock: number){
        this.title = title,
        this.description = description,
        this.code = code,
        this.image = image,
        this.price = price,
        this.stock = stock
    }    


    async read(){
        try{
            const products = await this.fs.promises.readFile(this.file, 'utf-8');
            return JSON.parse(products);
        } catch (err){
            return [];
        }
    }

    async create(product:{title:string, description:string, code:string, image:string, price:number, stock:number, id:number}){
        const products = await this.read();
        product.id = products[products.length -1].id + 1;
        products.push(product);
        try{
            await this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
            return product;
        }
        catch (err){
            return err;
        }
    }

    async update(updatedProduct:{title:string, description:string, code:string, image:string, price:number, stock:number, id:number}){
        let products = await this.read();
        const indexOfProduct = products.findIndex( (product: {id:number}) => product.id == updatedProduct.id);
        products.splice(indexOfProduct, 1, updatedProduct);
        try {
            if(indexOfProduct != -1){
                await this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
                return updatedProduct;
            } else {
                return {resultado: 'Error', mensaje: `There is no product with ID ${updatedProduct.id}`};
            }
        } catch (err) {
            return err;
        }

    }

    async delete(id:number){
        let products = await this.read();
        const indexToDelete = products.findIndex( (product: {id:number}) => product.id == id);
        const deletedProduct = products[indexToDelete];
        products = products.filter( (product: {id:number}) => product.id != id);
        try{
            if(deletedProduct){
                await this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
                return deletedProduct;
            } else {
                return {resultado: 'Error', mensaje: `There is no product with ID ${id}`};
            }
        } catch (err){
            return err
        }
    }
}

module.exports = Product;