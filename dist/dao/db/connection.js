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
const mongoose = require('mongoose');
const { MONGO_URI, MONGODB_URL } = require('../../config/globals');
exports.getConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return {
            status: 'OK',
            msg: 'Connection success'
        };
    }
    catch (error) {
        return {
            status: 'ERROR',
            msg: error
        };
    }
});
