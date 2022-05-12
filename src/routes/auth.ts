import { Router } from "express";
const passport = require('passport');

export = (router:Router) =>{
    router
    .post('/login', passport.authenticate('login'), async (req, res, next) =>{
            res.send(req.user);
        })
        
    
    return router;
}