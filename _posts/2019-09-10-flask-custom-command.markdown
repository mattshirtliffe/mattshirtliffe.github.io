---
layout: post
title:  "Create your own custom Flask commands"
date:   2019-09-10
categories: python
---

In the flask microframework you can add you own custom commands.

# create a new user example
```python
import click
from flask.cli import with_appcontext
from flask_migrate import Migrate

from app import app
from db import db
from models.user import User

db.init_app(app)
migrate = Migrate(app, db)


@app.cli.command('create-new-user')
@click.argument('email')
@click.argument('password')
@with_appcontext
def create_new_user(email, password):
        
    db.init_app(app)
    user = User(email, password)
    user.save()
```

# usage
```
export FLASK_APP=run.py
flask create-new-user rolf.hegdal@example.com ingrid
```
