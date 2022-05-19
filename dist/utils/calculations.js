"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomNumber_1 = require("./randomNumber");
const quantity = process.argv[2];
const minRange = process.argv[3];
const maxRange = process.argv[4];
const numberCoincidence = (quantity, minRange, maxRange) => {
    let numbers = {};
    for (let i = 0; i < quantity; i++) {
        let number = (0, randomNumber_1.randomNumber)(minRange, maxRange);
        numbers[number] = (numbers[number] || 0) + 1;
    }
    return numbers;
};
process.on('message', msg => {
    const sum = numberCoincidence(Number(quantity), Number(minRange), Number(maxRange));
    process.send(sum);
});
