---
layout: post
title:  "Create a blog with Jekyll and host on Github"
date:   2015-06-26 01:16:29
categories: jekyll tutorial
---

I used to host my blog using the popular blogging platform WordPress which I have been using for years. I got sick of receiving spam messages and replies to my posts about SEO, Viagra and sunglasses. I was getting annoyed with constant need to run updates. I was also tired of dealing with overpriced and clunky web hosting. I just wanted to start a blog no messing about with crap. I just wanted to keep it simple. What is more simple that just static html. Well I have found a solution to all of this plus I have found a place to host your site for free.

This tool is called Jekyll which transforms plain text into a nice looking static html blog sites. You do this using markdown. You don't require any database configuration or any boloated web ui just quick and straight to content creation. Jekyll Keeps blogging very simple. One more really cool thing is that you can publish a post using git, so as a developer this will aready be part of your daily workflow.

Markdown is very simple and easy to learn you can find a cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


#### Before you continue you will have to install a few things butr with a few taps on your keyboard you will be up and running in no time posting pictures of cats playing the guitar and the works.

# Requirements
- Ruby
- RubyGems
- Nodejs
- Python

# Installation
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Nodejs](https://nodejs.org/en/download/package-manager/)
- [Python](https://www.python.org/downloads/)
``` sudo apt-get install python ```
- [Jekyll](https://jekyllrb.com/docs/quickstart/)
```gem install jekyll```



#### Jekyll runs on the following OS Linux, Unix, or Mac OS X

# GitHub
I’m pretty sure this needs no introduction. [These](https://github.com/) generous guys provide free hosting with [github pages](https://pages.github.com/)

# Quick Git Reference

```git init```

```git add . or git add name of files```

```git commit -m <commit_message>```

```git remote add origin https://<your_repo>.github.io.git```

```git push origin master```


# Quick git tutorial

[git tutorial]( http://rogerdudler.github.io/git-guide/)


# Using Jekyll

To create new jekyll site

```jekyll new <blog_name>```

```jekyll build```

```jekyll serve```

If you want to view your updates while you are editing you can use the command:

```jekyll serve --watch```

# Create a post
in _posts create your post name with following format YYYY-mm-dd-post-name.markdown

# DNS settings 123 reg
![alt text](http://i.imgur.com/UJhYlbc.png "DNS settings")


Add a file called CNAME to the root of the html with your url in it.


# Assets images and downloads

```![alt text]({{"{{ site.url" }}}}/assets/<dir>/<filename>)```


This should be enough to get you going you can find out more about this tool [here](https://jekyllrb.com/)
