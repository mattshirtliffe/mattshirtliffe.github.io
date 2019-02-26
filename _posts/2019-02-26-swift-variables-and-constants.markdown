---
layout: post
title:  "Variables and Constants in Swift 4"
date:   2019-02-26
categories: swift
---

# Variables and Constants
The purpose of this is just to document my journey into iOS and Swift 4 programming. A place I can reference to help me solidify what I have learned and help others along the way. I have been programming in swift for a few months now. Documenting the stuff I learn is something I wish did throughout my career as a developer when studying other languages and technology, so I thought I would start now.

# The let and var keywords
The var keyword creates a variable

mutable can be changed

The let keyword creates a constant

immutable is set and can not be changed

I have read you should avoid using var and use let first changing the let to var later which I guess is just good programming practice if the data isn't going to change it should be a constant.

# This is not Python
You won't see any snake_case in swift

You write Swift variables and constants using camelCase
```
firstName: String
lastName: String
emailAddress: String
```

# Type Annotation
At first I hated this but I soon got used to it and I now find it more readable.
If you have initial type which can be inferred you omit the type annotation as you can see what it is.

```
let firstName: String
firstName = "Matthew"

// This could just be the following as the string type can be inferred.
let firstName = "Matthew"

//The let keyword makes firstName a constant so it can no longer be changed trying to do so will result in an error.

firstName = "Chris"
// cannot assign to value: 'firstName' is a 'let' constant

var lastName: String
lastName = "Shirtliffe"

let wearsGlasses = true

var age: Int
age = 30
var age = 30

let companyName = "Space Labs Digital"

// Do this
var nameOfVar: String

// Dont do this

var nameOfVar : String

```

# Single line lets and vars
Like JavaScript you can declare multiple constants or multiple variables on a single line, separated by commas.

```
var a=1, b=2, c=3

let x=4, y=5, z=6
```

# Have to print variables and constants?

```
var a=1, b=2, c=3
print(a)
print(b)
print(b)

print("value of a is \(a)")
print("value of b is \(b)")
print("value of c is \(c)")

```

# Common Data Types
- Bool
- Double
- Float
- Int
- String


# Installation
You can install Swift 4 on your mac and ubuntu but I'll let you use google to find out how to do that.

# Running swift code using the Terminal

## Create project
```
mkdir project_name

cd swift_playground
```

## Create project structure
```
swift package init --type executable
```
## Run swift app
```
swift run
```
# Running swift code using XCode in a playground

![step 1]({{ site.url }}/assets/step_1.png)
![step 2]({{ site.url }}/assets/step_2.png)
![step 3]({{ site.url }}/assets/step_3.png)
![step 4]({{ site.url }}/assets/step_4.png)
![step 5]({{ site.url }}/assets/step_5.png)

# Some let and var tips
- camelCase your var and let names the first character lowercase not snake_case
- add 1 space after colon for type annotation var name: <-space here before datatype
- Pass by copy
- var can be changed (Mutable)
- let can not be changed (immutable) try changing after will cause an error
- set at let first then change to var later
- not exclusive to swift but avoid abbreviations x, y
- constants using the let keyword can be declare first and assigned later.

# Swift Style Guides
git clone https://github.com/raywenderlich/swift-style-guide.git

git clone https://github.com/linkedin/swift-style-guide