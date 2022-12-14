---
title: Run the last command as the root user
category: Tip
date: 2021-03-07 08:46:00 +7
layout: layouts/post.njk
topics: Command Line
---

We often see an error when executing a command that requires the root user permission. For example, installing a npm package as global probably requires `sudo`:

```shell
$ npm install -g package-name
```

In order to sudo the previous command, usually we press the _Arrow_ key, append `sudo` to the beginning of the command and run it again.

It turns out that there is an easier, shorter command:

```shell
$ sudo !!
```

Here `!!` references the last command.
