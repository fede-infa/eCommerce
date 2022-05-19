"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randoms = exports.getInfo = void 0;
// import { numberCoincidence } from "../utils/calculations";
const child_process_1 = require("child_process");
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
const randoms = (req, res) => {
    if (req.query.quantity) {
        const quantity = req.query.quantity;
        let forkResponse;
        const calculation = (0, child_process_1.fork)(__dirname + '/../utils/calculations', [quantity.toString(), '1', '1000']);
        calculation.send('start');
        calculation.on('message', sum => {
            forkResponse = sum;
            res.send(forkResponse);
            calculation.kill();
        });
    }
};
exports.randoms = randoms;
