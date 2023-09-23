"use strict";
// Function Overloading
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function random(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return `${a}${b}`;
}
// console.log(random(1, 1))
// console.log(random(1, '1').length)
// Decorators
function Logger() {
    return function (target) {
        console.log('Logging', target.name);
    };
}
function withLoggerForProperty() {
    return function (target, property, descriptor) {
        console.log(target, property, descriptor);
    };
}
function withParameter() {
    return function (target, nameOfMethod, position) {
        console.log(target, nameOfMethod, position);
    };
}
let Pino = class Pino {
    constructor(name) {
        this.name = name;
    }
    get getDisplay() {
        return this.name;
    }
    set setDisplay(name) {
        this.name = name;
    }
};
__decorate([
    withLoggerForProperty()
], Pino.prototype, "getDisplay", null);
__decorate([
    withLoggerForProperty(),
    __param(0, withParameter())
], Pino.prototype, "setDisplay", null);
Pino = __decorate([
    Logger()
], Pino);
// const log = new Pino('Fastify')
// const log2 = new Pino('Fastify')
