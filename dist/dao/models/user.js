"use strict";
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true });
module.exports = (0, mongoose_1.model)('user', userSchema);
