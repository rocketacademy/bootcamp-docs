# Helpful JavaScript Functions and Quirks

JavaScript \(like most languages\) has built-in functions that can help simplify our logic. Here are common functions that past students have found helpful.

## String Functions

### Substring

Get a specified subset of a given string.

[https://www.w3schools.com/jsref/jsref\_substring.asp](https://www.w3schools.com/jsref/jsref_substring.asp)

### Includes

Verify if a given string includes a given substring.

[https://www.w3schools.com/jsref/jsref\_includes.asp](https://www.w3schools.com/jsref/jsref_includes.asp)

## Objects

### Object Dereferencing: myObj.foo vs myObj\[foo\] vs myObj\['foo'\]

`myObj.foo` and `myObj['foo']` are equivalent. ESLint prefers `.foo` syntax.

`myObj[foo]` returns the value that corresponds to the key with the value stored inside the variable `foo`. For example, if `foo === 'bar'`, then `myObj[foo]` is equal to `myObj.bar`. 

We cannot use `.foo` notation for numbers. For example, for an object key with value `'1'`, we cannot do `myObj.1`. We must do `myObj[1]` or `myObj['1']`, where JS auto-converts `1` in the former example to `'1'` since object keys can only be strings.

