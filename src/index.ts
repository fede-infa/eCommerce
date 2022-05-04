import { Socket } from "socket.io";

// Server connection
const { PORT } = require('./config/globals');
const { getConnection } = require('./dao/db/connection');
const {io, server} = require('./server');

const listMessages:{}[] = [];

// Connection to DB, then to server, then socket connection
getConnection()
    .then( (result:{}) =>{
        console.log(result);
        server.listen(PORT, () =>{
            console.log(`Server is up, listening on port ${PORT}`);
        })
    })
    .then( () =>{
        io.on('connection', async (socket:Socket) =>{
            console.log('User connected via WebSocket');
            const products = {title: 'hardcode title'};
            io.sockets.emit('productList', products);

            //chat feature
            socket.on('chat:new-message', (data) =>{
                listMessages.push(data);
                io.sockets.emit('chat:messages', listMessages);
            })
        })
    })
    .catch( (error:ErrorCallback) => console.log(error));
