---
title: Conditional logging in the Console
category: Tip
date: 2021-02-24 17:15:00 +7
layout: layouts/post.njk
topics: DevTools
---

Use `console.assert()` to print out something in the _Console_ when a given condition doesn't match.

```js
if (condition) {
    // Do something
} else {
    console.log('Error message');
}

// Better
console.assert(!condition, 'Error message');
```

## See also

-   [Log a value to the Console](/log-a-value-to-the-console)
-   [Log a variable in an arrow function](/log-a-variable-in-an-arrow-function)
-   [Log a variable to the console using conditional breakpoints](/log-a-variable-to-the-console-using-conditional-breakpoints)
-   [Log an array to the Console](/log-an-array-to-the-console)
