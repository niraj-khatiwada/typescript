"use strict";
// Type Assertion (Type Casting)
const year = document.getElementById('year');
if (!(year == null)) {
    year.textContent = new Date().getFullYear().toString();
}
