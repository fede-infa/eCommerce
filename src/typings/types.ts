import { Document} from 'mongoose'

interface IUser extends Document{
    first_name: string,
    last_name: string,
    password: string,
    email: string,
}

export = IUser;