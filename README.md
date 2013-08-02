destructure
===========

Simple workaround for non-universal array destructuring assignment.

install
=======

For Node.js:

```npm install destructure```

use
===

```javascript
// var destructure = require('destructure'); // Uncomment this line if including the destructure.js file in a browser
var arr = [3, 4, 5];
var added = destructure(arr, function (a, b, c) {
    return a + b + c;
});
alert(added); // 12
```
