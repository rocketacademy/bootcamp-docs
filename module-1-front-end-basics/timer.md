# Timer

Use setTimeout and setInterval together to create a countdown timer.

Globals



```javascript
var milliseconds = 5000;
var delayInMilliseconds = 1;
var output = document.createElement('div');
output.innerText = milliseconds;
document.body.appendChild(output);
```

Timer

```javascript
var ref =  setInterval( function() {
    output.innerText = milliseconds;
    
    if( millisecnds <= 0 ){
        clearInterval( ref );
    }

    milliseconds--;
}, delayInMilliseconds );
```

Laps & Splits

{% embed url="https://www.youtube.com/watch?v=BmkbHET5HuM" %}



