const { Calculator } = require('../calculator');

const calc = new Calculator();

describe('check Divide-functionality', () => {
    it.each([
        [4, 2, 2],
        [10, 100, 0.1],
    ])('check division of positive numbers', async (a, b, c) => {
        expect(calc.divide(a, b)).toBe(c);
    });

    it.each([
        [-4, 2, -2],
        [4, -1, -4],
        [-40, -10, 4],
    ])('check division of negative numbers', async (a, b, c) => {
        expect(calc.divide(a, b)).toBe(c);
    });

    it('check division of fractional numbers', async () => {
        const result = calc.divide(0.8, 2);
        expect(result).toBeCloseTo(0.4);
    });

    it('check division null to number', async () => {
        const result = calc.divide(null, 5);
        expect(result).not.toBeNull();
        expect(result).toBe(0);
        expect(typeof result).toEqual('number');
    });

    it('check division to 0', async () => {
        const result = calc.divide(5, 0);
        expect(result).not.toBeNull();
        expect(typeof result).toEqual('number');
        expect(result).toEqual(Infinity);
    });

    it('check result is defined ', async () => {
        const result = calc.divide(5, 5);
        expect(result).toBeDefined();
    });
});
