"use strict";
// Classes
class TSClass {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    display() {
        return this._name + this._age;
    }
}
const class1 = new TSClass('Niraj', 26);
// console.log(class1.display())
class TSClassExtended extends TSClass {
    constructor(name, age) {
        super(name, age);
    }
}
const classExtended = new TSClassExtended('Suraj', 22);
console.log(classExtended.display());
