"use strict";
// import { Request } from "express";
// import * as passportLocal from 'passport-local';
// const LocalStrategy = passportLocal.Strategy;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
// const passport = require('passport');
// // const LocalStrategy = require('passport-local').Strategy;
// const userModel = require('../dao/models/user')
// module.exports = () =>{
//     passport.use(
//         'login', 
//         new LocalStrategy( (username:string, password:string, done: any) =>{
//             try {
//                 console.log('in login strategy');
//                 userModel.findOne({username: username}, (err:any, user:any) =>{
//                     console.log('user', user);
//                 })
//             } catch (error) {
//                 console.log('in catch of auth.index.ts');
//                 return error;
//             }
//         }
//     ))
//     // SIGNUP
//     // passport.use('signup', new LocalStrategy(
//     //     function(username:string, password:string, done){
//     //         userModel.findOne({username: username}, (err, user) =>{
//     //        })
//     //     }
//     // ))
// }
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../dao/models/user');
passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: false,
}, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModel.findOne({ email: email }, function (err, user) {
            if (err)
                return done(err);
            if (!user)
                return done(null, false);
            if (user.password != password)
                return done(null, false);
            done(null, user);
        });
    }
    catch (error) {
        return error;
    }
})));
passport.serializeUser((user, done) => {
    done(null, user._id);
});
passport.deserializeUser((userId, done) => __awaiter(void 0, void 0, void 0, function* () {
    yield userModel.findOne({ _id: new mongodb_1.ObjectId(userId) }, (error, doc) => {
        done(null, doc);
    });
}));
// export = passport.deserializeUser( async (id, done) =>{
//     const user = users.find(u => u.id == id);
//     return done(null, user);
// });
