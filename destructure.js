/**
* Simple workaround for unsupported array destructuring assignment
* @param {array} arr Array of values to destructure
* @param {function} unpackCb The callback which will be passed each value of the array in order
* @returns {*} Returns the result of the unpackCb() execution
* @example
* var arr = [3, 4, 5];
* var added = destructure(arr, function (a, b, c) {
*     return a + b + c;
* });
* added; // 12
*/
function unpack (arr, unpackCb) {
    return unpackCb.apply(null, arr);
}
