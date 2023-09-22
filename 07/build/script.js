"use strict";
// Generics
function doSomething(key) {
    if (typeof key === 'object') {
        return { haha: 'hehe' };
    }
    if (typeof key === 'number') {
        return +key;
    }
    return (key + 'ing');
}
const value = doSomething({ lol: 'lala' });
const object = {
    has: 'Niraj',
};
function showUser(user) {
    return user;
}
showUser({ id: 100 });
// Advanced Generics
function getUsersProperty(users, key) {
    return users.map((user) => user[key]);
}
console.log(getUsersProperty([
    { id: 100, name: 'Niraj' },
    { id: 200, name: 'Suraj' },
], 'name'));
