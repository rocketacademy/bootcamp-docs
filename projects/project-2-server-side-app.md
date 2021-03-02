# Project 2: Server-Side App

## Introduction

This app is a culmination of everything we've learned about server-side web applications. It is an open-ended project, meaning you will build something based on your unique needs.

As much as possible, create milestones so you know whether you are on track, and to prioritise features when you are short on time. We expect half or more of our time to be spent on polish after finishing our apps' core functionalities. We encourage refactoring or rewriting some or most of the app for clear communication. Treat this as a portfolio project that you would show to prospective employers.

## Requirements

Your app must have the following requirements.

- Render HTML
- Use CSS
- Serve webpages with Express.js and EJS
- At least 1 full set of CRUD routes \(create, retrieve, update, delete\)
- At least 3 SQL tables
- At least 1 one-to-many and 1 many-to-many SQL relationship
- Username and password login
- Session authentication for login-only pages

Your app must be complete in the sense that it cannot rely on the theoretical existence of another system, e.g. an API that doesn't exist. You are free to use any 3rd-party APIs available on the internet, e.g. NPM libraries.

You are responsible for any seed data your app would need to run. The final version of your app must be populated with data that looks at least semi-realistic. For example, a social media app would have more than 1 post, 1 comment and 1 like in the system.

## App Ideas

### General Ideas

In [Module 3](../3-backend-application/3.0-module-3-overview.md) we covered general mechanics of web applications that store, update, and retrieve data using HTTP and HTML. These mechanics are part of virtually every app on the internet.

- Google stores websites and users retrieve those websites
- Uber stores drivers and their availability and users retrieve available drivers nearby
- Telegram stores messages between users and users retrieve and create those messages
- EBay stores auction data and users retrieve products for auction

While we may not yet have the power to index websites like Google, we know enough to build prototypes of similar applications. The role of a web application is not just to make GET and POST requests, but to store and retrieve data related to its core functionality, e.g. search, ride sharing, messaging, auctions.

Your app idea is more compelling if its purpose is for something specific and realistic. The best case is if it's actually something you yourself would use. Consider Module 3 PCE and ICE exercises as inspiration.

### Frontend Limitations

Given the relative restrictions of a server-side app that renders HTML pages, there are certain ideas that will be more easily accomplished when we include more modern technologies. In later Coding Bootcamp modules we will learn how to incorporate 3rd-party JS libraries into our frontends to accomplish some of the following. No worries if you don't have these for now.

- Date or date-time input fields for scheduling or calendars.
- User location using maps.
- Anything involving a [typeahead UI](https://dribbble.com/tags/typeahead).
- Anything where the user might have to drag or draw something.

### File Uploading

If your app idea involves file uploading, [3.5.11: File Uploads](../3-backend-application/3.5-sql-applications/3.5.11-file-uploads.md) is a primer on how to accomplish this using the technologies we have learned so far.

### 3rd-Party APIs

The following are some ideas for 3rd-party APIs that we can use in our apps.

- [Google Vision API](https://www.npmjs.com/package/@google-cloud/vision)
- [Data.gov.sg APIs](https://data.gov.sg/)

### Repo

Create your own repo from scratch. Do not clone from any other repo. \(You can use any starter code that you want, though\).

## Project Timeline

### Summary

| Day of Week | Course Day | Deliverable                                                                                                                                                                                                                          |
| :---------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mon         | W6D1       | Ideation Phase 1. Introduce Project 2, post project ideas in Slack for feedback                                                                                                                                                      |
| Fri         | W6D5       | Deadline to post project ideas in Slack                                                                                                                                                                                              |
| Mon         | W7D1       | Ideation Phase 2. Create planning docs: user-flow diagram, DB ERD, and wireframes                                                                                                                                                    |
| Tue         | W7D2       | Finalise project idea and share planning docs in GitHub repo over Slack. 30-minute planning docs review with instructor.                                                                                                             |
| Mon         | W8D1       | Finish core functionality. Users should be able to perform the primary user story. Please deploy your app to AWS before feature freeze on Thursday. 30-minute mid-point check-in with instructor.                                    |
| Thu         | W8D4       | Feature freeze. No more developing new app functionality. Use remaining time to focus on polish, i.e. fixing UI/UX, refactoring code. 30-minute review with instructor. Instructor to complete code review for feedback by Thursday. |
| Mon         | W9D1       | Project presentations. 60-minute post-mortem with instructor.                                                                                                                                                                        |
| Tue         | W9D2       | Start Project-2-based technical blog post.                                                                                                                                                                                           |
| Mon         | W10D1      | Blog post due.                                                                                                                                                                                                                       |

### Ideation Phase 1

Brainstorm app ideas. What problem does the app solve, for whom? How does the app solve the problem? What data does the app handle?

### Ideation Phase 2

Plan the app implementation. Create planning docs: a [user-flow diagram](https://careerfoundry.com/en/blog/ux-design/what-are-user-flows/), database ERD, and wireframes. Save these planning docs in a project GitHub repo and share it in Slack. Instructors will review these planning documents with you before you begin implementation.

### Recommended Order of Implementation

Implement the core user story first. What are users coming to your app to do? Make sure they are able to accomplish that, before adding authentication and nice-to-have features.

1. CRUD functionality
2. Login functionality
3. Any stretch functionality, e.g. AI APIs or file uploading

### Refactoring

We will be learning more ways to decompose our Express apps into logical files and folders in Module 4. For Project 2, feel free to decompose and organise functions within index.js.

### Post-Mortem Meeting

Please answer [these questions](../course-logistics/course-methodology.md#instructor-code-review) before the post-mortem meeting with your instructor.

## Video Demo

Demo your app in a 2-3 minute video. First and foremost this video should explain what your app does and a demonstration of how a user would actually use the app. As you are demonstrating the app you should be explaining features of the app in the context of what the user wants to accomplish and why they want to accomplish it. The video should not go into any technical details that would be incomprehensible to someone non-technical.

For example, when talking about an express app, when demoing the app, don't talk about how when the button gets clicked that it creates an HTTP POST request, rather, speak about the process of the user selecting an item they want to buy and ordering it.

#### Phrases to avoid

When speaking it is a common impulse to downplay what the app does. This includes statement like: "This is just a simple app". "I didn't complete this". "I didn't have time to....", "This doesn't work well/is not designed well, but...."

If you catch yourself saying any of these phrases in the video, stop and re-record it. Remember that this video is to demonstrate what the app does do, not to talk about what it doesn't do.

#### How to Record the video

Use zoom to record the video locally on your computer. It will record you and your face in the upper right corner. When you are done with the video make it available in the following ways:

- Upload it to YouTube. Embed the video in your project README.md file.
- Put the video file in your project repo and commit the file.

### Separating Logic and UI Concerns

In general, our Express middleware should handle all business logic, for example determining whether a user is authenticated, or querying the DB, making calculations for any data that should be rendered. Our EJS templates should be focused on the UI, i.e. displaying the data passed to it.
