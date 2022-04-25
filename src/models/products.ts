class Product{
    title: string;
    price: number;
    thumbnail: string;
    constructor(title: string, price: number, thumbnail: string){
        this.title = title,
        this.price = price,
        this.thumbnail = thumbnail
    }    
}

module.exports = Product;