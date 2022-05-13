"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.notLoggedIn = exports.checkAuthentication = exports.isAdmin = void 0;
const passport = require('passport');
const jwt = __importStar(require("jsonwebtoken"));
const globals = require('../config/globals');
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
const notLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/index');
    }
};
exports.notLoggedIn = notLoggedIn;
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token)
        res.status(403).json({ error: 'Please provide a token' });
    jwt.verify(token, globals.JWT_TOKEN, (err, value) => {
        if (err)
            res.status(500).json({ error: 'Failed to authenticate token' });
        req.user = value.data;
        next();
    });
};
exports.verifyToken = verifyToken;
