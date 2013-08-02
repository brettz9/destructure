/*globals module, define*/
/**
* Simple workaround for non-universal array destructuring assignment
* @param {array} arr Array of values to destructure
* @param {function} unpackCb The callback which will be passed each value of the array in order
* @returns {*} Returns the result of the unpackCb() execution
* @example
* var destructure = require('destructure'); // Omit this line if including the destructure.js file in a browser
* var arr = [3, 4, 5];
* var added = destructure(arr, function (a, b, c) {
*     return a + b + c;
* });
* alert(added); // 12
*/
(function () {
    'use strict';

function destructure (arr, unpackCb) {
    return unpackCb.apply(null, arr);
}

if (typeof define === 'function' && define.amd) {
    define(function () {
        return destructure;
    });
}
else if (typeof module === 'object' && module.hasOwnProperty('exports')) {
    module.exports = destructure;
}
else {
    this.destructure = destructure;
}

}());
