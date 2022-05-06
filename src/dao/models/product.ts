import { SchemaType } from "mongoose";

const {model, Schema} = require('mongoose');

// https://mongoosejs.com/docs/typescript.html
// 1. Create an interface representing a document in MongoDB.

interface Iproduct extends Document{
    title: string,
    description: string,
    code: string,
    image: string,
    price: number,
    stock: number,
}

// 2. Create a Schema corresponding to the document interface.
const productSchema: SchemaType = new Schema({
    title: {type: String, required: true},
    description: String,
    code: {type: String, required: true},
    image: String,
    price: {type: Number, required: true},
    stock: {type: Number, required: true}
}, {timestamps: true});

// 3. Create a Model
export = model('product', productSchema);