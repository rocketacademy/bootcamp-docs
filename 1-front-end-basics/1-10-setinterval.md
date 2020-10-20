# 1.10: setInterval

`setInterval` repeats a callback function over and over again.

```javascript
console.log('starting...');

const delayInMilliseconds = 1000; // this is one second

const ref = setInterval(() => {
  console.log(`I happen after ${delayInMilliseconds}`);
}, delayInMilliseconds);

console.log('banans!');
```

```javascript
console.log('starting...');

const delayInMilliseconds = 1000; // this is one second
let counter = 0;

const ref = setInterval(() => {
  console.log(`I happen after ${delayInMilliseconds}`);
  console.log(counter);
  counter += 1;

  if (counter > 10) {
    clearInterval(ref);
  }
}, delayInMilliseconds);

console.log('bananas!');
```

### Exercise

Run the above code.

