import { NextFunction, Request, Response } from "express";

declare global {
  namespace Express {
    interface Request {
      admin: boolean;
    }
  }
}

function adminAuth(req: Request, res:Response, next:NextFunction){
    if(req.body.user.isAdmin){
        req.admin = true;
        next()
    } else{
        res.send('User is not admin');
    }
}