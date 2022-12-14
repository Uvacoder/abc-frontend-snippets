---
title: Make a table with equal column widths
category: Tip
date: 2021-03-02 18:54:00 +7
layout: layouts/post.njk
topics: CSS
---

Setting the width for each cell explicitly is the straightforward way to give all columns the same width.
For example, the CSS declaration below splits a table of four columns into parts whose widths are the same:

```css
table td {
    width: 25%;
}
```

However, the approach doesn't work if the table has a dynamic number of columns. Fortunately, we can use the `table-layout` property to do that.
No matter what how many columns the table has, they will have the same widths.

```css
table {
    table-layout: fixed;
}
```
