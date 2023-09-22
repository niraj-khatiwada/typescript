"use strict";
// Index Signatures
const obj = {
    // abc: 'Lol',
    // def: 'Lal',
    classes: [10],
};
obj.classes = [100];
// for (const key in obj) {
//   console.log(key, obj[key as keyof Inter])
// }
function displayKeyAndValue(key) {
    console.log(key, obj[key]);
}
displayKeyAndValue('classes');
const obj2 = {
    code: 'Code',
    for: 'For',
    real: 'Real',
};
const obj3 = {
    code: 'Code',
    for: 'Code',
    real: 'Code',
};
