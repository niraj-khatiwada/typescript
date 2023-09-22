"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Partial
var Grade;
(function (Grade) {
    Grade["A"] = "A";
    Grade["B"] = "B";
    Grade["C"] = "C";
})(Grade || (Grade = {}));
function update(student, propsToUpdate) {
    return Object.assign(Object.assign({}, student), propsToUpdate);
}
const student1 = {
    id: 100,
    class: 10,
    grade: Grade.A,
};
// console.log(update(student1, { isVerified: true }))
// Required
function strictUpdate(student, propsToUpdate) {
    return Object.assign(Object.assign({}, student), propsToUpdate);
}
// console.log(
//   strictUpdate(student1, {
//     id: 100,
//     class: 10,
//     grade: Grade.B,
//     isVerified: false,
//   })
// )
// Readonly
function strictUpdateReadonly(student, propsToUpdate) {
    return Object.assign(Object.assign({}, student), propsToUpdate);
}
const updated = strictUpdateReadonly(student1, {
    id: 100,
    class: 10,
    grade: Grade.B,
    isVerified: false,
});
// updated.class = 100
// Record
const colors = {
    code: 'Code',
    for: 'For',
    real: 'Real',
};
const student = {
    Niraj: 'A',
    Suraj: 'C',
};
// Pick & Omit
// Pick
const pickedStudent = {
    id: 100,
    class: 12,
};
// Omit
const omittedStudent = {
    grade: Grade.A,
};
// ReturnType: A way of deriving types
function doesNotKnowWhatItReturns(name, age) {
    return { name, age };
}
const value = {
    name: 'Niraj',
    age: 22,
};
const value2 = ['Niraj', 26];
// Awaited: Await a promise
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .catch();
    });
}
const st1 = [{ class: 10, id: 100, grade: Grade.A }];
