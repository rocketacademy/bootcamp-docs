# 1.11: Timer

Use setTimeout and setInterval together to create a countdown timer.

## Globals

```js
let milliseconds = 5000;
const delayInMilliseconds = 1;
const output = document.createElement('div');
output.innerText = milliseconds;
document.body.appendChild(output);
```

## Timer

```js
const ref = setInterval(() => {
  output.innerText = milliseconds;

  if (milliseconds <= 0) {
    clearInterval(ref);
  }

  milliseconds -= 1;
}, delayInMilliseconds);
```

## Exercise

Create a timer that counts up instead of down. Have it stop after the same amount of time as the countdown timer above. \(5000 milliseconds\).
