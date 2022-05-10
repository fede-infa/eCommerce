const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/globals')

export const hashPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_ROUNDS), null);
}

export const isValidPassword = (user, password) =>{
    return bcrypt.compareSync(password, user.password);
}