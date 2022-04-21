# Project 4: Full-Stack React App

## Introduction

This app is a culmination of everything we've learned about React, plus server-side web applications. It is an open-ended project, meaning you will build something based on your unique needs.

As much as possible, create milestones so you know whether you are on track, and to prioritise features when you are short on time. We expect half or more of our time to be spent on polish after finishing our apps' core functionalities. We encourage refactoring or rewriting some or most of the app for clear communication. Treat this as a portfolio project that you would show to prospective employers.

## Setup

Don't fork this repo, but you might find it helpful to copy this base starter code into your own project to get started: [https://github.com/rocketacademy/react-express-base-bootcamp](https://github.com/rocketacademy/react-express-base-bootcamp)

## Requirements

Your app must fulfil the following requirements.

* Use React
* Use AJAX to get and set data from the server
* At least 1 full set of CRUD routes (create, retrieve, update, delete)
* At least 2 SQL tables
* At least 1 one-to-many and 1 many-to-many SQL relationship
* Use CSS

Your app must be complete in the sense that it cannot rely on the theoretical existence of another system, e.g. an API that doesn't exist. You are free to use any 3rd-party APIs available on the internet, e.g. NPM libraries.

You are responsible for any seed data your app would need to run. The final version of your app must be populated with data that looks at least semi-realistic. For example, a social media app would have more than 1 post, 1 comment and 1 like in the system.

## App Ideas

### General Ideas

Since the focus of this project is on React, try not to create a database that is too complex or has too many complicated relationships. This will simply make it more complex to send and fetch data from the server.

## Project Timeline

### Summary

| Project Day | Deliverable                                                                                                                                                                                                                               | Instructor Feedback                                                                                                        |
| :---------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
|      0      | **Start: Ideation Phase 1.** Introduce project, post project ideas in Slack for feedback.                                                                                                                                                 | Instructor to share feedback on project ideas in Slack.                                                                    |
|      1      | **Start: Ideation Phase 2.** Create planning docs: user stories, wireframes, and DB ERD.                                                                                                                                                  | -                                                                                                                          |
|      2      | <p><strong>Due: Ideation Phase 2.</strong> Finalise project idea and share planning docs in GitHub repo over Slack.<br><br><strong>Due: Peer Planning Review.</strong><br><strong></strong><br><strong>Start: Project Start.</strong></p> | <p>Instructor to review planning docs over Slack and Zoom if necessary.<br><br>Begin Project Implementation.</p>           |
|      3      | **-**                                                                                                                                                                                                                                     | -                                                                                                                          |
|      4      | **-**                                                                                                                                                                                                                                     | -                                                                                                                          |
|      5      | <p><strong>Due: MVP deadline.</strong></p><p>Users should be able to perform the primary user story. Please deploy your app to Heroku. Students to review code in pairs during class.</p>                                                 | Instructor to review code on GitHub, share feedback in Slack and Zoom if necessary.                                        |
|      6      | -                                                                                                                                                                                                                                         | -                                                                                                                          |
|      7      | -                                                                                                                                                                                                                                         | -                                                                                                                          |
|      8      | <p><strong>Due: Feature freeze.</strong></p><p>No more developing new app functionality. Use remaining time to focus on polish, i.e. fixing UI/UX, refactoring code.</p>                                                                  | Quick project review in class to discuss improvements post-feature freeze.                                                 |
|      9      | **Due: Project presentations.**                                                                                                                                                                                                           | 30-minute post-mortem with instructor. Instructor to review code on GitHub, share feedback in Slack and Zoom if necessary. |
|      10     | **Project Peer Review exercise.**                                                                                                                                                                                                         | -                                                                                                                          |
|      11     | **Video demo due.**                                                                                                                                                                                                                       | -                                                                                                                          |

### Recommended Order of Implementation

Implement the core user story first. What are users coming to your app to do? Make sure they are able to accomplish that, before adding authentication and nice-to-have features.

1. CRUD functionality
2. Login functionality
3. Any stretch functionality, e.g. AI APIs or file uploading

## Ideation Phase 1

Brainstorm app ideas. What problem does the app solve, for whom? How does the app solve the problem? What data does the app handle? Feel free to use [Rocket's project planning template](https://docs.google.com/document/d/1klyi92bVHUKjxgD\_Saou\_u6yoEZFbzkvbttj2izh8xg/edit?usp=sharing), and share your ideas with your SL in Slack to get feedback.

## Ideation Phase 2

Plan the app implementation with the following planning docs.

1. [User-flow diagram](https://careerfoundry.com/en/blog/ux-design/what-are-user-flows/)
2. Wireframes of minimal UIs that enable our user flows
3. Database ERD to support our user flows and wireframes.

Save these planning docs in a project GitHub repo and share it in Slack. Instructors will review these planning documents with you before you begin implementation.

## MVP Deadline

A user should be able to play the game through once without encountering errors. App should be deployed to Heroku. Peer code review during class.

## Feature Freeze

The app and all its features should run without errors. Brief demo in class to demonstrate user experience and clarify work to do before presentations. Latest app should be deployed.

## Project Presentations

Presentations should cover the [topics in this list](../logistics/course-methodology.md#presentations).

## Post-Mortem Meeting

Please answer the [project post-mortem questions](../logistics/course-methodology.md#post-mortem) before the post-mortem meeting with your instructor. These questions will be similar to the presentation questions, but we will dig deeper into your code.

## Video Demo

Please follow [video demo guidelines here](../logistics/course-methodology.md#demo-video).

## Project Submission and Past Student Projects

Once done with your project, please submit it by adding it to the [Rocket Bootcamp Projects spreadsheet](https://docs.google.com/spreadsheets/d/1YZ39naj5E6mNNkQ1akR\_FgeFO\_kM6aWCAr8zqrFOkt4/edit?usp=sharing) in your batch-specific sheet. Feel free to view past student projects in previous batches' sheets.

## Common Issues

### Multiple Pages that Load React

[Code splitting](https://webpack.js.org/guides/code-splitting/) allows us to have multiple pages that each load separate React bundles. To keep our apps simple, Rocket recommends creating a single page application for Project 4, but if you feel strongly about having multiple pages, each of which load a separate React bundle, feel free to try out code splitting.

### Setting a Path to Public Resources in Webpack Config

If our app contains multiple routes that each load separate resources compiled by Webpack, we will want to specify the [Public Path](https://webpack.js.org/guides/public-path/) attribute in our Webpack config so that the path to those resources can be absolute and not relative to the routes.

For example, for an app with route `/post/:id` that returns an HTML file that loads a Webpack bundle, if we do not specify public path in our Webpack config, that HTML file will look for our compiled Webpack bundle at `mysite.com/post/my.bundle.js` instead of `mysite.com/my.bundle.js`.
