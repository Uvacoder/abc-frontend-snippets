---
title: Do not add custom methods to primitive objects
category: Practice
date: 2021-02-22 22:54:00 +7
layout: layouts/post.njk
topics: JavaScript
---

It is not recommended to add a custom method to primitive objects such as `Array`, `Boolean`, `Number`, `String`, etc.
Since the `for ... in` statement loops over the enumerable properties, it will include new methods which are added to the prototype.

```js
Array.prototype.isEmpty = function () {
    return (this.length = 0);
};

const a = ['cat', 'dog', 'mouse'];
for (let i in a) {
    console.log(i); // '0', '1', '2', 'isEmpty'
}
```
