"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = void 0;
function getArgv() {
    const args = process.argv.map((value, index) => {
        console.log(index, value);
        return value;
    });
    return args;
}
const arrayArgv = getArgv();
const getInfo = (req, res) => {
    res.send({
        args: arrayArgv,
        dir: process.cwd(),
        pid: process.pid,
        nodeV: process.version,
        title: process.title,
        os: process.platform,
        memoryUsage: process.memoryUsage()
    });
};
exports.getInfo = getInfo;
