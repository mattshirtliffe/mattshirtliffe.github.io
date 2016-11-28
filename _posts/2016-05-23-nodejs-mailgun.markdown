---
layout: post
title:  "Sending Emails with NodeJS and Mailgun"
date:   2016-05-23 01:16:29
categories: nodejs
---
So you have an amazing game-changing **insert more buzzwords here**  web
application written in NodeJS, which you want to take it to the next
level. You want to do this by engaging with end users more.

## How are you going to do this?
By sending emails and filling their spam folder of course.

### Why? There are many reasons
- You want your end user to activate their account
- You want to communicate important changes of state within the application
- Inform end users security concerns
- Password resets
- Advertise new functionality
- Invite new users
- Market your other products
- Personalised the application user experience
- Inform existing users of changes to Terms and Conditions.
- Newsletters

This list can go on for a while.


## Lets get started
To send email we are going to use a service called [mailgun](https://www.mailgun.com/)
which is a really cool, easy to use email service for developers.
They provide RESTful API which we will be consuming in this tutorial.
So go create yourself an account and we'll get engaging your application users via email.

After you have created an account and logged you can get all the credentials from
the Dashboard page.

You will need the following

- API Base URL
- API KEY

## Application Dependencies

We need to install our application dependencies. In this tutorial we are going
to use requests which makes http calls simpler. I'm from a python background and
I use a library called requests so I just google requests nodejs and found this
library with the same name.

`npm install request --save`

-S, --save: Will add this package to your dependencies.


Add your API Base Url as the first parameter to the post function
and add your API KEY the pass in the dictionary.

{% gist 00a18f6b63918af092cee7787de6690d %}

I hope this helps please give me some feedback,
you drop me a message on twitter or via email.
