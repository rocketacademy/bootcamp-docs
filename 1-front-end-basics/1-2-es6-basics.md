# 1.2: ES6 Basics

## What is ES6

Every language matures and comes out with new versions as time goes on.

For JavaScript the language began with very few features and has slowly been adding new ones over time.

JavaScript is somewhat unique in that the version will always be tied to _**where the JavaScript is running**_. Which \(for front-end\) is in the browser of a user whose device that you as the programmer/company do not control- you do not know if the person is accessing your site from a brand new iPhone or from a [smart fridge](https://www.theguardian.com/technology/2019/aug/13/teen-smart-fridge-twitter-grounded). On many devices users are completely unable to upgrade their browser, the software that contains the specific version of JavaScript.

The version of JavaScript we'll be using is not the very latest one, because most devices would not support it. We'll be learning features of ES6, which is the last, newest, widely supported version of JavaScript. It was released in 2015.

We'll be adding these ES features as we go along.

## Variable Declaration with `let` and `const`

So far we've created variables with `var`.

```javascript
let kilometers = 10;
let randomDiceRolls = [3, 2, 4, 5];
```

In ES6 we will change the standard way we create variables.

```javascript
let kilometers = 10;
const randomDiceRolls = [3, 2, 4, 1];
```

There are a few guidelines to how we choose to create variables with ES6:

## `let` with Basic Values

If the value we are going to store is a number, string, or boolean, and we expect the value of that variable to be reassigned later, use `let`.

```javascript
let kilometers = 10;
```

## `const` for constant values

If it's a basic value, but this value won't change for the life of your program, use `const`.

```javascript
const sidesOfDice = 6;
```

#### Reassigning a value with const is an error

```javascript
const pi = 3.14;
pi = 99999; // you will get an error with this line
```

## `const` for arrays and objects

If we are creating an array or object, use const.

```javascript
const diceRolls = [3, 4, 1, 6, 1];
```

### Reference vs. Value

A common question is, with `const`, does that mean that the value of an array is constant? The answer is no, because the _**array itself**_ should never change, but the values inside the array might.

#### Altering the values _inside_ an array \(works fine\)

```javascript
const diceRolls = [4, 2, 1, 4];
diceRolls.push(5); // this affects the values *inside* the array, not the array itself
```

#### Altering the values _of the variable_ \(an error\)

```javascript
const diceRolls = [4, 2, 1, 4];
diceRolls = 99; // this will be an error
```

This is also related to why you cannot compare two arrays. The array itself is not equivalent to the values inside it.

```javascript
[1, 2, 3] === [1, 2, 3]; // this boolean statement will not be true
```

## Block Scope

Variables we define in "blocks" like an if statement will not be available anymore when we use `let` and `const`. `var` in ES5 uses "function scope", which makes variables declared with `var` accessible anywhere within a given function.

#### Old Way

```javascript
if (diceRoll === 6) {
  var win = true;
}
console.log(win); // this will be true
```

#### New Way

```javascript
if (diceRoll === 6) {
  let win = true;
}

// this will error- win variable doesn't
// exist here, outside the if statement
console.log(win);
```

```javascript
if (diceRoll === 6) {
  const win = true;
}

// this will error- win variable doesn't
// exist here, outside the if statement
console.log(win);
```

Block scope refers to JavaScript **blocks**, which are if, \(and else if, etc.\), loops and switch statements. `let` and `const` values declared in a block will not exists outside the block.

{% hint style="warning" %}
Note that blocks here equates to curly braces- except for functions. Functions behave similarly but different in terms of variable availability, which is referred to as _function scope_.
{% endhint %}

## Arrow Functions

We'll change the default way we define functions in JavaScript.

### Old Way

```javascript
let rollDice = function () {
  // random number stuff
};
```

### New Way

```javascript
const rollDice = () => {
  // random number stuff
};
```

There are a few subtle differences between these two syntaxes, but for all of our material we won't notice a difference. It's just shorter to write.

We also always use `const` when defining a function.

## Template Literals

### Old Way

```javascript
let output = `you rolled ${diceRoll}. nice job!`;
```

### New Way

```javascript
let output = `you rolled ${diceRoll}. nice job!`;
```

{% hint style="warning" %}
**Note:**

The naming of the JavaScript versions are confusing- see more [here](https://flaviocopes.com/ecmascript/) if you want to know the details.

The versions of JavaScript are tied to individual features of that version. You can see a matrix of the version and it's support in each popular platform [here](https://kangax.github.io/compat-table/es6/) for ES6 and [here](https://kangax.github.io/compat-table/esnext/) for the latest version.

The engineering decision of which version of JavaScript to select for a given project is always a balance between the demographics of your user base and the cost of supporting an older version of the language.

For example, a cutting edge product like GitHub is more likely to have a user demographic that uses the latest version of JavaScript vs. a government service website or broad consumer site like Lazada or Amazon.
{% endhint %}

## Exercises

### `let` & `const`

Open up the dev tools console in chrome. Follow the `const` examples above to get the error. What does the error message say?

Go back to an old piece of code you've written. Change a few of the variable declarations to `let` and `const`.

### Arrow Functions

Go back to an old piece of code you've written. Change the function definition to use arrow functions in one place that you can easily test.

You can change the definition of the `main` function in any old code from SWE101.

### Template Literals

Change one string output where you used plus sign and change it to a template literal.

