# 2.2: Command Line Programs

Create some command line programs in Node.js

### `process.argv`

`process.argv` contains all the information about what was typed into the terminal when the Node.js program was executed.

Create this `index.js` file:

```javascript
console.log('this is process argv!');
console.log( process.argv );
```

Run it a few times in the terminal:

```javascript
node index.js
```

```javascript
node index.js tomatoes
```

```javascript
node index.js apples bananas
```

```javascript
node index.js chicken pork beef
```

### Metric Conversion Program

```javascript
let distanceInKilometers = process.argv[2];

let distanceInMiles = distanceInKilometers * 0.62;

console.log( distanceInMiles );
```

```javascript
node index.js 2
```

