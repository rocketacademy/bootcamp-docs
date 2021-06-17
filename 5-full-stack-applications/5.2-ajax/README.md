# 5.2: AJAX

## Introduction

[AJAX](https://en.wikipedia.org/wiki/Ajax_%28programming%29) or Asynchronous JavaScript and XML is browser functionality that can make requests from within JavaScript. It means that within a single page \(and page request\) we can build logic that interacts with servers outside the browser page. Eventually we will be able to move more of the view logic that renders elements and interacts with the user into browser-side JavaScript. We will see more examples of this in coming modules.

![](../../.gitbook/assets/ajax.jpg)

## AJAX Order of Actions

1. The browser makes a request to the server.
2. The Express.js server sends back HTML.
3. The browser reads a `script` tag in the HTML response. The `script` tag's `src` attribute triggers a GET request.
4. The Express.js server, based on the request path, looks in the hard drive for a file that matches the request and sends the file contents back in the response.
5. Because the request was invoked from a `script` tag, the file contents in the response is digested by the JavaScript interpreter of the browser.
6. The JavaScript file contains code that executes a JavaScript HTTP request using Axios. A request is sent to the server for path `/ha`.
7. The Express.js server receives a request at the path `/ha`. The server sends back a JSON response.
8. Axios receives and parses the JSON response, turning it into a JavaScript Object.

## Exercise

### Setup Server and Items Route

1. Clone the [`ajax-bootcamp` repo](https://github.com/rocketacademy/ajax-bootcamp)
2. Install NPM packages
3. Update config/config.js with our Unix username
4. Create a Postgres DB with `createdb` with the DB name in config/config.js
5. Run migrations and seeds with Sequelize. There is a migration and seed file in the repo.
6. Start server locally
7. Visit `http://localhost:3004/items` in the browser to verify the server is set up and the browser can receive items in the response.

### Create New Page With AJAX Request

1. Add a new route for a page
2. Add a view for this page
3. Add a `script` tag to the view page for a JavaScript file called `script.js`
4. Add a JavaScript file called `script.js` to the `public` folder
5. Add a `script` tag to the view page to import Axios

   ```markup
   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
   ```

6. Add this Axios example to `script.js`

   ```javascript
   // Make a request for all the items
   axios
     .get('/items')
     .then(function (response) {
       // handle success
       console.log(response);
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     });
   ```

See [more about Axios here.](https://github.com/axios/axios/blob/master/README.md#example)

### Manipulate DOM with Server Response

After we receive the server response, manipulate the DOM to show all items in the HTML page.

### Trigger AJAX Call On Click

Add a button to our view and refactor our `script.js` such that the above AJAX request and DOM manipulation happens when we click the button.

