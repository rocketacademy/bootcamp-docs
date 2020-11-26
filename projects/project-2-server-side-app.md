# Project 2: Server-Side App

## Introduction

This app is a culmination of everything we've learned about server-side web applications. It is an open-ended project, meaning you will build something based on your unique needs.

## Requirements

Your app must have the following requirements.

* Render HTML
* Use CSS
* Serve webpages with Express.js and EJS
* At least 1 full set of CRUD routes \(create, retrieve, update, delete\)
* At least 3 SQL tables
* At least 1 one-to-many and 1 many-to-many SQL relationship
* Username and password login
* Session authentication for login-only pages

Your app must be complete in the sense that it cannot rely on the theoretical existence of another system, e.g. an API that doesn't exist. You are free to use any 3rd-party APIs available on the internet, e.g. NPM libraries.

You are responsible for any seed data your app would need to run. The final version of your app must be populated with data that looks at least semi-realistic. For example, a social media app would have more than 1 post, 1 comment and 1 like in the system.

## Project Timeline

| Day of Week | Course Day | Deliverable |
| :--- | :--- | :--- |
| Thu | W6D4 | Introduce Project 2 |
| Fri | W6D5 | Post project ideas in Slack for feedback \(Idea Phase 1\) |
| Mon | W7D1 | Review project idea with instructors, start working on sitemaps, wireframes, and DB ERDs \(Idea Phase 2\) |
| Tue | W7D2 | Finalise project idea with sitemaps, wireframes, and DB ERDs |
| Fri | W7D5 | Core functionality complete |
| Wed | W8D3 | Polish complete |
| Fri | W8D5 | Project Presentations |

After choosing a project idea and reviewing it with instructors, we recommend planning the pages and database schema within your application. Create milestones so you know whether you are on track, and so that if you are short on time, you know what is crucial and what is optional.

We expect half or more of our time to be spent on polish after finishing our apps' core functionalities. We encourage refactoring or rewriting some or most of the app for clear communication. Treat this as a portfolio project that you would show to prospective employers.

### Project Ideation Phase 1

Brainstorm any ideas that you think are feasible. What does that app do? Who is it for? What data does it deal with?

### Project Ideation Phase 2

Begin to think concretely about the implementation of your idea.

We will ask you to present planning ideation phase documents.

**What data does your app hold?**

Write an ERD for the database.

**What actions can the user take?**

Write a [user flow diagram.](https://careerfoundry.com/en/blog/ux-design/what-are-user-flows/)

**How will the functionality be implemented in the UI?**

Draw some wireframes.

## App Ideas

In [Module 3](../3-back-end-application/3.0-module-3-overview.md) we covered general mechanics of web applications that store, update, and retrieve data using HTTP and HTML. These mechanics are part of virtually every app on the internet.

* Google stores websites and users retrieve those websites
* Uber stores drivers and their availability and users retrieve available drivers nearby
* Telegram stores messages between users and users retrieve and create those messages
* EBay stores auction data and users retrieve products for auction

While we may not yet have the power to index websites like Google, we know enough to build prototypes of similar applications. The role of a web application is not just to make GET and POST requests, but to store and retrieve data related to its core functionality, e.g. search, ride sharing, messaging, auctions.

Your app idea is more compelling if its purpose is for something specific and realistic. The best case is if it's actually something you yourself would use. Consider Module 3 PCE and ICE exercises as inspiration.

## Additional Notes

### Separating Logic and UI Concerns

In general, our Express middleware should handle all business logic, for example determining whether a user is authenticated, or querying the DB, making calculations for any data that should be rendered. Our EJS templates should be focused on the UI, i.e. displaying the data passed to it.

### Frontend Limitations

Given the relative restrictions of a server-side app that renders HTML pages \(as compared to a modern full-stack app that we will learn in [Module 4](../4-full-stack-application/4.0-module-4-overview.md)\), there are certain ideas that will be more easily accomplished when we include more modern technologies such as the following. No worries if you don't have these for now.

* Date or date-time input fields for scheduling or calendars.
* User location using maps.
* Anything involving a [typeahead UI](https://dribbble.com/tags/typeahead).
* Anything where the user might have to drag or draw something.

### 

