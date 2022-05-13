const userModel = require('../dao/models/user');
import Iuser from '../typings/types'

export = class UserService {
    
    async createUser(user: Iuser){
        return userModel.create(user);
    }

    async getUserByEmail(email:string){
        return userModel.findOne({'email': email});
    }

}