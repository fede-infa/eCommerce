"use strict";
const mongoose_1 = require("mongoose");
const chatSchema = new mongoose_1.Schema({
    author: new mongoose_1.Schema({
        id: String,
        first_name: String,
        last_name: String,
        age: Number,
        user_name: String,
        email: String,
        avatar: String
    }),
    message: String
}, { timestamps: true });
module.exports = (0, mongoose_1.model)('chat', chatSchema);
