import { Request, Response, Router } from "express";
const passport = require('passport');
const userController = require('../controllers/user');
const { verifyToken } = require('../middlewares/authentication')

export = (router:Router) =>{
    router
        .get('/profile', verifyToken, (req: Request, res:Response) =>{
            res.render(`${__dirname}/../views/profile`, {user: req.user});
        })
        
    return router;
}