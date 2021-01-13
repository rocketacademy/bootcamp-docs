# 7.1: JSX Intro

## Introduction

JSX is a JS **"syntax extension"** that allows us to specify HTML elements directly in JS. We use JSX with React to specify elements we want React to manipulate. In this module we'll create a sample app with JSX.

## Setup

### Clone Repo

Clone the [base Webpack repo](https://github.com/rocketacademy/webpack-mvc-base-swe1).

### Install Packages

Install React libraries and Babel preset for React.

```bash
npm install --save-dev react react-dom @babel/preset-react
```

### Update Webpack Config to Support React

1. Update the `test` regular expression \(line 3\) to include our new file extension, `.jsx`.
2. Add the React preset to the `presets` key \(line 8\).

```javascript
{
  // regex to see which files to run babel on
  test: /\.(js|mjs|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      presets: ['@babel/preset-env','@babel/preset-react'],
    },
  },
},
```

### Sample `webpack.dev.js`

The full Webpack dev config should look like the following.

```jsx
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    main: './src/index.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      // name this file main, so that it does not get automatically requested as a static file
      filename: './main.html',
      template: path.resolve(__dirname, '..', 'src', 'main.html'),
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        // regex to see which files to run babel on
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
});
```

## JSX Syntax

The following are examples of how we might create a div with inner text in DOM, React, and JSX syntax respectively. Eventually we will write React with JSX syntax, combining the best of React with JSX. Try to execute the JSX code in Chrome DevTools- we should get a syntax error.

{% hint style="info" %}
We set up Babel in our Webpack config to automatically transform JSX to React. Note that `@babel/preset-env` needs to be specified before `@babel/preset-react` so that ES6 gets transformed to ES5 before JSX gets transformed to React.

```javascript
presets: ['@babel/preset-env', '@babel/preset-react'],
```
{% endhint %}

### **DOM JavaScript**

```jsx
const myEl = document.createElement('div');
myEl.innerText = 'Hey Wow!';
```

### **React JavaScript**

```jsx
const myEl = React.createElement('div', null, 'Hey Wow!');
```

### **JSX**

```jsx
const myEl = <div>Hey Wow!</div>;
```

## Minimal JSX App

Render a div element with React and JSX.

**src/index.js**

```jsx
import React from 'react';
import { render } from 'react-dom';
import './styles.scss';

// Create JSX element and log it.
const myEl = <div>Hey Wow!</div>;
console.log('myEl: ', myEl);

// Create root element to render other elements into, add root element to DOM.
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

// Render the myEl JSX element into the root element with React.
render(myEl, rootElement);
```

Run the `watch` command to have Webpack auto-compile our code.

```jsx
npm run watch
```

Run our Express server in a new terminal to serve our website.

```jsx
npx nodemon index.mjs
```

Visit [http://localhost:3004/home](http://localhost:3004/home) in Chrome to view our element.

## Only Use `react-dom`'s  `render` Function Once Per App

In React, in an entire app \(hundreds or thousands of lines long\), one principle that developers try to adhere to is that the DOM is only ever mentioned once, at the beginning of the setup of the app. This line tells React which container element to render all the rest of the DOM elements into. When we have React control more and more elements on the screen the DOM will still only ever be mentioned once in relation to the `ReactDOM` `render` function.

## Using CSS Classes with React

In JSX and React, HTML elements can't have a `class` attribute because the HTML `class` keyword conflicts with JavaScript's `class` keyword. JSX has chosen to replace `class` with `className`. React will translate `className` to `class` such that our browsers know what CSS to apply.

```jsx
const myEl = <div className="hero-text">Hey Wow!</div>;
```

## Benefits of JSX

So far we've created a single element using JSX. This element is then rendered onto the page. Our equivalent DOM code is the same length or shorter. However, the real power of JSX is the ability to specify a complete set of elements easily, the same as just writing HTML. How many lines would it take to write the equivalent DOM code?

There are a few rules when writing longer JSX:

1. When we write multi-line JSX we surround the JSX expression with parentheses.
2. Our variable can only contain one element at a time. Note that the `myEl` variable contains a single element \(even though it has other elements _**inside**_\). In general JSX can only deal with single element values.

```jsx
import React from 'react';
import { render } from 'react-dom';

// create a JSX element
const myEl = (
  <div>
    <h1 className="hero-text">
      Hey <span className="warning">Wow!</span>
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

On line 3 we specify a string URL value. On line 7 we set the `href` of the link tag.

```jsx
const myUrl = 'http://google.com';

const myEl = (
  <div>
    <h1 className="hero-text">
      Heyyyy <span className="warning">Wow!</span>
    </h1>
    <a href={myUrl}>Random Value: {Math.random() * 100}</a>
  </div>
);
```

See more about JSX on the official docs: [https://reactjs.org/docs/introducing-jsx.html](https://reactjs.org/docs/introducing-jsx.html)

## Exercise

Repeat the above code.

