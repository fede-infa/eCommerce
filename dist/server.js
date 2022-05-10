"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Server setup
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const routes = require('./routes/routes'); // Routes to pass the router
const bcrypt = require('bcrypt');
const router = express.Router();
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
/* app.use('/public',express.static(__dirname + '/public')) //Setting public folder */
app.use('/public', express.static(__dirname + '/public')); //Setting public folder
app.set('view engine', 'ejs'); // EJS template engine
app.use(routes.product(router));
app.use(routes.cart(router));
app.use(routes.views(router));
app.use(routes.chat(router));
module.exports = { io, server };
