const userModel = require('../dao/models/user');
import Iuser from '../typings/types'

export = class {
    
    async createUser(user: Iuser){
        return userModel.create(user);
    }

    async getUser(userCredentials:Iuser){
        return userModel.findOne({'email': userCredentials.email});
    }

}