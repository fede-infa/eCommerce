import { NextFunction, Request, Response } from "express";
const validateEmail = require('../utils/validate');

module.exports = function (email:string){
    return function(req:Request, res:Response, next:NextFunction){
        const isEmail = validateEmail(email);
        if(isEmail){
            next()
        } else{
            res.send({
                status: 'Error',
                message: 'Invalid mail'
            });
        }
    }
}