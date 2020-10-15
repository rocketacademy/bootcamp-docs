# 1.3: New JS Syntax

## `for` loops

You should be relatively familiar with the mechanics of what a loop does. We'll be changing the standard syntax that we use for loops.

#### Old Way

```javascript
// initialize loop counter 

var counter = 0;

// run 10 times
while( counter < 10 ){
 // main part of the loop
 console.log( 'current counter :'+ counter );
 
 // increment always the last line in the loop
 counter = counter + 1;
} 
```

#### New Way

```javascript
// initialize loop  
for( let counter=0; counter<10; counter+=1 ){

 // main part of the loop
 console.log( 'current counter :'+ counter );
} 
```

#### ++

You can use `++` to increment a value by one. 

There are a few ways to add one to a variable. They are all equivalent.

```javascript
var dice = 5;
var kilos = 5;
var minutes = 5;

dice = dice + 1; // 6 
kilos += 1;      // 6
minutes++;       // 6
```

```javascript
// initialize loop  
for( let counter=0; counter<10; counter++ ){

 // main part of the loop
 console.log( 'current counter :'+ counter );
} 
```

### Final Form

If we are iterating over an array, it's quite common to shorten the name of your variable name from `index` to `i`.

If your variable also represents something else, don't name it `i`, name it something else, but `i` is a generally accepted short name for index in a loop.

```javascript
// initialize loop  
for( let i=0; i<10; i++ ){

 // main part of the loop
 console.log( 'current counter :'+ i );
} 
```

## Strict Equivalence

We have been using == to test equivalence in our boolean statements.

When testing values == does not take data type into account. This means that it is more forgiving and less work to check / correct for data type.

```javascript
3 == '3'       // true
true == 'true' // true
```

Some equivalence checks are not intuitive for what are referred to as truthy or falsy values.

```javascript
0 == false       // true
true == 'true'   // true
'' == null       // true 
```

We should default to not allowing any of the above to be true. Your code is less likely to have errors if the conditional is helping check the data and the data type. 

```javascript
3 === '3'         // false
true === 'true'   // false
0 === false       // false
true === 'true'   // false
'' === null       // false 
```

To make examples like these evaluate to true we can cast the variable value into the correct type:

```javascript
3 === Number('3')        // true
true === Boolean('true') // true
```

## Exercises

Find some old code that you have written and replace each of these examples and make them run without errors.

