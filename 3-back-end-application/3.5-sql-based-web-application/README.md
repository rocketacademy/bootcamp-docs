# 3.5: SQL-Based Web Application

![](../../.gitbook/assets/express-2.jpg)

The final form of the high-level architecture of our web application is a PostgreSQL database server that stores data, an Express.js web server, and user facing functionality in the browser.

When we deploy this application in its final form \(on the service Heroku\) the database will be accessed on a different computer.

In this module we'll learn about how to create, manage and deploy the PostgreSQL server.

Note that this is different from managing the data _**inside**_ the database.

The web application itself \(Express.js\) is responsible for which data goes inside the database. \(Which rows are in the database\).

Express.js, the application itself \(expect for less common application types\) will never manage the data format- how many tables are in the database, what the data types of the columns are. We'll learn more about setting this up in schema design.

Managing the PostgreSQL server application itself, i.e., ports and backups version upgrades to PostgreSQL, etc. is done by the person responsible for infrastructure.

## Setup

### Mac 

Install [postgres.app](https://postgresapp.com/). Open the application and follow the setup instructions.

### Windows

[https://linuxhint.com/install\_postgresql\_-ubuntu/](https://linuxhint.com/install_postgresql_-ubuntu/)



