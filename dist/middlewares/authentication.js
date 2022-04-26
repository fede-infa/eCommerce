"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    'nickname': 'Fede',
    'admin': false
};
module.exports = function (options) {
    return function (req, res, next) {
        if (options.isAdmin === true) {
            next();
            return;
        }
        else {
            res.send('User is not admin');
        }
    };
};
