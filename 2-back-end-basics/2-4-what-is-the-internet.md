# 2.8: What is the Internet: HTTP

When you interact with the internet:

1\) It's slow.

2\) You don't know how long it will take.

![](../.gitbook/assets/my-document-2-%20%281%29.jpg)

## HTTP

A way to send things over TCP/IP.

## Server That Responds With 'yay'

```javascript
import { createServer } from 'http';

const PORT = 3004;

const whenIncomingRequest = (request, response) => {
  console.log('request came in');

  response.end('yay', 'utf-8');
};

createServer(whenIncomingRequest).listen(PORT);
```

## 

