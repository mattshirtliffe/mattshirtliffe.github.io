---
layout: post
title:  "Remove a user from a minon using saltstack configuration management"
date:   2020-07-16
categories: saltstack
---

# On your salt master become a super user
```
sudo su
```

# List all users on minon

```
salt 'minion' user.list_users
```

# Remove user on minon

```
salt 'minion' user.delete username remove=True force=True
```