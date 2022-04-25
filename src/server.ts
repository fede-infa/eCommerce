import { Request, Response} from "express"; // Required for TS
import { Socket } from "socket.io"; // Required for TS

// Express
const express = require('express');
const app = express(); 

// Socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io')
const io = new Server(server);

// Server express
const PORT = 8080;
server.listen(PORT, () => console.log(`Server is up http://localhost:${PORT}`));

server.on('error', (err: ErrorCallback) =>{
    console.log(`Error en el servidor: ${err}`)
});

// My modules
const file = require('./models/file');
const Product = require('./api/products');

// App config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public',express.static(__dirname + '/public')) //Setting public folder
app.use('/api', Product); // Router API for products
app.set('view engine', 'ejs'); // EJS template engine

// Index.html
app.get('/', (req: Request, res: Response) =>{
    res.render(`${__dirname}/views/index`);
});

// Products table
app.get('/products/view', async(req: Request, res: Response) =>{
    const productList = await file.read();
    console.log(file);
    res.render(`${__dirname}/views/products`, {products: productList});
});

// Socket connection
const listMessages:Array<object> = [];
io.on('connection', async (socket: Socket) =>{
    console.log('User connected');
    const products = await file.read();
    io.sockets.emit('productList', products);

    // Chat feature
    socket.on('chat:new-message', (data) =>{
        listMessages.push(data);
        io.sockets.emit('chat:messages', listMessages);
    });
});