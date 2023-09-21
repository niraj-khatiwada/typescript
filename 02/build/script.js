"use strict";
// Functions
function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return `${a}${b}`;
}
// Tuples
const _tuple = new Array(1);
_tuple.push(...[1, 'Niraj']);
// console.log(_tuple)
let _list = [];
_list[0] = 100;
let _tuple1 = [26, 'Niraj'];
let _tuple2 = [27, 'Suraj'];
// Objects
// const hello: Object = { name: 27 }
const hello = { name: 27 };
hello.name = 90;
const obj = [100];
const obj2 = { name: 'Niraj' };
const obj3 = { name: 'Niraj' };
// Enums
var ABC;
(function (ABC) {
    ABC["YES"] = "YES";
    ABC["NO"] = "NO";
    ABC["NOT_GIVEN"] = "NG";
})(ABC || (ABC = {}));
console.log(ABC.YES);
