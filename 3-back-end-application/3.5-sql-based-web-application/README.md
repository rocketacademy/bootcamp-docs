# 3.5: SQL-Based Web Application

![](../../.gitbook/assets/express-2.jpg)

The final form of the high-level architecture of our web application is a PostgreSQL database server that stores data, an Express.js web server, and user facing functionality in the browser.

When we deploy this application in its final form \(on the service Heroku\) the database will be accessed on a different computer.

## Setup

For our initial engagement with SQL we will use the `psql` command line app to get used to writing raw SQL queries.

### Mac 

Install [postgres.app](https://postgresapp.com/). Open the application and follow the setup instructions at [postgresapp.com](https://postgresapp.com).

### Windows \(in WSL\)

Install Postgres

```text
sudo apt update
sudo apt upgrade
sudo apt install postgresql
sudo apt install postgresql-client
```

Set the Postgres server to start in the background:

```text
sudo service postgresql start
```

Set password-less login:

```text
sudo "$(which code)" /etc/postgresql/12/main/pg_hba.conf
```

#### pg\_hba.conf

```text
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# IPv4 local connections:
local    all            all                                     trust
host     all            all             127.0.0.1/32            trust
# IPv6 local connections:
host     all            all             ::1/128                 trust
```

Restart to get the new configs:

```text
sudo service postgresql restart
```

Create a user and database named after your Ubuntu user:

```text
sudo su - postgres
createuser -s <USER>
createdb <USER>
```

Exit out of the postgres user

```text
exit
```

Test it:

```text
psql
```

[https://linuxhint.com/install\_postgresql\_-ubuntu/](https://linuxhint.com/install_postgresql_-ubuntu/)

