destructure
===========

[![Greenkeeper badge](https://badges.greenkeeper.io/brettz9/destructure.svg)](https://greenkeeper.io/)

Simple workaround for non-universal array destructuring assignment.

install
=======

For Node.js:

```npm install destructure```

use
===

```javascript
var destructure = require('destructure'); // Omit this line if including the destructure.js file in a browser
var arr = [3, 4, 5];
var added = destructure(arr, function (a, b, c) {
    return a + b + c;
});
console.log(added); // 12
```
