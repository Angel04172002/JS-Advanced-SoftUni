const mathEnforcer = require('./Programs/Exercise - Unit tests/4-mathEnforcer');
const { expect } = require('chai');

describe('Tests for math enforcer', () => {

    describe('Add five', () => {

        it('Should return undefined if the parameter is not a number', () => {

            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            expect(mathEnforcer.addFive(true)).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;

        });

        it('Should return correct result if the parameter is a number', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
        });
    });


    describe('Subtract ten', () => {

        it('Should return undefined if the parameter is not a number', () => {

            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;

        });

        it('Should return correct result if the parameter is a number', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
            expect(mathEnforcer.subtractTen(11.5)).to.be.closeTo(1.5, 0.01);
        });
    });


    describe('Sum', () => {

        it('Should return undefined if any parameter is not a number', () => {
            expect(mathEnforcer.sum(5, '10')).to.be.undefined;
            expect(mathEnforcer.sum('5', 10)).to.be.undefined;
            expect(mathEnforcer.sum('5', '10')).to.be.undefined;
            expect(mathEnforcer.sum(true, false)).to.be.undefined;
            expect(mathEnforcer.sum([], {})).to.be.undefined;
        });

        it('Should return the sum if the parameters are valid', () => {
            expect(mathEnforcer.sum(10, 10)).to.equal(20);
            expect(mathEnforcer.sum(-5, -10)).to.equal(-15);
            expect(mathEnforcer.sum(-5, 5)).to.equal(0);
            expect(mathEnforcer.sum(1.5, 3)).to.be.closeTo(4.5, 0.01);
            expect(mathEnforcer.sum(1.5, 3.1)).to.be.closeTo(4.6, 0.01);
        });
    });
});
