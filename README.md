### What is Colorize.js?
Colorize.js is Javascript function used to colorize an element with a smooth transition between colors.

### I love rainbows. How do I use Colorize.js?
Using Colorize.js is very easy. The first thing you have to do is include the Colorize.js file in your page.
```html
<html>
  <head>
    <script src="colorize.js"></script>
    ...
```
Then, call the setInterval() function on the colorize() function. The colorize function take 2 parameter, the element ID and a luminosity value.
```html
<html>
  <head>
    <script src="colorize.js"></script>
    <script>
      setInterval(colorize, 25, 'colorize', -0.25);
    </script>
  </head>
  
  <body id="colorize">
  ...
```
### I do not love rainbows. How do I use Colorize.js?
The same way you would if you were to love rainbows.

### What is the luminosity value?
The luminosity value basically adjusts how light (or how dark) a the final color is. The max luminosity is 1, and the minimum is -1. A 0 luminosity value gives vibrant colors. 1 is complete white, and -1 is complete darkness.


##### Disclaimer
> I do know that this could be done more efficiently using sophisticated maths. But unfortunately, I'm a 15 year old, and sadly, I'm not a mathematician.
