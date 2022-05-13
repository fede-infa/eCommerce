import { NextFunction, Request, Response } from "express";
const passport = require('passport');
import * as jwt from 'jsonwebtoken'
const globals = require('../config/globals');

export const isAdmin = (options:{isAdmin: true}) =>{
  return function(req: Request, res:Response, next:NextFunction){
    if(options.isAdmin === true){
      next();
      return;
    } else {
      res.send('User is not admin');
    }
  }
};


export const checkAuthentication = (req, res, next) =>{
    if(req.isAuthenticated()){ // Method added by passport
        next()
    } else{
        res.redirect('/');
    }
}

export const notLoggedIn = (req, res, next) =>{
  if(!req.isAuthenticated()){
    next()
  } else{
    res.redirect('/index')
  }
}


export const verifyToken = (req, res, next) =>{
  const token = req.headers.authorization
  if(!token) res.status(403).json({error: 'Please provide a token'})

  jwt.verify(token, globals.JWT_TOKEN, (err, value) =>{
    if(err) res.status(500).json({error: 'Failed to authenticate token'})
    req.user = value.data
    next()
  })
}