// import { Request } from "express";
// import * as passportLocal from 'passport-local';
// const LocalStrategy = passportLocal.Strategy;

import { ObjectId } from "mongodb";

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


const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../dao/models/user');


passport.use(
    'login',
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: false,
    },
    async (email:string, password:string, done:any) => {
        try {
            await userModel.findOne({ email: email }, function (err, user) {
                if(err) return done(err);
                if(!user) return done(null, false);
                if(user.password != password) return done(null, false);
                done(null, user);
                })
            } 
            catch (error) {
                return error;
            }
        }
));

passport.serializeUser( (user, done) =>{
    done(null, user._id)
})

passport.deserializeUser( async (userId, done) =>{
    await userModel.findOne(
        {_id: new ObjectId(userId)},
        (error, doc) =>{
            done(null, doc)
        }
    )
})



// export = passport.deserializeUser( async (id, done) =>{
//     const user = users.find(u => u.id == id);
//     return done(null, user);
// });

