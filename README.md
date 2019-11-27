# Meme Generator

Demo: https://diogofgr.github.io/meme-generator/

Start with this boilerplate [EmojiGenerator - workshop](https://codepen.io/diogofgr/pen/PvdXeM "A CodePen by diogofgr")

## Instructions:

1. Store the necessary DOM elements in variables (in `index.js`)

Find all the inputs and outputs (they all have `id`s) and store them in variables.E.g:
```javascript
const memeContainer = document.getElementById('meme-container');
const memeImageInput = document.getElementById('meme-image-input');
// similar for the other inputs and outputs
```
These variables are now **references to our inputs and outputs**. Later we will use them to read what the user iputs and show the output (the meme 🎉)

*Note*: You should have 9 in total (6 inputs and 3 outputs). If you `console.log` them you should NOT see any `undefined`. **If you see any `undefined` then start debugging**.
```javascript
console.log(memeContainer, memeImageInput, etc);
```  

2. Read the input values in an event listener

Add a click event listener to `Generate Meme`. The code looks something like this:
```javascript
btnGenerate.addEventListener('click', () => {
    // this code runs after the user clicks the button
    // ...
});
```
https://www.w3schools.com/jsref/met_element_addeventlistener.asp

This button should read the values of `topTextInput`, `bottomTextInput` and `memeImageInput`;

To get the url for the uploaded file we need to use `createObjectURL()`. That code will look something like this:
```javascript
const imageFile = memeImageInput.files[0];
const imageSrc = window.URL.createObjectURL(imageFile);
memeContainer.style.backgroundImage = `url(${imageSrc})`;
```
3. Change the outputs (in the same event listener)

Change the top and bottom texts:
```javascript
topTextOutput.innerText = topTextInput.value;
// similar for bottomTextOutput;
```

Change the background image of the output:
```javascript
memeContainer.style.backgroundImage = `url(${imageSrc})`;
```
*Note:* at this point, clicking `Generate Meme` should show your new meme. If it doesn't you need to start debugging.

3. (Optional) Save the meme - in a new event listener

For this part we need `html2canvas`. This library converts DOM elements into images, combining our `<img>` and our `<p>`s into one!

To use it import the script inside the `<body>`, just before you we `index.js`
```html

<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script src="index.js"></script>
```
Add a click event listener to `Save` and inside write the code for `html2canvas`.

```javascript
html2canvas(
        // the original div,
        options
    )
    .then((canvas) => {
        const data = canvas.toDataURL('image/jpeg', 1);
        const src = encodeURI(data);
        // add the src as an image.src of memeOutput
    })
``` 

Above there is a variable `options` that we haven't defined. For this to work properly we need a specific set of options. Use the ones below:
```javascript
const options = {
    allowTaint: true,
    logging: true,
    profile: true,
    useCORS: true,
    backgroundColor: '#111111'
}
```
*Note:* you should now be able to click `Save` and see a second meme on the screen. If not start debugging.

4. (Optional) Hide the original after Save

When the user clicks save we should hide the original and show only the "saved" one (the one created by `html2canvas`). If the user clicks `Generate Meme` again we should do the opposite (only show the "original").