# Project 2: Server-Side App

## Introduction

This app is a culmination of everything we've learned about server-side web applications. It is an open-ended project, meaning you will build something based on your unique needs.

As much as possible, create milestones so you know whether you are on track, and to prioritise features when you are short on time. We expect half or more of our time to be spent on polish after finishing our apps' core functionalities. We encourage refactoring or rewriting some or most of the app for clear communication. Treat this as a portfolio project that you would show to prospective employers.

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

## App Ideas

In [Module 3](../3-back-end-application/3.0-module-3-overview.md) we covered general mechanics of web applications that store, update, and retrieve data using HTTP and HTML. These mechanics are part of virtually every app on the internet.

* Google stores websites and users retrieve those websites
* Uber stores drivers and their availability and users retrieve available drivers nearby
* Telegram stores messages between users and users retrieve and create those messages
* EBay stores auction data and users retrieve products for auction

While we may not yet have the power to index websites like Google, we know enough to build prototypes of similar applications. The role of a web application is not just to make GET and POST requests, but to store and retrieve data related to its core functionality, e.g. search, ride sharing, messaging, auctions.

Your app idea is more compelling if its purpose is for something specific and realistic. The best case is if it's actually something you yourself would use. Consider Module 3 PCE and ICE exercises as inspiration.

## Project Timeline

### Summary

| Day of Week | Course Day | Deliverable |
| :--- | :--- | :--- |
| Mon | W6D1 | \[Ideation Phase 1\] Introduce Project 2, post project ideas in Slack for feedback |
| Fri | W6D5 | Deadline to post project ideas in Slack |
| Mon | W7D1 | \[Ideation Phase 2\] Create planning docs: user-flow diagram, DB ERD, and wireframes |
| Tue | W7D2 | \[Start Implementation\] Deadline to finalise project idea and share planning docs in GitHub repo over Slack. Review planning docs with instructor. |
| Fri | W7D5 | Core functionality complete |
| Wed | W8D3 | Polish complete |
| Fri | W8D5 | Project Presentations |

### Ideation Phase 1

Brainstorm app ideas. What problem does the app solve, for whom? How does the app solve the problem? What data does the app handle?

### Ideation Phase 2

Plan the app implementation. Create planning docs: a [user-flow diagram](https://careerfoundry.com/en/blog/ux-design/what-are-user-flows/), database ERD, and wireframes. Save these planning docs in a project GitHub repo and share it in Slack. Instructors will review these planning documents with you before you begin implementation.

### Recommended Order of Implementation

1. CRUD functionality
2. Login functionality
3. Any stretch functionality, e.g. AI APIs or file uploading

## Additional Notes

### Separating Logic and UI Concerns

In general, our Express middleware should handle all business logic, for example determining whether a user is authenticated, or querying the DB, making calculations for any data that should be rendered. Our EJS templates should be focused on the UI, i.e. displaying the data passed to it.

### Frontend Limitations

Given the relative restrictions of a server-side app that renders HTML pages \(as compared to a modern full-stack app that we will learn in [Module 4](../4-full-stack-application/4.0-module-4-overview.md)\), there are certain ideas that will be more easily accomplished when we include more modern technologies such as the following. No worries if you don't have these for now.

* Date or date-time input fields for scheduling or calendars.
* User location using maps.
* Anything involving a [typeahead UI](https://dribbble.com/tags/typeahead).
* Anything where the user might have to drag or draw something.

