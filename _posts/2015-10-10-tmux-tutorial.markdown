---
layout: post
title:  "Increase your terminal efficiency with tmux"
date:   2015-10-10 12:00:00
categories: tmux tutorial
---


The terminal is a great place for getting things done and your reducing your dependency on your mouse. Typing is faster and more effieceny with economy of movement, less clutter on your screen and more power over your box.
One of the problems I have encounted is with several terminal windows open, all with multiple tabs in each, I loose my place and accidently close done sessions which was a real pain then I found a really smart tool which solved alot of my problems and has made me more comfortable using the terminal.

This tool is called tmux which allows you to run multiple programs inside one terminal session.

# Install
```
$ sudo apt-get install tmux
```

All tasks in one session I could even put work in the background and if I closed a session I could get back to where I left off. 

# Start a tmux session
```
$ tmux
```

![Terminal](http://imgur.com/5xN52Iv.png)

# Terminal running tmux
![Terminal running tmux](http://imgur.com/4R6PkLj.png)

# Split window vertically into panes
```
Ctrl-b %
```

![Split Vertical](http://imgur.com/ETuDGhP.png)

# Split window horizontally into panes
```
Ctrl-b "
```

![I'm an inline-style link](http://imgur.com/DlaatTV.png)

# List windows
```
Ctrl-b w
```

![I'm an inline-style link](http://imgur.com/ijvt7mX.png)

# Create new window
```
Ctrl-b c
```

![I'm an inline-style link](http://imgur.com/SXBnCOy.png)

# Cycle window pane layout
```
Ctrl-b SPACE
```

![I'm an inline-style link](http://imgur.com/qt9H6UU.png)

![I'm an inline-style link](http://imgur.com/sV7VhxL.png)

![I'm an inline-style link](http://imgur.com/Gzz549M.png)

# Some other examples

![I'm an inline-style link](http://imgur.com/EoZ4YK3.png)

![I'm an inline-style link](http://imgur.com/x8q4EOn.png)



|  Key  | Action |
|:-----|:--------|
|Ctr-b ?| get help|
|Ctr-b s| list sessions|
|Ctr-b $| rename the current session|
|Ctr-b d| detach from the current session|
|Ctr-b c| create a new window|
|Ctr-b ,| rename the current window|
|Ctr-b w| list windows|
|Ctr-b %| split vertically|
|Ctr-b "| split horizontally| 
|Ctr-b n| change to the next window|
|Ctr-b p| change to the previous window|
|Ctr-b 0| to 9 select windows 0 through 9|
|Ctr-b %| create a horizontal pane|
|Ctr-b "| create a vertical pane|
|Ctr-b q| show pane numbers|
|Ctr-b o| toggle between panes|
|Ctr-b }| swap with next pane|
|Ctr-b {| swap with previous pane|
|Ctr-b !| break the pane out of the window|
|Ctr-b x| kill the current pane|
