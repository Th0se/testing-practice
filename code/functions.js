//"use strict";

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

const device = Calculator(8);
console.log(device);
export {
    capitalise,
    reverseString,
    Calculator,
}