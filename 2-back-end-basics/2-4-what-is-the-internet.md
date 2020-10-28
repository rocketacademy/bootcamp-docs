# 2.9: What is the Internet: HTTP

When you interact with the internet:

1\) It's slow.

2\) You don't know how long it will take.

![](../.gitbook/assets/my-document-2-%20%281%29.jpg)

## HTTP

A way to send things over TCP/IP.

## HTTP Request Headers

Headers are meta information about a given request. 

### HTTP Method

The method indicates what kind of action the user is requesting the server do.

GET is the default method when you type into the browser bar. THis method specification is sent in the header of the request.

## HTTP Response Headers

### Status Code

The status code is the number that indicates what the server application says about the response.

200 is the status code num,ber that means everything was OK.

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

## Send Requests Out

```javascript
const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
```

## ngrok

For the purposes of this module section we will want to be able to listen for requests that come from the actual internet.

ngrok is a service that sets a given internet address and forwards all request from that address to your computer, bypassing the LAN that your computer is connected to.

## Make Requests

Send some things back and forth.

Install [ngrok](https://ngrok.com/).

Start it:

```text
./ngrok http 3004
```

Open a new terminal and start a server:

```text
node index.js
```

Make a request to the ngrok address.

