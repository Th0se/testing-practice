import {
    capitalise,
    reverseString,
    Calculator,
    caesarChiper,
    analyzeArray,
} from '../code/functions.js';

describe(`capitalise function`, () => {
    test(`Should be 'Elephant'`, () => {
        expect(capitalise(`elephant`)).toBe(`Elephant`);
    });
    test(`Should be 'A'`, () => {
        expect(capitalise(`a`)).toBe(`A`);
    });
});

describe(`reverseString function`, () => {
    test(`Should be voriK`, () => {
        expect(reverseString(`Kirov`)).toBe(`voriK`);
    });
});

describe(`Calculator factory`, () => {
    test(`should be 8`, () => {
        let device = Calculator(8);
        expect(device.value).toBe(8);
    });
    test(`Should be 10`, () => {
        let device = Calculator(8);
        device.add(2);
        expect(device.value).toBe(10);
    });
    test(`Should be 6`, () => {
        let device = Calculator(8);
        device.substract(2);
        expect(device.value).toBe(6);
    });
    test(`Should be 4`, () => {
        let device = Calculator(8);
        device.divide(2);
        expect(device.value).toBe(4);
    });
    test(`Should be 16`, () => {
        let device = Calculator(8);
        device.multiply(2);
        expect(device.value).toBe(16);
    });
});

describe(`Caesar chiper`, () => {
    test(`Should be 'cplkpi`, () => {
        expect(caesarChiper(`anjing`, 2)).toBe(`cplkpi`);
    });
    test(`Should be 'Slslw'`, () => {
        expect(caesarChiper(`Pipit`, 3)).toBe(`Slslw`);
    });
    test(`Should be 'CPLKPI'`, () => {
        expect(caesarChiper(`ANJING`, 2)).toBe(`CPLKPI`);
    });
    test(`Should be 'slslW'`, () => {
        expect(caesarChiper(`pipiT`, 3)).toBe(`slslW`);
    });
});

describe(`Analyze`, () => {
    test(`object test`, () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(
            {
                average: 4,
                min: 1,
                max: 8,
                length: 6
            }
        );
    });
});