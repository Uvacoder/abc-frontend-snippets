---
title: List branches sorted by most recent commit date
category: Tip
date: 2021-05-12 19:22:00 +7
layout: layouts/post.njk
topics: Git
metadata:
    image: sort-git-branches.png
---

If you're working on multiple projects or multiple features in the same project, you probably have different branches locally.

Sometimes, it's not easy for us to remember exactly the branch that we worked on most recently.
The `branch` command lists all branches sorted by alphabetical order:

```shell
$ git branch

  avoid-mixing-styles
  fold-css
* quick-color-variables
  skip-questions
  sort-branches
```

The `*` symbol indicates the current branch. The list might be longer if you don't often remove the merged branches which are usually not relevant anymore.

Fortunately, Git provides the `sort` parameter allowing us to list branches which are sorted by the commit date:

```shell
$ git branch --sort=-committerdate

* sort-branches
  fold-css
  quick-color-variables
  skip-questions
  avoid-mixing-styles
```

You can reverse the sorting direction by omitting`-`:

```shell
$ git branch --sort=committerdate

  avoid-mixing-styles
  skip-questions
  quick-color-variables
  fold-css
* sort-branches
```

It's good to know that we can make this behaviour as the default when listing branches:

```shell
$ git config --global branch.sort -committerdate
```
