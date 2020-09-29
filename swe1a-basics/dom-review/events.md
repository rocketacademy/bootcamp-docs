# Events

### Defining an Input

{% embed url="https://youtu.be/6fEp-k32Tv8" caption="" %}

An input to our JavaScript program is called an **event**. All this means is that we can set the browser in such a way that when the user makes an action, the browser calls our function - and this is exactly how our `main` function works. Except that we aren't just limited to clicking on the submit button or getting the value the user typed from an input.

The function for an event is referred to as a _**callback**_ function.

```javascript
var myNewMain = function(event){
    console.log('hey wow my new function');
};

wowParagraph.addEventListener('click', myNewMain);
```

