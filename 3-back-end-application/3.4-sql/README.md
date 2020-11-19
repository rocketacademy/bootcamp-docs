# 3.4: SQL

SQL \(Structured Query Language\) is a language that describes how to manipulate data organised in tables.

It's distinct from the **database system**, which is the software that keeps data on the disk, and runs the SQL language in order to know what data to manipulate on disk.

SQL the language simply describes how a set of conceptual data should be stored and retrieved.

So far, we've seen a couple of different formats of data storage:

* Data stored in a plain file, separated by line endings \(\n\)
* Data stored in a plain file, but encoded in JavaScript object style \(JSON\)
* Binary data, such as images.

The literal data format stored on the hard drive is determined by the implementation of the SQL system, but the conceptual format of the data is simply a set of tables.

![](../../.gitbook/assets/screen-shot-2020-11-14-at-2.10.22-pm.png)

![](../../.gitbook/assets/sql-database.jpg)

The hierarchy of data in a SQL system is the following: Database &gt; Table &gt; Column/Row &gt; Cell. Cells are always within Columns and Rows, Columns and Rows are always within Tables, and Tables are always within Databases.

#### Database

The data for an entire project / business / domain.

_An entire grocery business._

#### Table

A set of data for one "thing" or data type. A database has many tables.

_All fruits_

#### Column

One kind of data in your table. A table has a column each for every type of data that we want to track.

Unlike in the JSON file, when you create the entire table \(before there's any data inside\) the data type of each column is specified. The data types are things like numbers, booleans and strings.

_An integer number weight of a kind of fruit._ 

#### Row

One set of data that represents one of the things your table tracks. 

_One fruit._

#### Cell

One piece of data of the column type. A hard rule of SQL is that a cell can never contain more than one single piece of data.

_The weight data \(a number\) of one kind of fruit._

## SQL Query vs Search

The SQL database we are building is a data store that structures our data and stores it so that we can get it back out.

It will not be setup to make searches against all the rows in all tables. We'll be doing a query across, at most, 2-3 tables at a time.

A SQL query that we design to be run within the app is something that has the intention to find a row or set of rows within a couple of tables.

A search is a different idea, where it tries to find relevant things within a bunch of the data held within the app.

If the search is "leong" that could refer to data across multiple tables, \(cat name, address, last name, etc.\) and within the idea of a search we might want to suggest things like capitalization, singular vs. plural, popular search, etc. The is what a _search engine application_ does. SQL has some of these functionality, but  a normal web application is not setup to give these result through a SQL query.

