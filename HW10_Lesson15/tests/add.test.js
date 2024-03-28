const { Calculator } = require('../calculator');

const calc = new Calculator();

describe('check Add-functionality', () => {
    test.each([
        [1, 2, 3],
        [109, 81, 190],
    ])('check addition of positive numbers', (a, b, c) => {
        expect(calc.add(a, b)).toBe(c);
    });

    test.each([
        [-1, 2, 1],
        [3, -3, 0],
        [-90, -5, -95],
    ])('check addition of negative numbers', (a, b, c) => {
        expect(calc.add(a, b)).toBe(c);
    });

    test.each([
        [0, 2, 2],
        [3, 0, 3],
        [0, 0, 0],
    ])('check addition of "zero"', (a, b, c) => {
        expect(calc.add(a, b)).toBe(c);
    });

    test('check addition of fractional numbers', () => {
        const result = calc.add(0.3, 0.5);
        expect(result).toBeCloseTo(0.8);
    });

    test('check addition of "null"', () => {
        const result = calc.add(null, 0);
        expect(result).toEqual(0);
    });

    test('check result is not "Null"', () => {
        const result = calc.add(5, -5);
        expect(result).not.toBeNull();
        expect(result).toBe(0);
    });
});

test('check addition of numbers when number is written as string', () => {
    const result = calc.add(5, '3');
    expect(typeof result).toEqual('string');
    expect(result).toBe('53');
});

it('check result is defined ', async () => {
    const result = calc.add(5, 5);
    expect(result).toBeDefined();
});
