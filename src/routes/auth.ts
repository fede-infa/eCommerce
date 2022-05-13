import { Router } from "express";
const passport = require('passport');

export = (router:Router) =>{
    router
    .post('/login', passport.authenticate('login-local'), async (req, res, next) =>{
        res.redirect('/profile')
        // res.render(`${__dirname}/../views/profile`, {user: req.user});
    })
    .post('/logout', (req, res) =>{
        req.logOut();
        res.redirect('/');
        console.log('===> User logged out');
    })

    return router
}