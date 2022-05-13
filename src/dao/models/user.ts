import {model, Schema, Document} from 'mongoose';
import bcrypt from 'bcrypt'

interface IUser extends Document{
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    comparePassword: () => Promise<boolean>
}

const userSchema = new Schema({
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
}, {timestamps: true})

// userSchema.pre<IUser>('save', async function(next){
//     if(!this.isModified('password')) return next()

//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(this.password, salt)
//     this.password = hash;
//     next()
// })

export = model<IUser>('user', userSchema);