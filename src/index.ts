// Server connection
const { PORT } = require('./config/globals');
const { getConnection } = require('./dao/db/connection');
const {io, server} = require('./server');

const listMessages:Array<object> = [];

getConnection().then( (result:{}) =>{
    console.log(result);
    server.listen(PORT, () =>{
        console.log(`Server is up, listening on port ${PORT}`);
    });

    io.on('connection', async (socket) =>{
        console.log('User connected via WebSocket');
        const products = {title: 'hardcode title'};
        io.sockets.emit('productList', products);

        //chat feature
        socket.on('chat:new-message', (data) =>{
        listMessages.push(data);
        io.sockets.emit('chat:messages', listMessages);
        })
    })
}).catch( (error:ErrorCallback) => console.log(error));
