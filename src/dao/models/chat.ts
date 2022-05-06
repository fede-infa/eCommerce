import { SchemaType } from "mongoose";

const {Schema, model} = require('mongoose');

interface Imessage extends Document{
    author: {
        id: string,
        first_name: string,
        last_name: string,
        age: number,
        user_name: string,
        avatar: string
    },
    message: string
}

const chat: SchemaType = new Schema({
    author: {
        id: String,
        first_name: String,
        last_name: String,
        age: Number,
        user_name: String,
        avatar: String
    },
    message: String
})

export = model('chat', chat);