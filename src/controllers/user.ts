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

import { Request, Response } from "express";
import IUser from "../typings/types";
import { comparePassword, hashPassword } from '../utils/bcrypt'
import jwt from 'jsonwebtoken'

const globals = require('../config/globals');
import UserService from '../services/user'
const User = new UserService();

function createToken(user:IUser){
    return jwt.sign({id: user._id, email: user.email}, globals.JWT_TOKEN, {
        expiresIn: 86400
    })
}

export const signUp = async (req:Request, res:Response) =>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({msg: 'Please send your email & password'})
    }

    const userRetrieved = await User.getUserByEmail(req.body.email);

    if(userRetrieved){
        return res.status(400).json('The user already exists');
    }


    const newUser = req.body;
    newUser.password = hashPassword(newUser.password);
    await User.createUser(req.body)
    res.redirect('/');
    // return res.status(201).json(newUser);

}

export const signIn = async (req:Request, res:Response) =>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({msg: 'Please send your email & password'})
    }

    const userRetrieved = await User.getUserByEmail(req.body.email);

    if(!userRetrieved){
        return res.status(400).json({msg: 'Invalid credentials'});
    }

    const isMatch = comparePassword(req.body.password, userRetrieved);
    if(isMatch){
        return res.status(200).json({token: createToken(userRetrieved)})
    }

    return res.status(400).json({msg: 'Invalid credentials'})


}
