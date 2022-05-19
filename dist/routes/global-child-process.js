"use strict";
const processes_1 = require("../controllers/processes");
module.exports = (router) => {
    router
        .get('/global-process', processes_1.getInfo)
        .get('/randoms', processes_1.randoms);
    return router;
};
