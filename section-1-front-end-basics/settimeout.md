# setTimeout

`setTimeout` uses a callback function to do something at a later time. 

```javascript
console.log('starting...');

var delayInMiliseconds = 1000; // this is one second

setTimeout(function(){

    console.log('I happen Later!');
},delayInMilliseconds);

console.log('banans!');
```



