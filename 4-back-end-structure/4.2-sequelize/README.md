# 4.2: ORM, Sequelize

## Introduction

![Sequelize Logo](../../.gitbook/assets/logo-small.png)

[ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) stands for "object-relational mapping", where database tables \(also known as "[relations](https://en.wikipedia.org/wiki/Relation_%28database%29)"\) are mapped to [objects or classes](https://en.wikipedia.org/wiki/Object_%28computer_science%29#:~:text=An%20object%20is%20an%20abstract,found%20in%20the%20real%20world.), such that SQL relations and their relevant associations can be manipulated directly from application code using pre-defined methods without writing SQL query strings.

[Sequelize](https://sequelize.org/) is the most popular ORM for JavaScript and PostgreSQL. We will use Sequelize during SWE1 for our web applications to replace writing raw SQL.

You may have noticed that for each set of CRUD routes in an Express.js app, the SQL queries that need to be written follow a certain pattern:

#### Create a thing?

`INSERT INTO <TABLENAME> (<COLUMN_NAMES>) VALUES (<VALUES>);`

#### Get a thing?

`SELECT * FROM <TABLE_NAME> WHERE id=<ID>;`

And so on. In fact all common CRUD type queries that we've seen follow this basic pattern.

Sequelize is the answer to the question, _what if we could write a program that writes these SQL queries for us?_

When we finish implementing Sequelize in our Express.js app, it will form the Model part of our Model-View-Controller architecture.

