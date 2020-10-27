# 1.3: New JS Syntax

In SWE101 some best-practice JavaScript syntax was left out in the interest of brevity. As the goal of SWE1 is to become a professional SWE we should adopt best practices for our code.

## += 1

You can use `x = x + 1` , `x += 1` , or `x++` to increment the value of variable `x` by 1. [ESLint recommends against using ++](https://eslint.org/docs/rules/no-plusplus), so we will default to using `+= 1` for brevity.

There are a few ways to add one to a variable. They are all equivalent.

```javascript
let dice = 5;
let kilos = 5;
let minutes = 5;

// Old
dice += 1; // 6

// New, += is recommended
kilos += 1; // 6
minutes++; // 6
```

## `for` loops

You should be relatively familiar with the mechanics of what a loop does. We'll be changing the standard syntax that we use for loops with a fixed number of iterations.

### Old Way \(While Loop\)

In SWE101 we used `while` loops everywhere.

```javascript
// initialize loop counter
let counter = 0;

// run 10 times
while (counter < 10) {
  // main part of the loop
  console.log(`current counter: ${counter}`);

  // increment always the last line in the loop
  counter += 1;
}
```

### New Way \(For Loop\)

For a fixed number of iterations, `for` loop syntax is more concise.

```javascript
// initialize loop
for (let counter = 0; counter < 10; counter += 1) {
  // main part of the loop
  console.log(`current counter: ${counter}`);
}
```

### Shorter Counter or Index Variable Name

It's quite common to shorten the name of our `counter` variable name to `i`, where "i" is short for "index".

If your variable also represents something else, don't name it `i`, name it something else, but `i` is a generally accepted short name for index in a loop.

```javascript
// initialize loop
for (let i = 0; i < 10; i += 1) {
  // main part of the loop
  console.log(`current counter: ${i}`);
}
```

## Strict Equivalence \(===\)

We have been using `==` to test equivalence in our boolean statements.

When testing values, `==` does not take data type into account. This means that it is more forgiving and less work to check / correct for data type.

```javascript
3 == '3'; // true
true == 'true'; // true
```

Some equivalence checks are not intuitive for what are referred to as truthy or falsy values.

```javascript
0 == false; // true
true == 'true'; // true
'' == null; // true
```

We should default to not allowing any of the above to be true. Your code is less likely to have errors if the conditional is helping check the data and the data type.

```javascript
3 === '3'; // false
true === 'true'; // false
0 === false; // false
true === 'true'; // false
'' === null; // false
```

To make examples like these evaluate to true we can cast the variable value into the correct type:

```javascript
Number('3') === 3; // true
Boolean('true') === true; // true
```

## Exercises

Find some old code that you have written and replace each of these examples and make them run without errors.

When dealing with user input, things like `if (input === 3)`will no longer work.

