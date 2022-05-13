import { Router } from "express";
const passport = require('passport');

export = (router:Router) =>{
    router
    .post('/login', passport.authenticate('login-local'), async (req, res, next) =>{
        // res.redirect(200, '/profile');
        res.render(`${__dirname}/../views/profile`, {user: req.user});
    })

    return router;
}