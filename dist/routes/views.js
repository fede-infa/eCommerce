"use strict";
module.exports = (router) => {
    router.get('/', (req, res) => {
        res.render(`${__dirname}/../views/index`);
    });
    return router;
};
