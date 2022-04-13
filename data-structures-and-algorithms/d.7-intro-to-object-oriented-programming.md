# D.7: Object-Oriented Programming

## Introduction

Object-oriented programming \(OOP\) is the concept that data in our apps can be organised in conceptual entities called "objects" \(unrelated to JavaScript Objects\), also known as "classes". In an app context, `User` could be 1 such class, where a user could have multiple attributes such as name, email, password, and also multiple "methods" \(another word for functions that are part of a class\) that perform functionality on specific user "instances". An "instance" is 1 instantiation of a class, e.g. a `User` instance that represents Akira. 1 example of a method on the `User` class could be `validatePassword`, which might hash an input password and verify if it matches the relevant user's password.

We have already used classes extensively in Coding Bootcamp, perhaps unknowingly. For example, the `push` and `pop` methods on arrays in JavaScript are examples of methods in the `Array` class. The `user.name` attribute and `user.getItems` method on a user retrieved with Sequelize are examples of attributes and methods in the Sequelize `User` class that we define in our model file \(with Sequelize helper functions\).

In the DS&A context, we will be using classes to define non-built-in data structures in Python to help us solve problems more efficiently. These new data structures will include stacks, queues, linked lists, trees, graphs, and heaps. All of these data structures will be built on built-in features of Python.

## Helpful Videos

1. [This](https://www.youtube.com/watch?v=pTB0EiLXUC8) video introduces key concepts of OOP \(encapsulation, abstraction, inheritance, and polymorphism\) without getting into much code.
2. [This](https://www.youtube.com/watch?v=7Dai8SJgLkM) video explains the same key concepts of OOP with more code examples.

## Code Examples

Please read and understand the following class implementations in Python in [this](https://repl.it/@neokaiyuan/oop-examples#main.py) Repl.

1. Person
2. Worker and Tool
