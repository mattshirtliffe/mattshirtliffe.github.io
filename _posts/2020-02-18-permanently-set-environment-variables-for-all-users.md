---
layout: post
title:  "Permanently set environment variables for all users"
date:   2020-02-18
categories: linux
---

# So you want to permanently set environment variables for all users

To make environment variables for all users you can just append export to your /etc/bash.bashrc file, you will need to be superuser.

You can also run the following:

```
echo export MY_ENV_KEY=value | sudo tee -a /etc/bash.bashrc
```

# to reload do the following

```
exec bash
```

# to check env

```
printenv MY_ENV_KEY
```
