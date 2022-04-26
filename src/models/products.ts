class Product{
    title: string;
    description: string;
    code: string;
    image: string;
    price: number;
    stock: number;
    constructor(title: string, description: string, code: string, image: string, price: number){
        this.title = title,
        this.description = description,
        this.code = code,
        this.image = image,
        this.price = price,
        this.stock = Math.floor(Math.random() * (25 - 1) + 1)
    }
}

module.exports = Product;