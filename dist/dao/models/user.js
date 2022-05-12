"use strict";
const { model, Schema } = require('mongoose');
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
}, { timestamps: true });
module.exports = model('user', userSchema);
