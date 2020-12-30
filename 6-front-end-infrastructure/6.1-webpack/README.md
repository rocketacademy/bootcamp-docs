# 6.1: Webpack

## Why Webpack

When running the front end of our applications we deal with collecting the correct libraries at the last step, that is, when the user's browser is running the link and script tags, as the last step in the process of HTTP request and response.

In fact, this system is inefficient, since we know about what set of files the user needs way before _**each**_ individual user requests for a page- we know what set of JavaScript and CSS _**every**_ user needs when we finish writing the app.

Instead of letting the set of JavaScipt and CSS files collate in _**each**_ users' browser, we can pre-process / prepare the set of front-end files we want before the Express.js server even starts.

We are now building a back-end to the front-end JavaScript that runs in the browser. A back-end that does not depend on or interact with our Express.js app.

Webpack is the command line tool that prepares these sets of files.

![](../../.gitbook/assets/webpack-good.jpg)

1. The webpack command is run.
2. Webpack, based on the settings, takes the src/script.js file \(or whatever other files or groups of files are specified\) and transforms it.
3. Based on the Webpack settings, Webapck puts the resulting file in `./dist`.
4. The Express.js server starts with `node index.js` in the command line. The server is ready to accept requests.
5. The browser makes a request to the server for a page.
6. The browser reads a script tag in the HTML response. The script tag `src` source triggers a get request.
7. The Express.js server, based on the request path, looks in the hard drive for a file that matches the request. This script tag requests the transformed `script.js` file in `./dist`. Because the request was kicked off from a script tag, the file contents response is digested by the JavaScript interpreter of the browser.

## Webpack Example

Create a directory and install Webpack

```text
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

Create some files to work with:

```text
mkdir src dist
touch src/script.js
touch dist/index.html
```

#### src/script.js

```js
const component = () => {
  // make a container
  const div = document.createElement('div');

  // display element
  const span = document.createElement('span');

  // input
  const input = document.createElement('input');

  // on change, display in the span
  input.addEventListener('change', function () {
    span.innerText = input.value;
  });

  div.appendChild(input);
  div.appendChild(span);

  return div;
};

document.body.appendChild(component());
```

#### dist/index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

### Webpack configuration:

#### webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

### Running Webpack

When we run `webpack` it will transform our `script.js` into `script.js` in the `dist` directory.

```text
npx webpack --mode=none
```

Look inside the `dist/script.js` to see the transformed JavaScript file. Note in what ways Webpack has transformed the file. Note that the comments are gone from the output file.

Try to paste in some other JavaScript into the source file and see what changes.

## Running `index.html`

Double click on the `index.html file` to open it in the browser \(without a file server\).
