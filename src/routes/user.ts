import { Request, Response, Router } from "express";
const passport = require('passport');
const userController = require('../controllers/user');
const { verifyToken } = require('../middlewares/authentication')

export = (router:Router) =>{
    router
        .get('/profile', (req: Request, res:Response) =>{
            console.log(req);
            res.render(`${__dirname}/../views/profile`, {user: req.user});
        })
        
    return router;
}