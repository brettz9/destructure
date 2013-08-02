/*globals define, module*/

(function () {
'use strict';

/**
* @param options
* @property {http.ServerResponse|object} [options.write] Optional object with a "write" method (e.g., a server response object from the Node.js http module)
*/
function Assert (options) {
    if (!(this instanceof Assert)) {
        return new Assert(options);
    }
    this.count = 0;
    if (options && options.write) {
        this.write = function (msg) {
            options.write(msg);
        };
    }
}
Assert.prototype.is = function is(condition, msg) {
    this.write(msg + ': ' + condition);
    this.count++;
    return this;
};
Assert.prototype.writeCount = function writeCount (msg) {
    this.write(msg + this.count);
};
Assert.prototype.write = function write (msg) {
    document.body.appendChild(document.createTextNode(msg));
    document.body.appendChild(document.createElement('br'));
};

if (typeof define === 'function' && define.amd) {
    define(function () {
        return Assert;
    });
}
else if (typeof module === 'object' && module.hasOwnProperty('exports')) {
    module.exports = Assert;
}
else {
    window.Assert = Assert;
}

}());
