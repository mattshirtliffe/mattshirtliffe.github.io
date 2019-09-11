---
layout: post
title:  "using an else clause on loops in Python"
date:   2019-09-11
categories: python
---

# Using an else clause on loops in Python

In python you can use an else clause at the end of your loops. When your application reaches the end of the loop the code in the else statments is executed.

# Example checking for even numbers in lists

```python

import random

def check_for_even(numbers):
    for i in numbers:
        if i % 2 == 0:
            print('even number found')
            break
    else:
        print('even number not found')


def check_while_even(numbers):
    i = 0
    while i is not len(numbers):
        if numbers[i] % 2 == 0:
            print('even number found')
            break
        i += 1
    else:
        print('even number not found')
```

# Using a simple list comprehension to create a list of 100 random numbers

```python
check_for_even([random.randint(0, 100) for _ in range(1000)])
check_while_even([random.randint(0, 100) for _ in range(1000)])
```

The loop will end once i in the loop is an even number. So if there is even number in the list we will never reach the else clause because
of the break.

# Output with even
```console
even number found
even number found
```

In this example we will never find an even number so we will get to the else statement.

```python
check_for_even([1, 3, 5])
check_while_even([1, 3, 5])
```

# Output no even numbers
```console
even number not found
even number not found
```
