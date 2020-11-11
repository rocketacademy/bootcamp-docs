# 2.13: JSON

We need to introduce a way to store structured data in a text file, rather than just reading from lines.

We'll also use this in our web application to store it's data before we talk about SQL.

JSON stands for JavaScript Object Notation. It is a subset of the JavaScript language used for storing data in string / plain text form, as in a text file.

It looks like this:

```javascript
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27
}
```

A couple of the major JSON formatting rules are:

* keys must be strings
* all strings must have double quotes, not single quotes
* no trailing commas for key/value pairs \(the last key/value set before the closing curly brace\)

You can also have nested structures such as other objects and arrays in JSON:

```javascript
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [],
  "spouse": null
}
```

When we begin to represent more real world data, it will almost always consist of arrays of objects.

## Parse

The JavaScript language has some built-in functionality to handle JSON.

Note how the data type of the JSON variable is a string. We want to transform it to a JavaScript object.

```javascript
const myJson = '{"name":"kai","height":4}'; // we can't do: myJson.name

const myUser = JSON.parse(myJson); // now we can do: myUser.name
```

## Stringify

The opposite of `parse` is `stringify`. Take a JavaScript object and turn it into a JSON string.

```javascript
const myUser = {
  name: 'kai',
  height: 4,
};

myUser.height = Math.random(); // we can access and change values in the object

const myJson = JSON.stringify(myUser); // make the object into a string
```

## Exercise

Open the chrome dev tools console and paste these examples in to try them out.

