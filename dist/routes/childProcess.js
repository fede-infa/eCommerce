"use strict";
const info_1 = require("../controllers/info");
module.exports = (router) => {
    router
        .get('/global-process', info_1.getInfo);
};
