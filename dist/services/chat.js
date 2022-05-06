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
const chatModel = require('../dao/models/chat');
module.exports = class {
    createMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return chatModel.create(message);
        });
    }
    getMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return chatModel.findById(id);
        });
    }
    getAllMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return chatModel.create();
        });
    }
    updateMessage(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return chatModel.findByIdAndUpdate(id, message);
        });
    }
    deleteMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return chatModel.findByIdAndDelete(id);
        });
    }
};
