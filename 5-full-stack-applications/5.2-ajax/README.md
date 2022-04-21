# 5.2: AJAX

## Introduction

[AJAX](https://en.wikipedia.org/wiki/Ajax\_\(programming\)) or Asynchronous JavaScript and XML is browser functionality that can make requests from within JavaScript. It means that within a single page (and page request) we can build logic that interacts with servers outside the browser page. Eventually we will be able to move more of the view logic that renders elements and interacts with the user into browser-side JavaScript. We will see more examples of this in coming modules.

![](<../../.gitbook/assets/AJAX (1).jpg>)

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

Let's implement all of the above steps in some real code.

### Setup Server and Items Route

1. Clone the [`ajax-bootcamp` repo](https://github.com/rocketacademy/ajax-bootcamp)
2. Install NPM packages
3. Update config/config.js with our Unix username
4. Create a Postgres DB with `createdb` with the DB name in config/config.js
5. Run migrations and seeds with Sequelize. There is a migration and seed file in the repo.
6. Start server locally
7. Visit `http://localhost:3004/items` in the browser to verify the server is set up and the browser can receive items in the response.

_Note step 1 assumes the browser creates the incoming request for the route._

### Create New Page With AJAX Request - Step 2

Add a new route for a page. This route will respond with HTML.

**routes.mjs (Step 2 above.)**

```
app.get('newroute', (request, response)=>{
    response.render('home')
});
```

#### **Create the view directory.**

```
mkdir views
```

### **Create a view file- Steps 3, 4 & 5**

#### **home.ejs should contain:**

1. Add a `script` tag to the view page for a JavaScript file called `script.js`
2. Add a `script` tag to the view page to import Axios.

**Create script.js**

Add a JavaScript file called `script.js` to the `public` folder.

**These are steps 3, 4 & 5 above.**

**views/home.ejs**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="/script.js"></script>
  </body>
</html>
```

### Axios - Step 6

Axios is a library that helps _create requests from inside the browser JavaScript code_ \*\***and\*\* \_use the response data inside the JavaScript logic.**\_\*\* This is step 6 above.\*\*

**script.js**

```
// Make a request for all the items
axios
  .get('/items')
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
```

Read [more about Axios here.](https://github.com/axios/axios/blob/master/README.md#example) Note that Axios itself is not the library that creates the request- the browser DOM JavaScript itself creates the request, Axios simply wraps the native JavaScript library so it can use Promises.

### Response - Step 7 & 8

Note the `console.log` on line 6. Our starter code is sending back data from the server here: [https://github.com/rocketacademy/ajax-bootcamp/blob/main/controllers/items.mjs#L5](https://github.com/rocketacademy/ajax-bootcamp/blob/main/controllers/items.mjs#L5) When the browser gets to line 6 we have access to the data sent back from the server.

Open the browser network tab and run the code. Inspect the request to see the data come back in the response. This is step 7. Note `console.log` on line 6 in `script.js` outputs a JavaScript object. This is the final step, step 8. The Axios library has transformed the string HTTP GET request response into a JavaScript object. To explicitly demonstrate that this is a live object, `console.log` only the name of the first item in the response.

### Manipulate DOM with Server Response

After we receive the server response on line 6 in **`script.js`**, manipulate the DOM to show all items in the HTML page.

## Comfortable Exercise

### Trigger AJAX Call On Click

Add a button to our view and refactor our `script.js` such that the above AJAX request and DOM manipulation happens when we click the button.
