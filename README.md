# Emoji Generator

Demo: https://diogofgr.github.io/emoji-generator/

Start with this boilerplate [EmojiGenerator - workshop](https://codepen.io/diogofgr/pen/PvdXeM "A CodePen by diogofgr")

## Instructions:

1. Store the necessary DOM elements in variables
Find the generate `<button>`, the two `<select>`s and the `<h1>` and store them in 4 variables.

2. Add an event listener
Add a click event listener to `btnGenerate`. The code looks something like this:
```
btnGenerate.addEventListener('click', function(){...});
```
https://www.w3schools.com/jsref/met_element_addeventlistener.asp

3. Change the emoji
When the user clicks `btnGenerate` the function inside `.addEventListener()` will run. This function should read the values in the two selects and change the text in the title.
i.e.: if the selects have ':' and ')' then the title should show 🙂

Get some emojis here: https://emojipedia.org/people/

4. Optional01: show a random emoji
Add a `random` button that shows a random emoji
Tip: use the Ranmoji API https://hagata.github.io/ranmoji/documentation_articles/getting-started/using-the-api.html

5. Optional02: get rid of `btnGenerate`
Instead of using the button, try changing the emoji everytime one of the `<select>`s changes.

For the last part we need `html2canvas`

To use it just import the script inside the `<body>`, just before you import `index.js`
```html

<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script src="index.js"></script>
```