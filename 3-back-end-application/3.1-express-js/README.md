# 3.1: Express.js

![](../../.gitbook/assets/express.jpg)

Express.js is an npm package that provides some common patterns for dealing with HTTP requests.

Compare this basic code example to our original 'yay' server.

#### Express.js

```javascript
import express from 'express';
const app = express();

const PORT = 3000;

const whenIncomingRequest = (request, response) => {
  console.log('request came in');
  response.send('yay');
};

app.get('/', whenIncomingRequest);

app.listen(PORT);
```

#### createServer

```javascript
import { createServer } from 'http';

const PORT = 3004;

const whenIncomingRequest = (request, response) => {
  console.log('request came in');
  response.end('yay', 'utf-8');
};

const server = createServer(whenIncomingRequest);

server.listen(PORT);
```

In Express.js the differences are line 8 where the response is being sent back, and more importantly, on line 11.

## app.get

Line 11 of the Express code example is where we set the callback listener. It works differently from the other request listeners we've created.

An Express.js app is meant to take in many different types of requests. The library has built-in functionality to segment the different types of request this type of application normally has.

Express server application functionality is meant to be split up in two hierarchical ways.

```javascript
app.get('/', whenIncomingRequest);
```

### HTTP Methods

Each request callback is set with a function named after an HTTP method: `get`, `post`, `put`, `delete`, etc.

### HTTP Path

The first argument to any of the above http method functions is a URL path matcher.

So, this URL:

```bash
http://localhost:3004/wow-bananas
```

Will cause this callback to be called:

```javascript
app.get('/wow-bananas', whenIncomingRequest);
```

Normal web application URL paths are meant to match what would be a normal sounding file server path; That is to say, even though we won't have any HTML files in our express app, the naming convention of the URL paths will still be named similarly, as if we were still dealing with files.

Each `app.<METHOD_NAME>` `app.get`, `app.post`, etc. function call and listener callback is called a "route". Routes are considered 1 form of Express "middleware", where middleware are functions with access to the request and response objects, that are executed in the order they are bound to the `app` object, until any middleware sends a response back to the client. 

Read more about Express middleware [here](https://expressjs.com/en/guide/using-middleware.html) and on Express in general [here](https://expressjs.com/en/4x/api.html#express).

## Exercise

Create an Express.js application as above.

Start with the [base node repo](https://github.com/rocketacademy/base-node-swe1) and install the Express.js library.

### Dice Roll

Create an express app that rolls a dice when the user makes a request to the route `/dice-roll`. Format the output so it's easy for the user to read.

### Two Dice Rolls

Add another route to the app `/two-dice-roll` that rolls two dice and outputs it to the user.

Make this request with the browser and with `curl`. They should be the same.

