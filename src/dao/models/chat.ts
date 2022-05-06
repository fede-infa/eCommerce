import { Schema, Types, model, Model } from 'mongoose';

/* //Subdocument definition
interface Iauthor extends Document{
    id: string,
    first_name: string,
    last_name: string,
    age: number,
    user_name: string,
    avatar: string,
}

//Parent document definition
interface Ichat extends Document{
    author: Iauthor,
    message: string
}

type ChatModelSchema = Model<Ichat>;
const chatSchema = new Schema<Ichat, ChatModelSchema>({
    author: new Schema<Iauthor>({
            id: String,
            first_name: String,
            last_name: String,
            age: Number,
            user_name: String,
            avatar: String
        }),
    message: String
}, {timestamps: true}) */

//Document definition
interface Ichat extends Document{
    id: string,
    first_name: string,
    last_name: string,
    age: number,
    user_name: string,
    avatar: string,
    message: string 
}

type ChatModelSchema = Model<Ichat>;
const chatSchema = new Schema<Ichat, ChatModelSchema>({
    id: String,
    first_name: String,
    last_name: String,
    age: Number,
    user_name: String,
    avatar: String,
    message: String
}, {timestamps: true})

export = model<Ichat, ChatModelSchema>('chat', chatSchema);
