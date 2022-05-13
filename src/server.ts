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
// const authPassport = require('./Auth/index')


/* MIDDLEWARES SETUP */
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(compression());
app.use(cookieParser())
app.use(session({
    secret: require('./config/globals').SECRET_SESSION,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


/* ----------------------- */
/* --- PASSPORT CONFIG --- */
/* -----------------------*/
// const LocalStrategy = require('passport-local').Strategy;
// const userModel = require('./dao/models/user');

// // Purpose: Save user ID to a cookie (user = mongoDB document, done = function which saves data into a cookie)
// passport.serializeUser( (user, done) =>{
//     done(null, user._id)
// })

// // Purpose: Retrieve User details from cookies
// passport.deserializeUser( async (_id, done) =>{
//     const userRetreived = await userModel.findOne(
//         { _id: _id},
//         (error, document) =>{
//             done(null, document)
//         }
//     )
// })

// // login-local
// passport.use(
//     'login-local',
//     new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: false,
//     },
//     (email:string, password:string, done:any) => {
//         try {
//             userModel.findOne({ email: email }, function (err, user) {
//                 if(err) return done(err);
//                 if(!user) return done(null, false);
//                 if(user.password != password) return done(null, false);
//                 done(null, user);
//                 })
//             } 
//             catch (error) {
//                 return error;
//             }
//         }
// ));

/* app.use('/public',express.static(__dirname + '/public')) //Setting public folder */
app.use('/public',express.static(__dirname + '/public')); //Setting public folder
app.set('view engine', 'ejs'); // EJS template engine

// app.use('/login', authPassport); // Before every route
import passportMiddleware from './middlewares/passport'

passport.use(passportMiddleware);

app.use(routes.product(router));
app.use(routes.cart(router));
app.use(routes.auth(router));
app.use(routes.chat(router));
app.use(routes.views(router));
app.use(routes.user(router));
app.use(routes.authJwt(router));

module.exports = { io, server};