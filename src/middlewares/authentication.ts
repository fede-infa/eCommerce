import { NextFunction, Request, Response } from "express";

const user:{nickname:string, admin:boolean} = {
  'nickname': 'Fede',
  'admin': false
}


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