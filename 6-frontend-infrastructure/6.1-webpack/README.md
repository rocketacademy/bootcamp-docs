# 6.1: Webpack

## What is webpack?

At its core, **webpack** (a JavaScript library) is a static module bundler for modern JavaScript applications. When webpack processes your application, it combines every module your project needs into one or more bundles. These bundles are static assets which your content is served from.&#x20;

## How does webpack work?

When webpack processes your application, it starts from a list of modules defined on the command line or in its configuration file. Starting from these _entry points_, webpack recursively builds a _dependency graph_ that includes every module your application needs, transforms them if necessary, then bundles all of those modules into a small number of bundles - often, only one - to be loaded by the browser. In other words, webpack pre-processes our files before they are loaded by the browser.&#x20;

_entry point_ - The point from which to start the application bundling process.

_dependency graph_- A dependency graph is a data structure formed by a directed graph (we will cover graphs later on in Algorithms), that describes the dependency of an entity in the system on the other entities of the same system, i.e,  each node points to the node on which it depends.&#x20;

## Why do we use webpack?

1. We don't have to worry about the sequence in which our script tags load, or forgetting to include a particular script tag.
2. webpack minifies our files, resulting in our files taking up less space.
3. webpack can also make transformations to our modules before they are bundled, e.g., sass to css, or es6 to es5 that the browser can understand.

_Minification_ - the process of removing all unnecessary characters from JavaScript source code without altering its functionality. This includes the removal of whitespace, comments, and semicolons, along with the use of shorter variable names and functions.&#x20;



## Webpack Order of Events

![Steps 1, 2, 3 are new. Steps 4, 5, 6, 7 are what we were doing previously.](../../.gitbook/assets/webpack-good.jpg)

1. The `webpack` command is run.
2. Webpack transforms `src/script.js` and/or whichever other files or groups of files are specified in Webpack configuration. "src" stands for "source".
3. Webpack puts the resulting file in `./dist`, or whichever target folder is specified in Webpack configuration. "dist" stands for "distribution".
4. The Express.js server starts with `node index.js` on the command line. The server is ready to accept requests.
5. The browser makes a request to the server for a page.
6. The browser reads a script tag in the HTML response. The script tag's `src` attribute triggers a GET request to the URL in that attribute.
7. The Express server, based on the request path, looks in the filesystem for a file that matches the request. In our example, the script tag requests the transformed `script.js` file in `./dist`. Because the script tag initiated the request, the browser's JS interpreter processes the response's file contents.

## Webpack Example

In this section we'll simply demonstrate the mechanics we described above by having Webpack process and output a file. After we've confirmed that Webpack does indeed have the behaviours listed above we'll integrate it into our web apps in the next section.

### Initialise Project Folder

Create a new folder and install Webpack.

```
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install --save-dev webpack webpack-cli
```

Create folders and files that Webpack will use for compilation.

```
mkdir src dist
touch src/script.js
touch dist/main.html
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

#### dist/main.html

Populate a `main.html` file that will load Webpack's transformed `script.js`.

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

```
npx webpack --mode=none
```

Look inside the `dist/script.js` to see the transformed JavaScript file. Note in what ways Webpack has transformed the file. Note that Webpack has removed comments in the output file. Try invoking other JS in the source file and see what changes in Webpack transformation.

### Run `main.html`

Open `dist/main.html` in the browser without running an Express server. Does our JavaScript from `dist/script.js` load?

## Further Reading

[https://webpack.js.org/concepts/why-webpack/](https://webpack.js.org/concepts/why-webpack/)
