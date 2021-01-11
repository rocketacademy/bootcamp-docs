# 7.1: JSX Intro

## Introduction

Begin with the base Webpack repo: [https://github.com/rocketacademy/webpack-mvc-base-swe1.git](https://github.com/rocketacademy/webpack-mvc-base-swe1.git)

## Setup

Install the React libraries:

```bash
npm install --save-dev react react-dom
```

Install the Babel config:

```bash
npm install --save-dev @babel/preset-react
```

Add the react preset to the Babel configs \(line 7\).

Change the regex \(line 2\) to include our new file extension, JSX.

```javascript
{
  test: /\.(js|mjs|jsx)$/, // regex to see which files to run babel on
  exclude: /node_modules/,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      presets: ['@babel/preset-env','@babel/preset-react'],
    },
  },
},
```

## JSX

JSX is a _syntax extension_ to JavaScript. It allows us to specify DOM elements directly in our JavaScript code, by just writing out the HTML for that kind of element. JSX is used with React so that you can specify the kinds of elements you want the React library to manipulate.

The following code samples accomplish a similar task- creating a div with text inside it:

**DOM JavaScript**

```jsx
const myEl = doucment.createElement('div');
myEl.innerText = 'Heeeyyyyy Wow!';
```

**React JavaScript**

```jsx
const React.createElement('div');
const myEl = React.createElement('div', null, 'Heeeyyyyy Wow!');
```

**JSX**

```jsx
const myEl = <div>Heeeyyyyy Wow!</div>;
```

Try to copy and paste the JSX example code into the Chrome dev tools console- You'll get a syntax error.

## Babel

We set Babel up to automatically transform the JSX code into the React code.

This line from the Webpack config says: transform the JSX into the equivalent React code.

```javascript
presets: ['@babel/preset-env', '@babel/preset-react'],
```

## Putting it All Together

We'll use React to put the JSX-React element onto the page.

**src/index.js**

```jsx
import React from 'react';
import { render } from 'react-dom';

// create a JSX element
const myEl = <div>Heeeyyyyy Wow!</div>;

console.log('myEl:', myEl);

// create an element that React will render stuff into
const rootElement = document.createElement('div');

// put that element onto the page
document.body.appendChild(rootElement);

// have react render the JSX element into the root element.
render(myEl, rootElement);
```

#### ReactDom `render`

In React, in an entire app \(hundreds or thousands of lines long\), one principle that developers try to adhere to is that the DOM is only ever mentioned once, at the beginning of the setup of the app. This line tells React which container element to render all the rest of the DOM elements into. When we have React control more and more elements on the screen the DOM will still only ever be mentioned once in relation to the `ReactDOM` `render` function.

## Classes

In JSX and React, elements can't have a `class` attribute. We have to replace it with `className`. React will make sure that the final on-screen DOM element has the `class` attribute instead of the `className` attribute.

```jsx
const myEl = <div className="hero-text">Heeeyyyyy Wow!</div>;
```

## Benefits of JSX

So far we've created a single element using JSX. This element is then rendered onto the page. Our equivalent DOM code is the same length or shorter. However, the real power of JSX is the ability to specify a complete set of elements easily, the same as just writing HTML. How many lines would it take to write the equivalent DOM code?

There are a few rules when writing bigger JSX:

* When we write out multi-line JSX we have to surround the whole thing with parentheses.
* Our variable can only contain one element at a time. Note that the `myEl` variable contains a single element \(even though it has other elements _**inside**_\). In general JSX can only deal with single element values.

```jsx
import React from 'react';
import { render } from 'react-dom';

// create a JSX element
const myEl = (
  <div>
    <h1 className="hero-text">
      Heyyyy <span className="warning">Wow!</span>
    </h1>
    <p>Lorem Ipsum!!</p>
  </div>
);

console.log('myEl:', myEl);

// create an element that React will render stuff into
const rootElement = document.createElement('div');

// put that element onto the page
document.body.appendChild(rootElement);

// have react render the JSX element into the root element.
render(myEl, rootElement);
```

## JSX Templating with Data

In JSX it's possible to turn JavaScript variable values into rendered elements.

In EJS we used the `<%= %>` characters, but in JSX it's `{}`. Just like in EJS any variable value we specify will get put into the final element on the page.

On line 4 we specify a number and use it on line 12.

```jsx
import React from 'react';
import { render } from 'react-dom';

const myRandomNum = Math.random();

// create a JSX element
const myEl = (
  <div>
    <h1 className="hero-text">
      Heyyyy <span className="warning">Wow!</span>
    </h1>
    <p>Random Value: {myRandomNum}</p>
  </div>
);

console.log('myEl:', myEl);

// create an element that React will render stuff into
const rootElement = document.createElement('div');

// put that element onto the page
document.body.appendChild(rootElement);

// have react render the JSX element into the root element.
render(myEl, rootElement);
```

### Rendering Values

Any valid JavaScript statement can go into the parentheses.

```jsx
const myEl = (
  <div>
    <h1 className="hero-text">
      Heyyyy <span className="warning">Wow!</span>
    </h1>
    <p>Random Value: {Math.random()}</p>
  </div>
);
```

```jsx
const myEl = (
  <div>
    <h1 className="hero-text">
      Heyyyy <span className="warning">Wow!</span>
    </h1>
    <p>Random Value: {Math.random() * 100}</p>
  </div>
);
```

### Attributes

Any HTML attribute value can also be specified, not just the element contents. Quotations for the attribute value are not needed.

On line 3 we specify a string URL value. On line 7 we set the HREF of the link tag.

```jsx
const myUrl = 'http://google.com';

const myEl = (
  <div>
    <h1 className="hero-text">
      Heyyyy <span className="warning">Wow!</span>
    </h1>
    <a href={myUrl}>Random Value: {Math.random() * 100}</p>
  </div>
);
```

See more about JSX on the official docs: [https://reactjs.org/docs/introducing-jsx.html](https://reactjs.org/docs/introducing-jsx.html)

