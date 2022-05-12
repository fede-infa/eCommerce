"use strict";
module.exports = (router) => {
    router
        .get('/index', (req, res) => {
        res.render(`${__dirname}/../views/index`);
    })
        .get('/', (req, res) => {
        res.render(`${__dirname}/../views/login`);
    });
    return router;
};
