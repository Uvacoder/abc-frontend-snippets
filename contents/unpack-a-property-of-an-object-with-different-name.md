---
title: Unpack a property of an object with different name
category: Tip
date: 2021-03-07 08:30:00 +7
layout: layouts/post.njk
topics: JavaScript
---

We can use the destructuring assignment syntax to unpack a property of a given object and rename it:

```js
const person = {
    name: 'John Doe',
};

const { name } = person;

// Or unpack with other name
const { name: fullName } = person;
```

In the sample code above, `fullName` is an alias of the `name` property. Both the `name` and `fullName` variables are `John Doe`.
