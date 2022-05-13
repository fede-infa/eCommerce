"use strict";
const passport = require('passport');
const userController = require('../controllers/user');
const { checkAuthentication } = require('../middlewares/authentication');
module.exports = (router) => {
    router
        .get('/profile', (req, res) => {
        res.render(`${__dirname}/../views/profile`, { user: req.user });
    });
    return router;
};
