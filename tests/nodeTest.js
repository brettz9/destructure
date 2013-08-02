/*globals require*/
(function () {
'use strict';

var destructure = require('../destructure'),
    assert = require('./Assert')({write: function (msg) {
        console.log(msg);
    }}),
    arr = [3, 4, 5],
    added = destructure(arr, function (a, b, c) {
        return a + b + c;
    });

assert.is(added === 12, 'Passed addition test');
assert.writeCount('Total tests: ');

}());
