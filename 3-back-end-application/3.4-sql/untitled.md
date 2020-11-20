# 3.4.4: INNER JOIN

## Setup

```text
CREATE TABLE recipes ( id SERIAL PRIMARY KEY,
                 label TEXT,
                 category_id INTEGER);

CREATE TABLE categories ( id SERIAL PRIMARY KEY,
                   name TEXT);
```

Create some records:

```text
INSERT INTO categories ( name ) VALUES ('vegan');
INSERT INTO categories ( name ) VALUES ('keto');
INSERT INTO categories ( name ) VALUES ('nut free');
```

Check which ids have been assigned:

```text
SELECT * FROM categories;
```

Associate and create some recipes:

```text
INSERT INTO recipes ( label, category_id ) VALUES ('Udon',1);
INSERT INTO recipes ( label, category_id ) VALUES ('Mee Pok',2);
INSERT INTO recipes ( label, category_id ) VALUES ('Pasta',1);
```

## INNER JOIN

Query that JOINs the two tables:

```text
 SELECT recipes.id, recipes.label, recipes.category_id, categories.id, categories.name
 FROM recipes                                                                                     
 INNER JOIN categories ON categories.id = recipes.category_id;
```

![](../../.gitbook/assets/join-venn.jpg)

An inner join is a query to find the overlapping values between two tables. This query is getting result rows when the category `id` is the same as the `category_id`.

![](../../.gitbook/assets/join-query.jpg)

The result of the query is to output a new table that has one row when two rows from the joined tables matched. \(`categories.id` is equal to r`ecipes.category_id`\).

![](../../.gitbook/assets/join-table.jpg)

