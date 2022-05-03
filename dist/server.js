"use strict";
/* import { Request, Response} from "express"; // Required for TS
import { Socket } from "socket.io"; // Required for TS

// Express
const express = require('express');
const app = express();
const cors = require('cors');
const compression = require('compression');
require('dotenv').config();

// Socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io')
const io = new Server(server);

// Server express
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost'
server.listen(PORT, () => console.log(`Server is up http://${HOST}:${PORT}`));

server.on('error', (err: ErrorCallback) =>{
    console.log(`Error en el servidor: ${err}`)
});

// My modules
const file = require('./models/file');
const Product = require('./api/products');
const Cart = require('./api/cart');

// App config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public',express.static(__dirname + '/public')) //Setting public folder
app.use('/api', Product); // Router API for products
app.use('/api', Cart); // Router API for products
app.set('view engine', 'ejs'); // EJS template engine

// Index.html
app.get('/', (req: Request, res: Response) =>{
    res.render(`${__dirname}/views/index`);
});

// Products table
app.get('/products/view', async(req: Request, res: Response) =>{
    const productList = await file.read();
    console.log(productList);
    res.render(`${__dirname}/views/products`, {products: productList});
});

// Socket connection
const listMessages:Array<object> = [];
io.on('connection', async (socket: Socket) =>{
    console.log('User connected via WebSocket');
    const products = await file.read();
    io.sockets.emit('productList', products);

    // Chat feature
    socket.on('chat:new-message', (data) =>{
        listMessages.push(data);
        io.sockets.emit('chat:messages', listMessages);
    });
}); */
Object.defineProperty(exports, "__esModule", { value: true });
// Server setup
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const routes = require('./routes/routes');
const router = express.Router();
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(routes.product(router));
app.use(routes.cart(router));
module.exports = { io, server };
