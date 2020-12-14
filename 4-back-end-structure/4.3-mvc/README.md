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

