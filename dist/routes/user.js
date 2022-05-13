"use strict";
const passport = require('passport');
const userController = require('../controllers/user');
const { verifyToken } = require('../middlewares/authentication');
module.exports = (router) => {
    router
        .get('/profile', (req, res) => {
        console.log(req);
        res.render(`${__dirname}/../views/profile`, { user: req.user });
    });
    return router;
};
