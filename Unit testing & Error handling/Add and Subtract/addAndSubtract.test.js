const createCalculator = require('./Programs/Unit testing & Error handling/7-addSubtract');
const { expect } = require('chai');


describe('Add and Subtract', () => {

    it('Should have correct properties', () => {

        let calculator = createCalculator();
        expect(calculator).to.have.property('add');
        expect(calculator).to.have.property('subtract');
        expect(calculator).to.have.property('get');
    });

    it('Should return value of internal sum', () => {

        let calculator = createCalculator();
        let expectedValue = 0;
        expect(calculator.get()).to.equal(expectedValue);
    });

    it('Should return value of internal sum when added and subtracted', () => {

        let calculator = createCalculator();
        calculator.add(10);
        calculator.subtract(3);
        let expectedValue = 7;
        expect(calculator.get()).to.equal(expectedValue);
    });

    it('Should return value of internal sum when added and subtracted with strings', () => {

        let calculator = createCalculator();
        calculator.add('10');
        calculator.subtract('3');
        let expectedValue = 7;
        expect(calculator.get()).to.equal(expectedValue);
    });
});
