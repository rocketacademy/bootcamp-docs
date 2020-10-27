# 2.7: What is the Internet

When you interact with the internet:

1\) It's slow.

2\) You don't know how long it will take.

![](../.gitbook/assets/my-document-2-%20%281%29.jpg)

## HTTP

A way to send things over TCP/IP.

## Server That Responds With 'yay'

```text
import {createServer} from 'http';
const PORT = 3004;

createServer((request, response) => {
    console.log('request ', request.url);
    response.end('yay', 'utf-8');
}).listen(PORT);
console.log('Server running.');
```

## File Server

```text
var http = require('http');
var fs = require('fs');
const PORT = 3004;

http.createServer((request, response) => {
    console.log('request ', request.url);

    var filePath = '.' + request.url;

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT') {
              response.writeHead(404);
              response.end('Sorry, 404!');
            }
            else {
                response.writeHead(500);
                response.end('Sorryy!!!!');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
        }
    });

}).listen(PORT);
console.log('Server running.');
```
