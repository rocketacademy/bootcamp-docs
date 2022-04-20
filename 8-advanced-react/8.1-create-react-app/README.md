# 8.1: Create React App

[Create React App](https://create-react-app.dev) (CRA) is the officially supported demo / pre-setup React app architecture.

While CRA helps us set up a fully working React frontend "out of the box", the intention of the curriculum till now is to understand what is "under the hood" before we use CRA to build apps.&#x20;

While CRA give us is quick and "officially supported", we will require a separate back-end repository to run our server-side functionalities. Hence, we will have to deploy 2 separate repos: (1) the [express MVC server repo](https://github.com/rocketacademy/base-mvc-bootcamp) and (2) the Create React App repo. These will be connected via AJAX requests made by the React app to the Express.js server.

To clarify, we will need to architecture the CRA server and the express server on different domains. If they were on the same domain, another piece of architecture would be built that determines how to route requests to one or the other. However, we will only be dealing with examples that use 2 completely different domains.

Consider this application of the above statements: You will be running two localhost servers, one for each repo (i.e. localhost:3000 for React and localhost:3004 for Express.js). Therein, the React app will make axios calls to localhost:3004/home, for example.

![](<../../.gitbook/assets/CRA - arch 2.jpg>)

1. The React app is deployed. The Webpack build process is triggered. The resulting production files are put into the `/dist` directory.
2. Some time later a user requests for the website with the react app on it. (`rocketacademy.com`)
3. The Create React App file server serves the HTML file and the React app JavaScript to the browser. The React app is initialized in the browser.
4. Some time later a user action causes an AJAX request to be created inside the React app. (`api.rocket-a.com`)
5. The request is received at the Express.js server. The app looks in the database and sends back a JSON response.
6. The JSON data is received and processed by the React app. React manipulates the DOM to show that data on screen.

## Setup

Using [Create React App](https://create-react-app.dev/docs/getting-started#creating-an-app) (CRA) is easy. Here is an example of using Create React App without any back-end database.

Run the create-react-app command and give a name to the react app.

```
npx create-react-app <APP_NAME>
```

Create React App creates a folder and all the boilerplate files. It also runs `npm install` for all the default dependencies. This includes Webpack and the necessary configuration for it to run with the app!

![](<../../.gitbook/assets/Screen Shot 2021-02-08 at 1.21.23 AM.png>)

Some small changes have been made to the React app in the above picture, like `App.jsx` is renamed to `App.js`. There are also testing files that are added by default though we will not be using during the course. Otherwise, the files structure is the same.

`cd` into the app folder and start the Webpack dev server using `npm start`.

```
cd <APP_NAME>
npm start
```

Webpack will compile the files and start watching the app for changes. Anything that changes will be hot-reloaded.

Go to the app: [http://localhost:3000](http://localhost:3000)

See more about Create React App at [the official website.](https://create-react-app.dev)
