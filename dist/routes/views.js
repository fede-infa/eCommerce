"use strict";
module.exports = (router) => {
    router
        .get('/', (req, res) => {
        res.render(`${__dirname}/../views/index`);
    })
        .get('/login', (req, res) => {
        res.render(`${__dirname}/../views/login`);
    });
    return router;
};
