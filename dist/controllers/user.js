"use strict";
/* import { Request, Response } from "express";
import IUser from "../typings/types";

const UserService = require('../services/user');
const user = new UserService();

const { hashPassword } = require('../utils/bcrypt')

// export const createUser = async (req, res, next) =>{
//     try {
//         let userReq = {...req.body};
//         hashPassword(userReq.password);
//         const newUser = await user.createUser(userReq);
        
//     } catch (error) {
//         res.status(400).json({
//             msg: 'Error',
//             error: error
//         })
//     }
// }

// export const getOne = async (req, res, next) =>{
//     try {
//         res.json({
//             status: 200,
//             msg: 'User controller'
//         })
        
//     } catch (error) {
//         res.status(400).send({
//             msg: 'Error',
//             error: error,
//         })
//     }
// } */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const bcrypt_1 = require("../utils/bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const globals = require('../config/globals');
const user_1 = __importDefault(require("../services/user"));
const User = new user_1.default();
function createToken(user) {
    return jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, globals.JWT_TOKEN, {
        expiresIn: 86400
    });
}
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ msg: 'Please send your email & password' });
    }
    const userRetrieved = yield User.getUserByEmail(req.body.email);
    if (userRetrieved) {
        return res.status(400).json('The user already exists');
    }
    const newUser = req.body;
    newUser.password = (0, bcrypt_1.hashPassword)(newUser.password);
    yield User.createUser(req.body);
    res.redirect('/');
    // return res.status(201).json(newUser);
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ msg: 'Please send your email & password' });
    }
    const userRetrieved = yield User.getUserByEmail(req.body.email);
    if (!userRetrieved) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const isMatch = (0, bcrypt_1.comparePassword)(req.body.password, userRetrieved);
    if (isMatch) {
        return res.status(200).json({ token: createToken(userRetrieved) }); // res.token now has the user token
    }
    return res.status(400).json({ msg: 'Invalid credentials' });
});
exports.signIn = signIn;
