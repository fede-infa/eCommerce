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
// Express
const express = require('express');
const app = express();
// Socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
// Server express
const PORT = 8080;
server.listen(PORT, () => console.log(`Server is up http://localhost:${PORT}`));
server.on('error', (err) => {
    console.log(`Error en el servidor: ${err}`);
});
// My modules
const file = require('./models/file');
const Product = require('./api/products');
// App config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public')); //Setting public folder
app.use('/api', Product); // Router API for products
app.set('view engine', 'ejs'); // EJS template engine
// Index.html
app.get('/', (req, res) => {
    res.render(`${__dirname}/views/index`);
});
// Products table
app.get('/products/view', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productList = yield file.read();
    console.log(file);
    res.render(`${__dirname}/views/products`, { products: productList });
}));
// Socket connection
const listMessages = [];
io.on('connection', (socket) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('User connected');
    const products = yield file.read();
    io.sockets.emit('productList', products);
    // Chat feature
    socket.on('chat:new-message', (data) => {
        listMessages.push(data);
        io.sockets.emit('chat:messages', listMessages);
    });
}));
