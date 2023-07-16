const isOddOrEven = require('./Programs/Exercise - Unit tests/2-evenOrOdd');
const { expect } = require('chai');

describe('Tests for even or odd', () => {

    it('Should return undefined if type is not a string', () => {

        expect(isOddOrEven(5)).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
        expect(isOddOrEven(undefined)).to.be.undefined;
        expect(isOddOrEven(true)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
    });

    it('Should return even if length is even', () => {
        expect(isOddOrEven('hand')).to.equal('even');
    });

    
    it('Should return odd if length is odd', () => {
        expect(isOddOrEven('phone')).to.equal('odd');
    });
});
