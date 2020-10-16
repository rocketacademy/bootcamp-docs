# 1.11: Timer

Use setTimeout and setInterval together to create a countdown timer.

### Globals

```js
let milliseconds = 5000;
let delayInMilliseconds = 1;
const output = document.createElement('div');
output.innerText = milliseconds;
document.body.appendChild(output);
```

### Timer

```js
let ref =  setInterval( () => {
    output.innerText = milliseconds;
    
    if( millisecnds <= 0 ){
        clearInterval( ref );
    }

    milliseconds--;
}, delayInMilliseconds );
```

### Laps & Splits

{% embed url="https://www.youtube.com/watch?v=BmkbHET5HuM" %}



