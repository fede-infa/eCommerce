"use strict";
const express_1 = require("express");
const router = (0, express_1.Router)();
const user_1 = require("../controllers/user");
module.exports = (router) => {
    router.post('/signup', user_1.signUp);
    router.post('/signin', user_1.signIn);
    return router;
};
