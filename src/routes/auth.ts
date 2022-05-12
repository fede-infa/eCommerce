// import { Request, Response, Router } from "express";
// const passport = require('passport');



// export = (router: Router) =>{
//     router
//         .post('/login',  passport.authenticate('login', {failuerRedirect: '/faillogin'}), (req:Request, res: Response) =>{
//             res.json({
//                 msg: 'Estas logeado'
//             })
//         })
//         .get('/faillogin', (req,res) => {
//             res.render('login-error', {});
//         })
    
//     return router;
// }

import { Router } from "express";
const user = require('../dao/models/user');
const passport = require('passport');

export = (router:Router) =>{
    router
        .post('/login-test', passport.authenticate('login'), async (req, res, next) =>{
            res.send(req.user);
        })
    
    return router;
}