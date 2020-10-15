# 1.10: setInterval

`setInterval` repeats a callback function over and over again.

```javascript
console.log('starting...');

const delayInMiliseconds = 1000; // this is one second

let ref =  setInterval(()=>{

    console.log('I happen after '+delayInMilliseconds);
},delayInMilliseconds);

console.log('banans!');
```



```javascript
console.log('starting...');

const delayInMiliseconds = 1000; // this is one second
let counter = 0;

let ref =  setInterval(()=>{

    console.log('I happen after '+delayINMilliseconds);
    console.log( counter );
    counter++;
    
    if( counter > 10 ){
        clearInterval( ref );
    }
    
},delayInMilliseconds);

console.log('bananas!');
```

