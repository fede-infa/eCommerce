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
// Server connection
const { PORT } = require('./config/globals');
const { getConnection } = require('./dao/db/connection');
const { io, server } = require('./server');
const listMessages = [];
// Connection to DB, then to server, then socket connection
getConnection()
    .then((result) => {
    console.log(result);
    server.listen(PORT, () => {
        console.log(`Server is up, listening on port ${PORT}`);
    });
})
    .then(() => {
    io.on('connection', (socket) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('WebSocket connection successful');
        //chat feature
        socket.on('chat:new-message', (data) => {
            listMessages.push(data);
            io.sockets.emit('chat:messages', listMessages);
        });
    }));
})
    .catch((error) => console.log(error));
