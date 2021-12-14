# 6.1: Webpack

What is webpack?

At its core, **webpack** (a JavaScript library) is a static module bundler for modern JavaScript applications. When webpack processes your application, it combines all the modules your project needs into one or more bundles. These bundles are static assets which your content is served from.&#x20;

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

## Further Reading

[https://webpack.js.org/concepts/why-webpack/](https://webpack.js.org/concepts/why-webpack/)
