const isSymmetric = require('./Programs/Unit testing & Error handling/5-checkForSymmetry');
const { expect } = require('chai');


describe('Check for symmetry', () => {

    it('Should return false if non array is passed', () => {

        expect(isSymmetric({})).to.equal(false);
        expect(isSymmetric(true)).to.equal(false);
        expect(isSymmetric(10)).to.equal(false);
        expect(isSymmetric(undefined)).to.equal(false);
        expect(isSymmetric(null)).to.equal(false);
        expect(isSymmetric('')).to.equal(false);
    });

    it('Should return true if array is symmetric', () => {

        let arr = [1, 2, 3, 2, 1];
        expect(isSymmetric(arr)).to.equal(true);
    });

    it('Should return false if array is not symmetric', () => {

        let arr = [1, 2, 3, 2, 5];
        expect(isSymmetric(arr)).to.equal(false);
    });

    it('Should return true if array is symmetric with another type of values', () => {

        let arr = ['5', false, false, '5'];
        expect(isSymmetric(arr)).to.equal(true);
    });

    it('Should return false if array is not symmetric with another type of values', () => {

        let arr = [undefined, null, {}];
        expect(isSymmetric(arr)).to.equal(false);
    });
});
