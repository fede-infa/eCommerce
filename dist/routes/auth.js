"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const passport = require('passport');
module.exports = (router) => {
    router
        .post('/login', passport.authenticate('login-local'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        res.redirect('/profile');
        // res.render(`${__dirname}/../views/profile`, {user: req.user});
    }))
        .post('/logout', (req, res) => {
        req.logOut();
        res.redirect('/');
        console.log('===> User logged out');
    });
    return router;
};
