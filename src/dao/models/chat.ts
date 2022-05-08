import { Schema, Types, model, Model } from 'mongoose';

// ------ With subdocument ------ Documentation ==> https://mongoosejs.com/docs/typescript/subdocuments.html
//Subdocument definition
interface Iauthor extends Document{
    id: string,
    first_name: string,
    last_name: string,
    age: number,
    user_name: string,
    email: string,
    avatar: string,
}

//Parent document definition
interface Ichat extends Document{
    author: Iauthor,
    message: string
}

// Models and schemas
// Define property overrides for hydrated documents
type ChatDocumentOverrides = {
  names: Types.Subdocument<Types.ObjectId> & Iauthor;
};
type ChatModelType = Model<Ichat, {}, ChatDocumentOverrides>;

const chatSchema = new Schema<Ichat, ChatModelType>({
    author: new Schema<Iauthor>({
            id: String,
            first_name: String,
            last_name: String,
            age: Number,
            user_name: String,
            email: String,
            avatar: String
        }),
    message: String
}, {timestamps: true})

export = model<Ichat, ChatModelType>('chat', chatSchema);