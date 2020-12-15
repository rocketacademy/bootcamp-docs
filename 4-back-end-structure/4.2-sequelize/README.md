# 4.2: ORM, Sequelize

## Introduction

![Sequelize Logo](../../.gitbook/assets/logo-small.png)

[ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) stands for "object-relational mapping", where database tables \(also known as "[relations](https://en.wikipedia.org/wiki/Relation_%28database%29)"\) are mapped to [objects or classes](https://en.wikipedia.org/wiki/Object_%28computer_science%29#:~:text=An%20object%20is%20an%20abstract,found%20in%20the%20real%20world.), such that SQL relations and their relevant associations can be manipulated directly from application code using pre-defined methods without writing SQL query strings. This helps our applications be more robust and secure because there is less chance for human error. [Sequelize](https://sequelize.org/) is the most popular ORM for JavaScript and PostgreSQL. We will use Sequelize during SWE1 for our web applications to replace raw SQL.

## ORMs Replace Common SQL Queries

You may have noticed that SQL queries for each set of CRUD routes follow a similar pattern. Most CRUD queries follow this same pattern, and can be relatively easily substituted with ORM.

```sql
// Create Query
INSERT INTO <TABLENAME> (<COLUMN_NAMES>) VALUES (<VALUES>);
// Retrieve Query
SELECT * FROM <TABLE_NAME> WHERE id=<ID>;
```

ORM is the answer to the question: "What if we could write a program that writes these SQL queries for us?" When we finish implementing Sequelize ORM in our Express app, it will form the Model part of our Model-View-Controller architecture.

