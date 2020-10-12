# setInterval

`setInterval` repeats a callback function over and over again.



```javascript
console.log('starting...');

var delayInMiliseconds = 1000; // this is one second

var ref =  setInterval(function(){

    console.log('I happen after '+delayINMilliseconds);
},delayInMilliseconds);

console.log('banans!');
```



```javascript
console.log('starting...');

var delayInMiliseconds = 1000; // this is one second
var counter = 0;

var ref =  setInterval(function(){

    console.log('I happen after '+delayINMilliseconds);
    console.log( counter );
    counter++;
    
    if( counter > 10 ){
        clearInterval( ref );
    }
    
},delayInMilliseconds);

console.log('banans!');
```

