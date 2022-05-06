"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateEmail = require('../utils/validate');
module.exports = function (email) {
    return function (req, res, next) {
        const isEmail = validateEmail(email);
        if (isEmail) {
            next();
        }
        else {
            res.send({
                status: 'Error',
                message: 'Invalid mail'
            });
        }
    };
};
