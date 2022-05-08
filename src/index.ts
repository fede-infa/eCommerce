import { Socket } from "socket.io";

// Server connection
const { PORT } = require('./config/globals');
const { getConnection } = require('./dao/db/connection');
const {io, server} = require('./server');
const Chat = require('./services/chat');

const listMessages:{}[] = [];
let messages = new Chat();

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
            console.log('WebSocket connection successful');
            io.sockets.emit('chat:messages', await messages.getAllMessage());
            //chat feature
            socket.on('chat:new-message', async (data: {userEmail:string, userMessageDate:string, userMessage:string}) =>{
                await messages.createMessage(data);
                io.sockets.emit('chat:messages', await messages.getAllMessage());

            })
        })
    })
    .catch( (error:ErrorCallback) => console.log(error));
