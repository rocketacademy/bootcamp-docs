# 1.4.3: Grab an Element

## Grabbing DOM Elements

{% embed url="https://youtu.be/eLYFvfY1lKU" caption="" %}

Using the DOM we can create a JavaScript representation of an element that's on the screen.

Given this element:

```markup
<p id="wow">cool :)</p>
```

We can create a variable that "grabs" it from the DOM.

```js
const wowParagraph = document.querySelector('#wow');
```

## Grab Any Element

To review how element selection works, see the simple examples on this page.

Look up how to get a reference to any element: [https://www.w3schools.com/jsref/met\_document\_queryselector.asp](https://www.w3schools.com/jsref/met_document_queryselector.asp)
