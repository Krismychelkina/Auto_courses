const { Calculator } = require('../calculator');

const calc = new Calculator();

describe('check Multiply-functionality', () => {
    it.each([
        [1, 2, 2],
        [100, 100, 10000],
    ])('check multiplication of positive numbers', async (a, b, c) => {
        expect(calc.multiply(a, b)).toBe(c);
    });

    it.each([
        [-1, 2, -2],
        [1, -2, -2],
        [-20, -10, 200],
    ])('check multiplication of negative numbers', async (a, b, c) => {
        expect(calc.multiply(a, b)).toBe(c);
    });

    it.each([
        [0, 2, 0],
        [3, 0, 0],
        [0, 0, 0],
    ])('check multiplication of 0', async (a, b, c) => {
        expect(calc.multiply(a, b)).toBe(c);
    });

    it('check multiplication of numbers when number is written as string', async () => {
        const result = calc.multiply('3', 5);
        expect(typeof result).toEqual('number');
        expect(result).toBe(15);
    });

    it('check multiplication of fractional numbers', async () => {
        const result = calc.multiply(0.3, 0.5);
        expect(result).toBeCloseTo(0.15);
    });

    it('check multiplication of "null" ', async () => {
        const result = calc.multiply(null, 5);
        expect(result).not.toBeNull();
        expect(result).toBe(0);
    });

    it('check result is defined', async () => {
        const result = calc.multiply(5, 5);
        expect(result).toBeDefined();
    });
});
