# 3.4 SQL

SQL is a language that describes how to get a set of organized data.

It's distinct from the **database system**, which is the software that keeps data on the disk, and runs the SQL language in order to know which data to retrieve from the disk.

SQL the language simply describes how a set of conceptual data should be stored and retrieved.

So far, we've seen a couple of different formats of data storage:

* Data stored in a plain file, separated by line endings \(\n\)
* Data stored in a plain file, but encoded in JavaScript object style \(JSON\)
* Binary data, such as images.

The literal data format stored on the hard drive is determined by the implementation of the SQL system, but the conceptual format of the data is simply a set of spreadsheets.

![](../../.gitbook/assets/screen-shot-2020-11-14-at-2.10.22-pm.png)

The hierarchy of data in a SQL system is:

#### Database

The data for an entire project / business / domain.

_An entire grocery business._

#### Table

A set of data for one "thing" or data type. A database has many tables.

_All fruits_

#### Column

One kind of data in your table. A table has a column each for every type of data that we want to track.

_The weight of a kind of fruit._

#### Row

One set of data that represents one of the things your table tracks. 

_One fruit._

#### Cell

One piece of data of the column type. A hard rule of SQL is that a cell can never contain more than one single piece of data.

_The weight data \(a number\) of one kind of fruit._

