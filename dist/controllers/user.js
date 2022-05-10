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
exports.getOne = exports.createUser = void 0;
const UserService = require('../services/user');
const user = new UserService();
const { hashPassword } = require('../utils/bcrypt');
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userReq = Object.assign({}, req.body);
        hashPassword(userReq.password);
        const newUser = yield user.createUser(userReq);
    }
    catch (error) {
        res.status(400).json({
            msg: 'Error',
            error: error
        });
    }
});
exports.createUser = createUser;
const getOne = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        res.status(400).send({
            msg: 'Error',
            error: error,
        });
    }
});
exports.getOne = getOne;
