const lookupChar = require('./Programs/Exercise - Unit tests/3-charLookup');
const { expect } = require('chai');


describe('Tests for char lookup', () => {

    it('Should return undefined if first parameter is not a string', () => {

        expect(lookupChar(5, 3)).to.be.undefined;
        expect(lookupChar(undefined, 3)).to.be.undefined;
        expect(lookupChar(null, 3)).to.be.undefined;
        expect(lookupChar([], 3)).to.be.undefined;
        expect(lookupChar({}, 3)).to.be.undefined;
    });

    
    it('Should return undefined if second parameter is not a number', () => {

        expect(lookupChar('', 3.5)).to.be.undefined;
        expect(lookupChar('', undefined)).to.be.undefined;
        expect(lookupChar('', null)).to.be.undefined;
        expect(lookupChar('', [])).to.be.undefined;
        expect(lookupChar('', {})).to.be.undefined;
    });

        
    it('Should return incorrect index if length is lower than index or index is below zero', () => {

        expect(lookupChar('', -5)).to.equal('Incorrect index');
        expect(lookupChar('abc', 3)).to.equal('Incorrect index');
    });

    it('Should return the character at the specified index', () => {

        expect(lookupChar('abc', 1)).to.equal('b');
        expect(lookupChar('abcd', 2)).to.equal('c');
        expect(lookupChar('a', 0)).to.equal('a');
    });
});
