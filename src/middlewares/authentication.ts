import { NextFunction, Request, Response } from "express";

module.exports = function (options:{isAdmin: true}){
  return function(req: Request, res:Response, next:NextFunction){
    if(options.isAdmin === true){
      next()
      return;
    } else {
      res.send('User is not admin');
    }
  }
};