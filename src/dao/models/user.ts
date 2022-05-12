import Iuser from "../../typings/types";
const {model, Schema} = require('mongoose');

const userSchema: Iuser = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
}, {timestamps: true})

export = model('user', userSchema);