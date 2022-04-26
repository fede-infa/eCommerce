"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function adminAuth(req, res, next) {
    if (req.body.user.isAdmin) {
        req.admin = true;
        next();
    }
    else {
        res.send('User is not admin');
    }
}
