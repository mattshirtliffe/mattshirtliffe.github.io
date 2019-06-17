---
layout: post
title:  "It never hurts to go back to basics - CSS combinators"
date:   2019-06-17
categories: css
---

This post is about CSS combinators which provide our style sheets with clarity and give us relationship between tags.

# The types of css combinator
- Adjacent
- Child
- Decendent
- General

## Adjacent sibling

When using the adjacent combinator the style is applied to tags that directly follow the initial tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Adjacent combinator</title>

    <!-- This is not best practice but just using for demo of combinators -->
    <style>
        h1 + p{
            /* Emerland Green */
            color: #2ecc71;
        }
    </style>
  </head>

  <body>
    <main>
      <section>
        <h1>I'm a h1 tag</h1>
        <p>
            I'm a p tag and I am adjacent to a h1 tag so I am Emerland Green
        </p>
        <h1>I'm also a h1 tag</h1>
        <p>
            I'm also a p tag and I am adjacent to a h1 tag I am also Emerland Green
        </p>
        <p>
            I'm also a p tag and I'm not adjacent to a h1 tag so I am not Emerland Green
        </p>
      </section>
    </main>
  </body>
</html>
```
![adjacent-combinator]({{ site.url }}/assets/css-combinators/2019-06-17-adjacent-combinator.png)

### [learn more about the adjacent combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator)

## Child sibling
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Child combinator</title>
    <!-- This is not best practice but just using for demo of combinators -->
    <style>
        div > p{
            /* Pomegranate */
            color: #c0392b;
        }
    </style>
  </head>
  <body>
    <main>
      <section>
        <h1>I'm a h1 tag</h1>
        <div>
            <p>
                I'm Pomegranate because I'm a paragraph tag inside of a div tag.
            </p>
        </div>
        <p>
            I'm not Pomegranate because I'm a paragraph but not inside of a div tag.
        </p>
        <div>
            <p>
                I'm also a paragraph tag I am Pomegranate because I'm inside a div tag
            </p>
        </div> 
      </section>
    </main>
  </body>
</html>
```
![child-combinator]({{ site.url }}/assets/css-combinators/2019-06-17-child-combinator.png)
### [learn more about the child combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)

## Descendant
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Descendant combinator</title>
    <!-- This is not best practice but just using for demo of combinators -->
    <style>
        div p{
            /* Carrot */
            color: #e67e22;
        }
    </style>
  </head>
  <body>
    <main>
      <section>
        <h1>I'm a h1 tag</h1>
        <div>
            <p>
                I'm carrot orange because I'm a paragraph tag inside of a div tag.
            </p>
        </div>
        <p>
            I'm not carrot orange because I'm a paragraph and not inside of a div
        </p>
        <div>
            <p>
                I'm also a paragraph tag I am carrot because I'm inside a div tag. I am a descendant of a div tag.
            </p>
        </div> 
      </section>
    </main>
  </body>
</html>
```
![descendant-combinator]({{ site.url }}/assets/css-combinators/2019-06-17-descendant-combinator.png)
### [learn more about the descendant combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator)

## General sibling
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>General combinator</title>
    
    <!-- This is not best practice but just using for demo of combinators -->
    <style>
        h1 ~ p{
          /* Peterriver */
          color: #3498db;
        }
    </style>
  </head>
  <body>
    <main>
      <section>
        <h1>I'm a big old h1 tag</h1>
        <p>
            I'm a paragraph tag I'm Peterriver blue
        </p>
        <p>
          I'm paragraph tag also Peterriver blue
        </p>
        <p>
            We are all Peterriver blue because we are paragraph tags 
            on the same level at a h1 tag
        </p>
        <div>
            <p>
                I'm paragraph tag but I'm not on the same level as a h1 because 
                Matthew put me in inside a div. He's a dick, I'm very lonely.
            </p>
        </div> 
      </section>
    </main>
  </body>
</html>
```
![general-combinator]({{ site.url }}/assets/css-combinators/2019-06-17-general-combinator.png)

### [learn more about the general combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator)