# 4.3: MVC

MVC Refers to Model, View, Controller- the logical parts of our web application. We are going to use this logical model of the different parts of a web application to split up our code into different files.

### View

We already have a view. This is the views folder, and encompasses all the ejs files we have.

One specific principle of MVC is the distinction between _application logic_ and _view logic_. Do you need a loop,. conditional or function that simply transforms your data into a new format? This is _view logic_. For example: Making the title of a post upper case. Shortening a post down so it fits in a table. Transforming a database boolean value \(TRUE, FALSE\) into something user-readable- e.g., a heart icon, if the post is liked or not.

### Model

We will be using Sequelize as the heart of our model architecture. You don't need Sequelize or any library \(or even a SQL database\) to architect your app to have models. Models are the part of the app that's responsible for getting data from a data source.

Depending on the opinion of the architect, more or less logic can be placed in the model. See more about that [here](https://stackoverflow.com/questions/14044681/fat-models-and-skinny-controllers-sounds-like-creating-god-models). We will have models that only contain our Sequelize definitions.

### Controllers

Controllers are responsible for handling the request and response. If the app needs to respond with a 404 that logic goes in the controller.

In our app everything left from our refactor that is not a model will go in the controller.

### Routes

We will have one more piece of our architecture. A separate file that only lists the URL path matching and HTTP methods \(i.e., `app.get`s and `app.post`s\).

## App Setup

## Models

Let's setup our models:

```text
npm init
```

```text
npm install pg sequelize
npm install --save-dev sequelize-cli
```

Create the empty folders:

```text
mkdir config migrations models seeders
```

Create a config file:

#### config/config.js

```javascript
module.exports = {
  development: {
    username: '<YOUR_USER_NAME>',
    password: null,
    database: 'grocerymvc_development',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
```

## Create the database:

```text
npx sequelize-cli db:create
```

## Create the item table:

```text
npx sequelize-cli migration:generate --name create-item-table
```

Delete the entire contents of the file and write the table creation code:

#### &lt;GENERATED\_DATE&gt;-create-item-table.js

```javascript
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id"
        }
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Items');
  },
};
```

### Create the table

```text
npx sequelize-cli db:migrate
```

Check it in psql:

```text
psql -d grocerymvc_development
```

## Create the model file:

#### models/item.mjs

```javascript
export default function itemModel(sequelize, DataTypes) {
  return sequelize.define('Item', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
}
```

#### models/index.mjs

```javascript
import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import itemModel from './item.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Item = itemModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
```

## Seed

```text
npx sequelize-cli seed:generate --name fake-data
```

#### &lt;GENERATED\_DATE&gt;-fake-data.js

```javascript
module.exports = {
  up: async (queryInterface) => {

    const itemsList = [
      {
        name: 'doritos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mangoes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pork shoulder',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    queryInterface.bulkInsert("Items", itemsList);

  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Items", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
```

Run the migration

```javascript
npx sequelize-cli db:seed:all
```

## Express.js

Install Express.js and all the standard libraries:

```text
npm install express ejs method-override cookie-parser
```

Create the standard Express.js app directories:

```text
mkdir views public
```

Standard Express.js index.js setup:

#### index.js

```javascript
import express from 'express';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';

const app = express();

app.use(cookieParser());

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use(methodOverride('_method'));

const PORT = process.env.PORT || 3004;

app.listen(PORT);
```

## Routes

We are going to have a separate file in our app that is only for URL path matching functions. There are methods to split these up between files, but since route matching happens in the order they are set in `app`, it's convenient to have them all in one file.

Since this is the file we'll be setting the callbacks, we will start dealing with the database in this file. The `db` instance, containing the connection pool, will be passed around so that every route has access to the database.

Note the `getAll` key of `ItemsController` that we'll be creating in the controller file below.

#### routes.mjs

```javascript
import db from './models/index.mjs';
import items from './controllers/items.mjs'

export default function routes( app ){

  // pass in the db for all items callbacks
  const ItemsController = items(db);

  app.get('/items', ItemsController.getAll);
}
```

## Controllers

We will write the matching method calls in the `routes` file, but the callbacks themselves we'll put in the controller file.

We export a whole function \(`items`\), rather than each route callback separately so that we pass `db` to all the routes at once.

#### controllers/items.mjs

```javascript
// db is an argument to this function so
// that we can make db queries inside
export default function items(db){

  const getAll = (request, response) => {

    db.Item.findAll()
    .then((items) => {
      response.render('items/all',{items});
    })
    .catch((error) => console.log(error));
  };

  // return all functions we define in an object
  // refer to the routes file above to see this used
  return {
    getAll
  };
}
```

#### Controller template

This example assumes you need to display a list of things.

#### controllers/&lt;NAME\_PLURAL\_LOWERCASE&gt;.mjs

```javascript
export default function <NAME_PLURAL_LOWERCASE>(db){

  // route to render a list of all the <NAME>
  const getAll = (request, response) => {

    db.<NAME>.findAll()
    .then((<NAME_PLURAL_LOWERCASE>) => {
      response.render('<NAME_PLURAL_LOWERCASE>/all',{<NAME_PLURAL_LOWERCASE>});
    })
    .catch((error) => console.log(error));
  };

  return {
    getAll
  };
}
```

## Views

```text
mkdir items
```

Create one directory for each controller. Name it after the controller.

#### views/items/all.ejs

```javascript
<% items.forEach( item => { %>
  <p>
    <%= item.id %> : <%= item.name %>
  </p>
<% }) %>
```

