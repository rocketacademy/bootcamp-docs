# 3.1: Intro to Express.js

![](../../.gitbook/assets/express.jpg)

Express.js is an npm package that provides some common patterns for dealing with HTTP requests.

Compare this basic code example to our original 'yay' server.

Express

```javascript
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {

    console.log('request came in');

  res.send('yay');
});

app.listen(PORT);
```

createServer

```javascript
import { createServer } from 'http';

const PORT = 3004;

const whenIncomingRequest = (request, response) => {
  
  console.log('request came in');

  response.end('yay', 'utf-8');
};

createServer(whenIncomingRequest).listen(PORT);
```

