# 6.1: Webpack

## What and Why Webpack

When application front-ends run, `link` and `script` tags run after HTML is retrieved client-side but just before the page loads. This system is inefficient because we already know what CSS and JS files _**every**_ client needs before _**each**_ client requests for a page. Instead of collating CSS and JS files in _**each**_ client, we can pre-process and compile the set of front-end files to distribute before the Express server starts.

We are now building a "back-end" to the front-end JavaScript that runs in the browser, a back-end that does not depend on or interact with our Express.js app. Webpack is the command line tool that pre-processes our front-end files.

## Webpack Order of Events

![](../../.gitbook/assets/webpack-good.jpg)

1. The `webpack` command is run.
2. Webpack transforms `src/script.js` and/or whichever other files or groups of files are specified in Webpack configuration. "src" stands for "source".
3. Webpack puts the resulting file in `./dist`, or whichever target folder is specified in Webpack configuration. "dist" stands for "distribution".
4. The Express.js server starts with `node index.js` on the command line. The server is ready to accept requests.
5. The browser makes a request to the server for a page.
6. The browser reads a script tag in the HTML response. The script tag's `src` attribute triggers a GET request to the URL in that attribute.
7. The Express server, based on the request path, looks in the filesystem for a file that matches the request. In our example, the script tag requests the transformed `script.js` file in `./dist`. Because the script tag initiated the request, the browser's JS interpreter processes the response's file contents.

## Webpack Example

### Initialise Project Folder

Create a new folder and install Webpack.

```text
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install --save-dev webpack webpack-cli
```

Create folders and files that Webpack will use for compilation.

```text
mkdir src dist
touch src/script.js
touch dist/index.html
```

#### src/script.js

Populate a `script.js` file that Webpack will transform.

```javascript
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

Populate an `index.html` file that will load Webpack's transformed `script.js`.

```markup
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

### Configure Webpack

#### webpack.config.js

Create a file that tells Webpack what to transform and how.

```javascript
const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

### Run Webpack

When we run `webpack` it will transform our `script.js` into `script.js` in the `dist` directory. We specify `--mode=none` to ensure Webpack looks at the right config file. More on `mode` [here](https://webpack.js.org/api/cli/#default-configurations).

```text
npx webpack --mode=none
```

Look inside the `dist/script.js` to see the transformed JavaScript file. Note in what ways Webpack has transformed the file. Note that Webpack has removed comments in the output file. Try invoking other JS in the source file and see what changes in Webpack transformation.

### Run `index.html`

Open `dist/index.html` in the browser without running an Express server. Does our JavaScript from `dist/script.js` load?

