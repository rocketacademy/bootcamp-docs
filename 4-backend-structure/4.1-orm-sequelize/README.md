# 4.1: ORM, Sequelize

## Introduction

Lets do some wishful thinking...

* _What if we could write a program that writes these SQL queries for us?_
* _What if we did not need to remember this crazy error prone SQL syntax?_
* _What if we could call data their actual names, i.e; `Users`, `Sightings`, rather than the generic `rows`?_

### Introducing Sequelize (our ORM of choice)

[ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational\_mapping) stands for "object-relational mapping", where database tables (also known as "[relations](https://en.wikipedia.org/wiki/Relation\_\(database\))") are mapped to [objects or classes](https://en.wikipedia.org/wiki/Object\_\(computer\_science\)#:\~:text=An%20object%20is%20an%20abstract,found%20in%20the%20real%20world.), such that SQL relations and their relevant associations can be manipulated directly from application code by generating templatized SQL query code. [Sequelize](https://sequelize.org) is the most popular ORM for Node.js. We will use Sequelize during Coding Bootcamp for our web applications to replace raw SQL.

### ORMs Replace Simple SQL Queries

You may have noticed that SQL queries for each set of CRUD routes follow a similar pattern. Most CRUD queries follow this same pattern, and can be relatively easily substituted with ORM syntax by templatizing the standard SQL query syntax.

```sql
// Create Query
INSERT INTO <TABLENAME> (<COLUMN_NAMES>) VALUES (<VALUES>);
// Retrieve Query
SELECT * FROM <TABLE_NAME> WHERE id=<ID>;
```

ORM is the answer to the question: "_What if we could write a program that writes these SQL queries for us?_" When we finish implementing Sequelize ORM in our Express app, it will form the Model part of our Model-View-Controller architecture.

### SQL and Sequelize CRUD Side by Side

Imagine a database setup with the following ERD:

![](../../.gitbook/assets/category-item-erd-wide2.png)

#### &#x20;SELECT with SQL vs. Sequelize

{% tabs %}
{% tab title="SQL" %}
```
// Some code using SQL
```
{% endtab %}

{% tab title="Sequelize" %}
```
// Some code using Sequelize
```
{% endtab %}
{% endtabs %}

#### INSERT and UPDATE with SQL vs.Sequelize

{% tabs %}
{% tab title="SQL" %}
```
// Some code using SQL
```
{% endtab %}

{% tab title="Sequelize" %}
```
// Some code using Sequelize
```
{% endtab %}
{% endtabs %}

#### DELETE with SQL vs. Sequelize

{% tabs %}
{% tab title="SQL" %}
```
// Some code using SQL
```
{% endtab %}

{% tab title="Sequelize" %}
```
// Some code using Sequelize
```
{% endtab %}
{% endtabs %}

####
