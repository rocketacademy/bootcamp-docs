# 3.1: Intro to Express.js

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

const server = createServer(whenIncomingRequest)

server.listen(PORT);
```

In Express.js the differences are line `10` where the response is being sent back, and more importantly, on line `13`.

## app.get

Line `13` of the code example is where we set the callback listener. It works differently from the other request listeners we've created.

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

