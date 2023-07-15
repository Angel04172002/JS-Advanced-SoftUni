const sum = require('./Programs/Unit testing & Error handling/4-sumOfNumbers');
const { expect } = require('chai');

describe('Sum of numbers', () => {
    
    it('Should return sum', () => {
        let arr = [1, 2, 3, 4, 5];
        let expectedSum = 15;
        let actualSum = sum(arr);

        expect(actualSum).to.equal(expectedSum);
    });

    it('Should return sum with a negative number in the array', () => {
        let arr = [-1, -2, 3, 4, 5];
        let expectedSum = 9;
        let actualSum = sum(arr);

        expect(actualSum).to.equal(expectedSum);
    });

    it('Should return sum with zeros in the array', () => {
        let arr = [0, 0, 0, 0, 0];
        let expectedSum = 0;
        let actualSum = sum(arr);

        expect(actualSum).to.equal(expectedSum);
    });

    it('Should return sum with strings in the array', () => {
        let arr = ['1', '2', '3', '4', '5'];
        let expectedSum = 15;
        let actualSum = sum(arr);

        expect(actualSum).to.equal(expectedSum);
    });
});
