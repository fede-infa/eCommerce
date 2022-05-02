"use strict";
const { model, Schema, Model } = require('mongoose');
// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    code: { type: String, required: true },
    image: String,
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
});
module.exports = model('product', productSchema);
