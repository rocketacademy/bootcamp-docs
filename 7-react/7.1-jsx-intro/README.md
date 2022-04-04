# 7.1: JSX Intro

{% embed url="https://www.youtube.com/watch?v=qf77OVESyz8" %}

## Introduction

JSX is a JS **"syntax extension"** that allows us to specify HTML elements directly in JS. We use JSX with React to specify elements we want React to manipulate. In this module we'll create a sample app with JSX.

## Setup

### Clone Repo

Clone the [base Webpack repo](https://github.com/rocketacademy/webpack-mvc-base-bootcamp).

### Install Packages

Install React libraries and Babel preset for React.

```bash
npm install --save-dev react react-dom @babel/preset-react
```

### Update Webpack Config to Support React

1. Update the `test` regular expression (line 3) to include our new file extension, `.jsx`.
2. Add the React preset to the `presets` key (line 8).

```javascript
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
```

### Sample Webpack config

The full Webpack common config should look like the following.

{% code title="webpack_conf/webpack.common.js" %}

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name]-[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    // Replace previously-compiled files with latest one on each build
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Name this file main so it does not get automatically requested as a static file
      filename: 'main.html',
      template: path.resolve(__dirname, '..', 'src', 'main.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        // Regex to decide which files to run Babel on
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};
```

{% endcode %}

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

{% embed url="https://www.youtube.com/watch?v=o01qplQAWxs" %}

Render a div element with React and JSX. 1 common property of React apps is that the DOM is only ever mentioned once, at app setup with `react-dom`'s `render` function. This is true of apps like ours below and apps with millions of lines of code. `render` tells React which element to render all other DOM elements into.

{% hint style="info" %}
When you paste the below code into `src/index.js`, you may see an ESLint error "JSX not allowed in files with extension '.js'". To fix this error, change `src/index.js`'s file extension from `.js` to `.jsx`.
{% endhint %}

{% code title="src/index.jsx" %}

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

{% endcode %}

Run the `watch` command to have Webpack auto-compile our code.

```jsx
npm run watch
```

Run our Express server in a new terminal to serve our website.

```jsx
npx nodemon index.mjs
```

Visit [http://localhost:3004/home](http://localhost:3004/home) in Chrome to view our element.

## Using CSS Classes with React

{% embed url="https://www.youtube.com/watch?v=jXuCtRPKwq4" %}

In JSX and React, HTML elements can't have a `class` attribute because the HTML `class` keyword conflicts with JavaScript's `class` keyword. JSX has chosen to replace `class` with `className`. React will translate `className` to `class` such that our browsers know what CSS to apply.

To add CSS styles to a React app, import a CSS file like in the following code sample. The following code assumes there is a CSS class `hero-text` defined in `./styles.css`.

```jsx
import './styles.css';

const myEl = <div className="hero-text">Hey Wow!</div>;
```

## JSX with Multiple HTML Elements

So far we've used JSX to create a single HTML element and rendered that element onto our page. Our equivalent DOM code would be the same length or shorter. The real benefit of JSX is the ability to specify a set of nested elements in the same way we would write HTML. How many lines would the equivalent DOM code be?

There are a few rules when writing longer JSX.

1. Surround multi-line JSX expressions with parentheses.
2. 1 JS variable contains at most 1 JSX element. Note the `myEl` variable contains a single element even though it has other elements inside it.

{% code title="src/index.jsx" %}

```jsx
import React from 'react';
import { render } from 'react-dom';

// Create JSX element and log it.
const myEl = (
  <div>
    <h1 className="hero-text">
      Hey <span className="warning">Wow!</span>
    </h1>
    <p>Lorem Ipsum!!</p>
  </div>
);
console.log('myEl: ', myEl);

// Create root element to render other elements into, add root element to DOM.
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

// Render the myEl JSX element into the root element with React.
render(myEl, rootElement);
```

{% endcode %}

## JSX Templating with Data

{% embed url="https://youtu.be/oN4Tg-meSdw" %}

### Basic Templating Example

We can inject JS variables into JSX, similar to how we injected JS variables into EJS. In EJS we used `<%= %>` syntax, but in JSX it's `{}`. In the following example, we initialise a number on line 4 and use it on line 12.

{% code title="src/index.jsx" %}

```jsx
import React from 'react';
import { render } from 'react-dom';

const myRandomNum = Math.random();

// Create JSX element and log it.
const myEl = (
  <div>
    <h1 className="hero-text">
      Hey <span className="warning">Wow!</span>
    </h1>
    <p>Random Value: {myRandomNum}</p>
  </div>
);
console.log('myEl: ', myEl);

// Create root element to render other elements into, add root element to DOM.
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

// Render the myEl JSX element into the root element with React.
render(myEl, rootElement);
```

{% endcode %}

### Templates Accept Any JS Code

Curly braces in JSX can contain any valid JavaScript code.

```jsx
const myEl = (
  <div>
    <h1 className="hero-text">
      Hey <span className="warning">Wow!</span>
    </h1>
    <p>Random Value: {Math.random() * 100}</p>
  </div>
);
```

### Template Substitution Also Works in Element Attributes

JSX also allows templating of HTML attribute values, not just HTML element contents. We need not specify quotations around HTML attribute values. In the following example we initialise a URL string on line 1 and use it in an `href` attribute on line 7.

```jsx
const myUrl = 'http://google.com';
const myEl = (
  <div>
    <h1 className="hero-text">
      Hey <span className="warning">Wow!</span>
    </h1>
    <a href={myUrl}>Random Value: {Math.random() * 100}</a>
  </div>
);
```

## Further Reading

Read more about JSX on the official docs: [https://reactjs.org/docs/introducing-jsx.html](https://reactjs.org/docs/introducing-jsx.html)

## Exercise

Replicate the above code.
