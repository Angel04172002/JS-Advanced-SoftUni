const rgbToHexColor = require('./Programs/Unit testing & Error handling/6-rgbToHex');
const { expect } = require('chai');


describe('Rgb to Hex', () => {

    it('Should return undefined if red is invalid', () => {

        expect(rgbToHexColor(-5, 10, 15)).to.equal(undefined);
        expect(rgbToHexColor(260, 10, 15)).to.equal(undefined);
        expect(rgbToHexColor('245', 10, 15)).to.equal(undefined);
    });

    
    it('Should return undefined if green is invalid', () => {

        expect(rgbToHexColor(10, -5, 15)).to.equal(undefined);
        expect(rgbToHexColor(10, 260, 15)).to.equal(undefined);
        expect(rgbToHexColor(10, '245', 15)).to.equal(undefined);
    });

    
    it('Should return undefined if blue is invalid', () => {

        expect(rgbToHexColor(15, 10, -5)).to.equal(undefined);
        expect(rgbToHexColor(15, 10, 260)).to.equal(undefined);
        expect(rgbToHexColor(15, 10, '245')).to.equal(undefined);
    });

    it('Should return red', () => {

        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });

    it('Should return green', () => {

        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });

    it('Should return blue', () => {

        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    
    it('Should return purple', () => {

        expect(rgbToHexColor(73, 75, 172)).to.equal('#494BAC');
    });
});
