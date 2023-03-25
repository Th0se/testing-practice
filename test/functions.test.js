import {
    capitalise,
    reverseString,
    Calculator,
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
});