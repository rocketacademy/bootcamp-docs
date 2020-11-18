# 3.5: SQL-Based Web Application

![](../../.gitbook/assets/express-2.jpg)

The final form of the high-level architecture of our web application is a PostgreSQL database server that stores data, an Express.js web server, and user facing functionality in the browser.

When we deploy this application in its final form \(on the service Heroku\) the database will be accessed on a different computer.

## Setup

### Mac 

Install [postgres.app](https://postgresapp.com/). Open the application and follow the setup instructions.

### Windows

```text
sudo apt update
sudo apt upgrade
sudo apt install postgresql
sudo apt install postgresql-client

```



[https://linuxhint.com/install\_postgresql\_-ubuntu/](https://linuxhint.com/install_postgresql_-ubuntu/)



