import { ObjectId } from "mongodb";
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