"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
