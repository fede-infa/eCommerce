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
Object.defineProperty(exports, "__esModule", { value: true });
// Server setup
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const routes = require('./routes/routes'); // Routes to pass the router
const session = require('express-session');
const cookieParser = require('cookie-parser');
const router = express.Router();
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const passport = require('passport');
// const authPassport = require('./Auth/index')
app.use(express.json());
app.use(cors());
app.use(compression());
// app.use(cookieParser())
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
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('./dao/models/user');
// Purpose: Save user ID to a cookie (user = mongoDB document, done = function which saves data into a cookie)
passport.serializeUser((user, done) => {
    done(console.log('error'), user._id);
});
// Purpose: Retrieve User details from cookies
passport.deserializeUser((userId, done) => __awaiter(void 0, void 0, void 0, function* () {
    const userRetreived = yield userModel.findOne({ _id: userId }, (error, document) => {
        done(console.log('error'), document);
    });
}));
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
/* app.use('/public',express.static(__dirname + '/public')) //Setting public folder */
app.use('/public', express.static(__dirname + '/public')); //Setting public folder
app.set('view engine', 'ejs'); // EJS template engine
// app.use('/login', authPassport); // Before every route
app.use(routes.product(router));
app.use(routes.cart(router));
app.use(routes.auth(router));
app.use(routes.chat(router));
module.exports = { io, server };
