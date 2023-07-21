describe('Tests for payment package', () => {

    describe('Tests for name', () => {

        it('Constructor should set properly parameters', () => {

            let package = new PaymentPackage('AB', 20);
            assert.equal(package.name, 'AB');
            assert.equal(package.value, 20);
            assert.equal(package.VAT, 20);
            assert.equal(package.active, true);
        });

        it('Should throw an error if type is not a string', () => {
            expect(() => new PaymentPackage(25, 20)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(true, 20)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(undefined, 20)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(null, 20)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage([], 20)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage({}, 20)).to.throw('Name must be a non-empty string');
        });

        it('Should throw an error if length of the string is zero', () => {
            expect(() => new PaymentPackage('', 20)).to.throw('Name must be a non-empty string');
        });

        it('Should set properly if the parameters are valid', () => {
            expect(() => new PaymentPackage('AB', 20)).to.not.throw('Name must be a non-empty string');
        });
    });

    describe('Tests for value', () => {
        it('Should throw an error if type is not a number', () => {
            expect(() => new PaymentPackage('AB', null)).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('AB', undefined)).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('AB', '20')).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('AB', [])).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('AB', {})).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('AB', true)).to.throw('Value must be a non-negative number');
        });

        it('Should throw an error if the number is below 0', () => {
            expect(() => new PaymentPackage('AB', -5)).to.throw('Value must be a non-negative number');
        });

        it('Should set properly if the parameters are valid', () => {
            expect(() => new PaymentPackage('AB', 20)).to.not.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('AB', 0)).to.not.throw('Value must be a non-negative number');
        });
    });


    describe('Tests for VAT', () => {
        it('Should throw an error if type is not a number', () => {

            let instance = new PaymentPackage('AB', 20);

            expect(() => instance.VAT = '').to.throw('VAT must be a non-negative number');
            expect(() => instance.VAT = true).to.throw('VAT must be a non-negative number');
            expect(() => instance.VAT = undefined).to.throw('VAT must be a non-negative number');
            expect(() => instance.VAT = null).to.throw('VAT must be a non-negative number');
            expect(() => instance.VAT = []).to.throw('VAT must be a non-negative number');
            expect(() => instance.VAT = {}).to.throw('VAT must be a non-negative number');
        });

        it('Should throw an error if the number is below 0', () => {
            let instance = new PaymentPackage('AB', 20);
            expect(() => instance.VAT = -5).to.throw('VAT must be a non-negative number');
        });

        it('Should set properly if the parameters are valid', () => {
            let instance = new PaymentPackage('AB', 20);
            expect(() => instance.VAT = 10).to.not.throw('VAT must be a non-negative number');
            expect(() => instance.VAT = 0).to.not.throw('VAT must be a non-negative number');
        });
    });


    describe('Tests for active', () => {
        it('Should throw an error if type is not boolean', () => {

            let instance = new PaymentPackage('AB', 20);

            expect(() => instance.active = '').to.throw('Active status must be a boolean');
            expect(() => instance.active = 5).to.throw('Active status must be a boolean');
            expect(() => instance.active = undefined).to.throw('Active status must be a boolean');
            expect(() => instance.active = null).to.throw('Active status must be a boolean');
            expect(() => instance.active = []).to.throw('Active status must be a boolean');
            expect(() => instance.active = {}).to.throw('Active status must be a boolean');
        });

        it('Should set properly if the parameters are valid', () => {
            let instance = new PaymentPackage('AB', 20);
            expect(() => instance.VAT = true).to.not.throw('Active status must be a boolean');
            expect(() => instance.VAT = false).to.not.throw('Active status must be a boolean');
        });
    });

    describe('Tests for toString()', () => {

        it('Should return correct output with VAT = 30', () => {
            let instance = new PaymentPackage('AB', 123); 
            instance.VAT = 30;
            let output = [`Package: AB`, `- Value (excl. VAT): 123`, `- Value (VAT 30%): 159.9`];
            expect(instance.toString()).to.equal(output.join('\n'));
        });

        it('Should return correct output with inactive = false', () => {
            let instance = new PaymentPackage('AB', 123); 
            instance.active = false;
            let output = [`Package: AB (inactive)`, `- Value (excl. VAT): 123`, `- Value (VAT 20%): 147.6`];
            expect(instance.toString()).to.equal(output.join('\n'));
        });


        it('Should return correct output with inactive = false and VAT = 30', () => {
            let instance = new PaymentPackage('AB', 123); 
            instance.active = false;
            instance.VAT = 30;
            let output = [`Package: AB (inactive)`, `- Value (excl. VAT): 123`, `- Value (VAT 30%): 159.9`];
            expect(instance.toString()).to.equal(output.join('\n'));
        });
    });
});
