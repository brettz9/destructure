// var destructure = require('destructure'); // Omit this line if including the destructure.js file in a browser

(function () {
'use strict';

function write (msg) {
    document.body.appendChild(document.createTextNode(msg));
    document.body.appendChild(document.createElement('br'));
}

function Assert () {
    if (!(this instanceof Assert)) {
        return new Assert();
    }
    this.count = 0;
}
Assert.prototype.is = function (condition, msg) {
    write(msg + ': ' + condition);
    this.count++;
    return this;
};
Assert.prototype.writeCount = function (msg) {
    write(msg + this.count);
};

window.Assert = Assert;

}());
