class myDB{
    fs = require('fs');
    file: string = '';
    constructor(file:string){
        this.file = `${__dirname}/${file}`
    }

    async read(){
        try{
            const products = await this.fs.promises.readFile(this.file, 'utf-8');
            return JSON.parse(products);
        } catch (err){
            return [];
        }
    }

    async create(product:{title: string, price: number, thumbnail:string, id:number}){
        const products = await this.read();
        product.id = products[products.length -1].id + 1;
        console.log(product);
        products.push(product);
        try{
            await this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
            return product;
        }
        catch (err){
            return err;
        }
    }

    async update(updatedProduct:{title: string, price: number, thumbnail:string, id:number}){
        let products = await this.read();
        const indexOfProduct = products.findIndex( (product: {title: string, price: number, thumbnail:string, id:number}) => product.id == updatedProduct.id);
        products.splice(indexOfProduct, 1, updatedProduct);
        try {
            if(indexOfProduct != -1){
                await this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
                return updatedProduct;
            } else {
                return {resultado: 'Error', mensaje: `No se encontro producto con el ID ${updatedProduct.id}`};
            }
        } catch (err) {
            return err;
        }

    }

    async delete(id:number){
        let products = await this.read();
        const indexToDelete = products.findIndex( (product: {title: string, price: number, thumbnail:string, id:number}) => product.id == id);
        const deletedProduct = products[indexToDelete];
        products = products.filter( (product: {title: string, price: number, thumbnail:string, id:number}) => product.id != id);
        try{
            if(deletedProduct){
                await this.fs.promises.writeFile(this.file, JSON.stringify(products, null, '\t'));
                return deletedProduct;
            } else {
                return {resultado: 'Error', mensaje: `No se encontro producto con el ID ${id}`};
            }
        } catch (err){
            console.log('entro en error')
            return err
        }
    }
}

module.exports = new myDB('products.txt');