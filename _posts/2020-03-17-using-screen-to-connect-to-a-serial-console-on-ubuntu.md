---
layout: post
title:  "Using screen to connect to a serial console on Ubuntu"
date:   2020-03-17
categories: linux
---

# You can use screen to connect to a serial console in Ubuntu

I have to work from home with it being pretty apocalyptic out there due to the covid 13 virus. At work I use a windows machine and use Putty. 
Here at home I use Ubuntu and need a serial terminal to communicate with the hardware I'm working with.

Turns out I can use screen, awesome!

# Install screen
```
sudo apt-get install screen -y
```

# To connect

```
screen /dev/<your device here> <your baud rate>
```

# To exit

Press ctrl-a type the following
```
:quit
```
Then hit enter


Stay safe out there!
