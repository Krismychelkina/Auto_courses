const { Calculator } = require('../calculator');

const calc = new Calculator();

describe('check Exponentiation-functionality', () => {
    it.each([
        [0, 0],
        [4, 16],
        [100, 10000],
    ])('check exponentiation of positive numbers', async (a, b) => {
        expect(calc.exponentiation(a)).toBe(b);
    });

    it.each([
        [-1, 1],
        [-40, 1600],
    ])('check exponentiation of negative numbers', async (a, b) => {
        expect(calc.exponentiation(a)).toBe(b);
    });

    it('check exponentiation of numbers when number is written as "string"', async () => {
        const result = calc.exponentiation('3');
        expect(typeof result).toEqual('number');
        expect(result).toEqual(9);
    });

    it('check exponentiation of fractional numbers', async () => {
        const result = calc.exponentiation(0.4);
        expect(result).toBeCloseTo(0.16);
    });

    it('check exponentiation of null', async () => {
        const result = calc.exponentiation(null);
        expect(result).not.toBeNull();
        expect(result).toBe(0);
    });

    it('check result is defined', async () => {
        const result = calc.exponentiation(5);
        expect(result).toBeDefined();
        expect(result).toBe(25);
    });
});
