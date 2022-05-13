import { NextFunction, Request, Response } from "express";
const passport = require('passport');

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