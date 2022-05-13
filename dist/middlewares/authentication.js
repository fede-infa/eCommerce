"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuthentication = exports.isAdmin = void 0;
const passport = require('passport');
const isAdmin = (options) => {
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
exports.isAdmin = isAdmin;
const checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) { // Method added by passport
        next();
    }
    else {
        res.redirect('/');
    }
};
exports.checkAuthentication = checkAuthentication;
