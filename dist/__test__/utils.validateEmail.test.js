"use strict";
const validateEmail = require('../utils/validate');
describe('Testing validation email function', () => {
    it('Should return true when giving a email with @', () => {
        expect(validateEmail('infantino.fede@gmail.com')).toBe(true);
    });
    it('Should return false when param without @', () => {
        expect(validateEmail('infantino.fedegmail.com')).toBe(false);
    });
    it('Should return false when the param has spaces', () => {
        expect(validateEmail('infantino. fedegmail.com')).toBe(false);
    });
    it('Should return false when the string has no data before @', () => {
        expect(validateEmail('@gmail.com')).toBe(false);
    });
});
