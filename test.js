const { stringLength, reverseString, calculator, capitalize } = require('./index.js');

//Task one test
test('length of a string', () => {
    const test1 = 'Go to the market';
    const test2 = 'coming';

    expect(stringLength(test1)).toBe("Error");
    expect(stringLength(test2)).toBe(6)
})


//Task two test
test('string is reversed', () => {
    const test1 = 'welcome';
    const test2 = 'money'

    expect(reverseString(test1)).toBe('emoclew');
    expect(reverseString(test2)).toBe('yenom');
})


//Task three test
const calc = new calculator

describe('test calculator', () => {
    test('addition', () => {
        expect(calc.add(1, 2)).toBe(3)
        expect(calc.add(4, 5)).toBe(9)
        expect(calc.add(3, 5)).toBe(8)
    });

    test('subtraction', () => {
        expect(calc.subtract(3, 2)).toBe(1)
        expect(calc.subtract(6, 2)).toBe(4)
        expect(calc.subtract(5, 3)).toBe(2)
    });

    test('division', () => {
        expect(calc.divide(4, 2)).toBe(2)
        expect(calc.divide(6, 2)).toBe(3)
        expect(calc.divide(18, 3)).toBe(6)
    });

    test('multiplication', () => {
        expect(calc.multiply(4, 2)).toBe(8)
        expect(calc.multiply(6, 2)).toBe(12)
        expect(calc.multiply(18, 3)).toBe(54)
    });

    test('string is capitalized', () => {
        const text1 = 'champion';
        const text2 = 'premiership'
        const text3 = 'league'

        expect(capitalize(text1)).toMatch(/Champion/)
        expect(capitalize(text2)).toMatch(/Premiership/)
        expect(capitalize(text3)).toMatch(/League/)

    })


})
