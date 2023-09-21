"use strict";
// Type Aliases
// Literal Types
let _name;
// OR
// interface multiply {
//   (a: number, b: number): number
// }
// Optional & default parameters
const calculateProduct = function (a, b, c = 1) {
    return a * b * c;
};
calculateProduct(1, 2);
// Rest Operators
function sum(...nums) {
    return nums.reduce((a, c) => a + c, 0);
}
console.log(sum(1, 2, 3));
// Never Type
function superfluous(wat) {
    throw new Error('Oops!' + (wat !== null && wat !== void 0 ? wat : ''));
}
const numberOrString = function (value) {
    if (typeof value === 'number')
        return 'number';
    if (typeof value === 'string')
        return 'string';
    // throw new Error('Wat?')
    // OR
    superfluous('Wat?');
};
