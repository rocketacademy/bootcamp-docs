# 1.11: Timer

Use setTimeout and setInterval together to create a countdown timer.

## Globals

```javascript
const milliseconds = 5000;
const delayInMilliseconds = 1;
const output = document.createElement('div');
output.innerText = milliseconds;
document.body.appendChild(output);
```

## Timer

```javascript
const ref = setInterval(() => {
  output.innerText = milliseconds;

  if (millisecnds <= 0) {
    clearInterval(ref);
  }

  milliseconds -= 1;
}, delayInMilliseconds);
```

## Laps & Splits

{% embed url="https://www.youtube.com/watch?v=BmkbHET5HuM" caption="" %}

