---
layout: post
title:  "Using python to generate telephone numbers for use in TV and radio drama programmes"
date:   2019-09-12
categories: python
---

Ofcom has a range phone numbers they recommended for TV and radio drama purposes, read more on the [Ofcom](https://www.ofcom.org.uk/phones-telecoms-and-internet/information-for-industry/numbering/numbers-for-drama) site.

# Generate list of all mobile numbers

```python

def print_mobile_numbers:
    for i in range(0, 1000):
        print(f'07700 900{str(i).zfill(3)}')
        
print_mobile_numbers()
```

# Get a random mobile number
```python

import random

def get_random_mobile_number():
    number = random.randint(0, 1000)
    return f'07700900{str(number).zfill(3)}'
    
mobile_number = get_random_mobile_number()
print(mobile_number)

```
