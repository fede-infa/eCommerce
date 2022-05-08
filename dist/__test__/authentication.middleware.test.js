"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authenticationMiddleware = require('../middlewares/authentication');
describe('Test of user authentication function', () => {
    let mockRequest;
    let mockResponse;
    let nextFunction = jest.fn();
    beforeEach(() => {
        mockRequest = {},
            mockResponse = {
                json: jest.fn()
            };
    });
    it('Should return a next() function if param {isAdmin:true}', () => {
        authenticationMiddleware({ isAdmin: true });
        expect(nextFunction).toBeCalledTimes(1);
    });
    it('Should return a string telling user is not admin if param isAdmin = false', () => {
        const result = authenticationMiddleware({ isAdmin: false });
        expect(result).toBe('User is not admin');
    });
});
