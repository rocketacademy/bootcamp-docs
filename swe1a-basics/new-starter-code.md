# New Starter Code

Given that we have a little background on how the DOM works we can refactor the starter code so that it's mechanics are all inside the `script.js`.

```javascript
// the main function
var main = function(input){
  return 'hello world';
};

// all the actions to put things in the grey box
var displayInGreyBox = function(contents){

  // get a hold of the grey box
  var output = document.querySelector('#output');

  // set the values in the grey box
  output.innerHTML = contents;
};

// run when the user clicks the button
var buttonClicked = function(){

  // get a hold of the input element
  var input = document.querySelector('#my-input');

  // call the main function
  var result = main(input.value);

  // display in the grey box
  displayInGreyBox(result);

  // reset the input box to empty
  input.value = "";
};

// get a hold of the button
var button = document.querySelector('#my-button');

// what will happen when the button gets clicked
button.addEventListener('click', buttonClicked);
```

## `DisplayInGreyBox`

The most significant change we'll make is to explicity extract the functionality that affects the grey box.

```text
// all the actions to put things in the grey box
var displayInGreyBox = function(contents){

  // get a hold of the grey box
  var output = document.querySelector('#output');

  // set the values in the grey box
  output.innerHTML = contents;
};
```

Whenever we call this function it directly affects what we see on screen.

{% hint style="info" %}
1\) Duplicate the code above and run it. 

2\) Open the Dev Tools console and call this function directly:

```javascript
displayInGreyBox('Bannans Are Awesome!');
```
{% endhint %}



