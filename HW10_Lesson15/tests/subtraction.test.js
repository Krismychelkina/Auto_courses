const { Calculator } = require('../calculator');
const calc = new Calculator();

describe('check Subtraction-functionality', () => {
    test.each([
        [5, 2, 3],
        [40, 10, 30],
    ])('check subtraction of positive numbers', (a, b, c) => {
        expect(calc.subtraction(a, b)).toBe(c);
    });

    test.each([
        [-1, 2, -3],
        [3, -3, 6],
        [-400, -100, -300],
    ])('check subtraction of negative numbers', (a, b, c) => {
        expect(calc.subtraction(a, b)).toBe(c);
    });

    test.each([
        [0, -2, 2],
        [3, 0, 3],
        [0, 0, 0],
    ])('check subtraction of 0', (a, b, c) => {
        expect(calc.subtraction(a, b)).toBe(c);
    });

    test('check subtraction of only numbers', () => {
        const result = calc.subtraction(1, 5); // Исправлено количество передаваемых аргументов
        expect(result).toEqual(-4); // Ожидается, что результат вычитания будет -4
    });

    test('check subtraction of numbers when number is written as string', () => {
        const result = calc.subtraction('3', 5);
        expect(typeof result).not.toBeNaN();
        expect(typeof result).toBe('number');
        expect(result).toBe(-2);
    });

    test('check subtraction of fractional numbers', () => {
        const result = calc.subtraction(0.8, 0.5);
        expect(result).toBeCloseTo(0.3);
    });

    test('check subtraction of "null"', () => {
        const result = calc.subtraction(null, 5);
        expect(result).toEqual(-5);
    });

    test('check result is not "Null"', () => {
        const result = calc.subtraction(-5, -5);
        expect(result).not.toBeNull();
        expect(result).toBe(0);
    });

    test('check result of subtraction is defined', () => {
        const result = calc.subtraction(5, 15);
        expect(result).toBeDefined();
    });
});
