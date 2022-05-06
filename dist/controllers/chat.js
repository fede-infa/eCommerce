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
exports.deleteMessage = exports.updateMessage = exports.getOneMessage = exports.findAllMessage = exports.addMessage = void 0;
const ChatService = require('../services/chat');
const chat = new ChatService();
const addMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMessage = yield chat.createMessage(req.body);
        res.json({
            status: 'OK',
            data: newMessage
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.addMessage = addMessage;
const findAllMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allMessages = yield chat.getAllMessage();
        res.json(allMessages);
    }
    catch (error) {
        res.json({
            msg: 'Error',
            error: error
        });
    }
});
exports.findAllMessage = findAllMessage;
const getOneMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        const messageRetrieved = yield chat.getMessage(id);
        res.json(messageRetrieved);
    }
    catch (error) {
        res.json({
            msg: 'Error',
            error: error
        });
    }
});
exports.getOneMessage = getOneMessage;
const updateMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body, params: { id } } = req;
        const updatedMessage = yield chat.updateMessage(id, body);
        res.json(updatedMessage);
    }
    catch (error) {
        res.json({
            msg: 'Error',
            error: error
        });
    }
});
exports.updateMessage = updateMessage;
const deleteMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        yield chat.deleteMessage(id);
        res.json({
            status: 'OK',
            msg: 'Message deleted'
        });
    }
    catch (error) {
        res.json({
            msg: 'Error',
            error: error
        });
    }
});
exports.deleteMessage = deleteMessage;
