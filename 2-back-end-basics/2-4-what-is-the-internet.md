# 2.9: What is the Internet: HTTP

When you interact with the internet:

1\) It's slow.

2\) You don't know how long it will take.

![](../.gitbook/assets/my-document-2-%20%281%29.jpg)

## HTTP

A way to send things over TCP/IP.

## 127.0.0.1

There is a special IP address that doesn't access the network outside of the computer. It simply sends the request back around to the computer as if a request had come in from outside.

## localhost

localhost is the hostname that is resolved directly on your computer to 127.0.0.1

## HTTP Request Headers

Headers are meta information about a given request. 

### HTTP Method

The method indicates what kind of action the user is requesting the server do.

GET is the default method when you type into the browser bar. THis method specification is sent in the header of the request.

## HTTP Response Headers

### Status Code

The status code is the number that indicates what the server application says about the response.

200 is the status code number that means everything was OK.

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

### Send Requests with Chrome

Type in google.com to the address bar.

### Send Requests with the Command Line

```text
curl google.com
```

### Send Requests with Node.js

```javascript
import { get } from 'http';

get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
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

ngrok is a service that sets a given internet address and forwards all requests from that address to your computer, bypassing the local network your computer is connected to.

## Exercise

### Install ngrok

```javascript
brew cask install ngrok
```

## sdfsd



