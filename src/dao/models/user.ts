import Iuser from "../../typings/types";
const {model, Schema} = require('mongoose');

const userSchema: Iuser = new Schema({
    username: String,
    password: String,
    email: String,
}, {timestamps: true})

export = model('user', userSchema);