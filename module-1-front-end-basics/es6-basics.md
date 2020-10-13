# ES6 Basics

## Variable Declaration with `let` and `const`

So far we've created variables with `var`.

```javascript
var kilometers = 10;
var randomDiceRolls = [3,2,4,5];
```

In ES6 we will change the standard way we create variables.

```javascript
let kilometers = 10;
const randomDiceRolls = [3,2,4,1];
```

There are a few guidelines to how we choose to create variables with ES6:

## `let` with Basic Values 

If the value we are going to store is a number, string, or boolean, use `let`.

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
const diceRolls = [3,4,1,6,1];
```

### Reference vs. Value

A common question is, with `const`, does that mean that the value of an array is constant? The answer is no, because the _**array itself**_ should never change, but the values inside the array might.

#### Altering the values _inside_ an array \(works fine\)

```javascript
const diceRolls = [4,2,1,4];
diceRolls.push(5); // this affects the values *inside* the array, not the array itself
```

#### Altering the values _of the variable_ \(an error\)

```javascript
const diceRolls = [4,2,1,4];
diceRolls = 99; // this will be an error
```

This is also related to why you cannot compare two arrays. The array itself is not equivalent to the values inside it.

```javascript
[1,2,3] === [1,2,3] // this boolean statement will not be true
```

## Arrow Functions

We'll change the default way we define functions in JavaScript.

#### Old Way

```javascript
var rollDice = function(){
  // random number stuff
};
```

#### New Way

```javascript
const rollDice = () => {
  // random number stuff
};
```

There are a few subtle differences between these two syntaxes, but for all of our material we won't notice a difference. It's just shorter to write.

We also always use `const` when defining a function.

## Template Literals

#### Old Way

```javascript
var output = 'you rolled ' + diceRoll + '. nice job!';
```

#### New Way

```javascript
var output = `you rolled ${diceRoll}. nice job!`;

```

## Exercise

Open up the dev tools console in chrome. Follow the examples above **to get the error.** What does the error message say?

Go back to an old piece of code you've written. Change the function definition to use arrow functions in one place that you can easily test.

You can change the definition of the `main` function in any old code from SWE101.

Change one string output where you used plus sign and change it to a template literal.



