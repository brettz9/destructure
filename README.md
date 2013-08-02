destructure
===========

Simple workaround for non-universal array destructuring assignment.

install
=======

```npm install destructure```

use
===

```javascript
var destructure = require('destructure');
var arr = [3, 4, 5];
var added = destructure(arr, function (a, b, c) {
    return a + b + c;
});
alert(added); // 12
```
