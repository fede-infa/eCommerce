"use strict";
const validateEmail = require('../utils/errors');
describe('Testing validation email function', () => {
    it('Should return true when giving a email with @', () => {
        console.log(validateEmail('infantino.fede@gmail.com'));
        validateEmail('infantino.fede@gmail.com').toBe(true);
    });
});
