"use strict";
const { checkAuthentication } = require('../middlewares/authentication');
module.exports = (router) => {
    router
        .get('/index', checkAuthentication, (req, res) => {
        res.render(`${__dirname}/../views/index`);
    })
        .get('/', (req, res) => {
        res.render(`${__dirname}/../views/login`);
    })
        .get('/signup', (req, res) => {
        res.render(`${__dirname}/../views/signup`);
    });
    return router;
};
