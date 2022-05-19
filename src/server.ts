// Dependencies required for TS
import { Request } from "express";
import { Socket } from "socket.io";

// Server setup
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const session = require('express-session')
const cookieParser = require('cookie-parser');

const router = express.Router(); // Router middleware
const app = express();

const routes = require('./routes/routes'); // My routes
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io')
const io = new Server(server);
const passport = require('passport')
const GLOBALS = require('./config/globals');


/* MIDDLEWARES SETUP */
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(compression());
app.use(cookieParser())
app.use(session({
    secret: GLOBALS.SECRET_SESSION,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


/* ----------------------- */
/* --- PASSPORT CONFIG --- */
/* -----------------------*/
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('./dao/models/user');
const FacebookStrategy = require('passport-facebook').Strategy;

// Purpose: Save user ID to a cookie (user = mongoDB document, done = function which saves data into a cookie)
passport.serializeUser( (user, done) =>{
    done(null, user)
})

passport.deserializeUser((user, done) => {
  done (null, user)
})

import {comparePassword} from './utils/bcrypt'
// login-local
passport.use(
    'login-local',
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: false,
    },
    (email:string, password:string, done:any) => {
        try {
            userModel.findOne({ email: email }, function (err, user) {
                if(err) return done(err);
                if(!user) return done(null, false);
                const isMatch = comparePassword(password, user);
                if(!isMatch) return done(null, false);
                done(null, user);
                })
            } 
            catch (error) {
                return error;
            }
        }
));

/* LOGIN FACEBOOK */
passport.use(new FacebookStrategy({
    clientID: GLOBALS.FACEBOOK_CLIENT_ID,
    clienteSecret: GLOBALS.FACEBOOK_CLIENT_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos', 'emails'],
    scope: ['email'] 
}, function(accessToken, refreshToken, profile, done){
    let userProfile = profile;
    return done(null, userProfile);
}
))

app.use('/public',express.static(__dirname + '/public')); //Setting public folder
app.set('view engine', 'ejs'); // EJS template engine

// import passportMiddleware from './middlewares/passport'
// passport.use(passportMiddleware);

app.use(routes.product(router));
app.use(routes.cart(router));
app.use(routes.auth(router));
app.use(routes.chat(router));
app.use(routes.views(router));
app.use(routes.user(router));
app.use(routes.authJwt(router));

app.use('/info', routes.appInfo(router));

app.get('/auth/facebook', passport.authenticate('facebook'))
app.get('/auth/facebook/callback', passport.authenticate('facebook',{successRedirect: '/home', failureRedirect: '/faillogin' }));

module.exports = { io, server};