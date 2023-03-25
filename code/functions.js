"use strict";

const capitalise = (string) => {
    // Capitalise the first character of the string.
    let capitalised = string[0].toUpperCase();
    const result = capitalised + string.slice(1);
    return result;
};

const reverseString = (string) => {
    // Reverse a string.
    let result = [];
    for (let i = string.length - 1; i >= 0; i--) {
        result.push(string[i]);
    };
    result = result.join(``);
    return result;
};

const Calculator = (number) => {
    // An object containing a number.
    /* If an operation is done, replace
        the original number with the result.
    */
    const value = number

    const add = function (number, stored = this.value) {
        this.value = stored + number;
    };

    const substract = function(number, stored = this.value) {
        this.value = stored - number;
    };

    const divide = function(number, stored = this.value) {
        this.value = stored / number;
    };

    const multiply = function(number, stored = this.value) {
        this.value = stored * number;
    };

    return {
        value,
        add,
        substract,
        divide,
        multiply,
    };
};

const caesarChiper = (string, shiftNumber) => {
    // A function to encrypt a string using Caesar Chiper
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetCapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const currentCharacter = string[i];
        if (alphabetCapital.includes(currentCharacter)) {
            const index = alphabetCapital.indexOf(currentCharacter);
            let shiftedIndex = (index + shiftNumber) % alphabetCapital.length;
            if (shiftedIndex < 0) shiftedIndex += alphabetCapital.length;
            result += alphabetCapital[shiftedIndex];
        } else if (alphabet.includes(currentCharacter)) {
            const index = alphabet.indexOf(currentCharacter);
            let shiftedIndex = (index + shiftNumber) % alphabet.length;
            if (shiftedIndex < 0) shiftedIndex += alphabet.length;
            result += alphabet[shiftedIndex];
        } else {
            result += currentCharacter;
        };
    };

    return result;
};

const analyzeArray = (array) => {
    const calculateAverage = (array) => {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        };
        let average = sum / (array.length - 1);
        return average;
    };

    const calculateMin = (array) => {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            };
        };
        return min;
    };

    const calculateMax = (array) => {
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            };
        };
        return max;
    };

    return {
        average: Math.floor(calculateAverage(array)),
        min: calculateMin(array),
        max: calculateMax(array),
        length: array.length,
    };
};

console.log(analyzeArray([1, 8, 3, 4, 2, 6]))

export {
    capitalise,
    reverseString,
    Calculator,
    caesarChiper,
    analyzeArray,
}