"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.isValidPassword = exports.hashPassword = void 0;
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/globals');
const hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(Number(SALT_ROUNDS)), null);
};
exports.hashPassword = hashPassword;
const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password);
};
exports.isValidPassword = isValidPassword;
const comparePassword = (password, user) => {
    return bcrypt.compareSync(password, user.password);
};
exports.comparePassword = comparePassword;
