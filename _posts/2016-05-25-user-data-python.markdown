---
layout: post
title:  "How to generate random user data for application testing."
date:   2016-05-25 04:20:00
categories: python
---

I created a simple python script for populating my application with test
data, so I can run my tests against a standard set of data.

# Benefits

- Close to the production environment as possible
- Tests repeatable and consistent

# Why not manually create your data?
This is an option but a long-winded and an unnecessary endeavor the time it
takes to manually populate my system with 1000 users I can write a simple script
can do that in a fraction of the time after I can then just type `python name_of_app.py`
I can now go make myself an Espresso and when I come back I will have all the data I require allowing me to crack on.

# Why not just use production database?
This is just a dick move and would compromise the privacy of your customers data.
How would you feel if your data at a company was being used by a QA team?

![bird person gif](https://media.giphy.com/media/Ck0Be0csuTOzm/giphy.gif)


# The meat of this blog post

I did a little googlefu and found a helpful service called [randomuser.me](https://randomuser.me/)
which is a simple API for generating random users. This was also helpful as
I was missing some attributes from my User Model.
For this quick task I decided to use python because I have been primarily
writing python web applications for the last to years so for me python is my mother tongue/swiss army knife.

# Applications Dependencies

`pip install pymongo requests* `

`*Note: Not sudo because I'm using virtualenv`


[Pymongo](http://api.mongodb.com/python/current/tutorial.html) is a simple library for working with No-SQL database Mongodb.
[Requests](http://docs.python-requests.org/en/master/) is a simple well written http library self described as http for humans


# Code example

{% gist 571a1e44bef4401a050458b4b479ad05 %}

# Execution

` python name_of_app.py `

I hope this helps please give me some feedback,
you can drop me a message on twitter or via email. Time is your most
precious commodity and should be spent doing something awesome.
