import IUser from "../typings/types";

const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/globals')

export const hashPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(Number(SALT_ROUNDS)), null);
}

export const isValidPassword = (user, password) =>{
    return bcrypt.compareSync(password, user.password);
}

export const comparePassword = (password:string, user:IUser) =>{
    return bcrypt.compareSync(password, user.password)
}