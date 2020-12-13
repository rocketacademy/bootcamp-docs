# 4.1: Sequelize

![](../../.gitbook/assets/logo-small.png)

Sequelize is an ORM for PostgreSQL.

You may have noticed that for each set of CRUD routes in an Express.js app, the SQL queries that need to be written follow a certain pattern:

Create a thing?

`INSERT INTO <TABLENAME> (<COLUMN_NAMES>) VALUES (<VALUES>);`

Get a thing?

`SELECT * FROM <TABLE_NAME> WHERE id=<ID>;`

And so on. In fact all common CRUD type queries that we've seen follow this basic pattern.

Sequelize is the answer to the question, _what if we could write a program that writes these SQL queries for us?_

When we finish implementing Sequelize in our Express.js app, it will form the Model part of our Model View Controller architecture.

