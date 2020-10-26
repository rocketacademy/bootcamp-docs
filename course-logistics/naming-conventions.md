# Naming, Casing, and Commenting Conventions

Naming, casing, and commenting are critical to software engineering because they help us communicate what our code does, preventing miscommunication and bugs. The following are a set of naming, casing, and commenting conventions to follow during SWE1 \(and hopefully beyond\).

## Naming

### Functions

Function names should start with a verb. This is to distinguish functions from data that might take a similar name. For example, the function `getRandomNum` may return a random number that gets stored in a variable `randomNum`.

### Booleans

Boolean variable names should start with a question word. This is to clearly communicate that this variable stores a boolean. For example, `isGameOver` and `hasPlayerWon` would be preferred boolean variable names than `gameOver` and `playerWon` because the former more explicitly store booleans.

### Other Variables

In general, variable names should be as specific as possible to prevent miscommunication. For example, for a game with 2 JS Objects, 1 an HTML element representing a playing card and 1 a JS Object containing playing card's name, suit, and rank, we might name the former `cardElement` and the latter `cardMetadata`. Avoid naming either variable `card` to prevent miscommunication.

## Casing

### Variables

By default, JavaScript uses [camelCase](https://en.wikipedia.org/wiki/Naming_convention_%28programming%29#Examples_of_multiple-word_identifier_formats) for variable names.

### Constants

Sometimes we have variables that are constant in our program and used in multiple places, for example game modes. To communicate clearly what these constants are and prevent bugs due to string or number misspelling, we often store these variables in "constant" variables, often near the top of our file or in a separate `constants.js` file.

Constants are typically cased with [SCREAMING\_SNAKE\_CASE](https://en.wikipedia.org/wiki/Naming_convention_%28programming%29#Examples_of_multiple-word_identifier_formats) by convention.

### File Names

File and folder names typically use [kebab-case](https://en.wikipedia.org/wiki/Naming_convention_%28programming%29#Examples_of_multiple-word_identifier_formats) or [snake\_case](https://en.wikipedia.org/wiki/Naming_convention_%28programming%29#Examples_of_multiple-word_identifier_formats) for easy typing and autocomplete in the terminal. 

## Commenting

For function-level comments, consider using [JSDoc format](https://jsdoc.app/about-getting-started.html#adding-documentation-comments-to-your-code) for clearer identification of functions and what they do.

