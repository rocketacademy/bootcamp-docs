# Project 3: Full-Stack Game

## Introduction

This app is a continuation of [Project 2: Server Side App](project-2-server-side-app.md). We are spreading the logic and computation across 2 computers, the server computer and the user's computer. The underlying mechanic of request and response happening across the network is still the same.

You will implement a card game or turn based card-type game. The user or users will be identified by the system and be able to play a game where the server remembers something about the user and the game cannot be cheated by opening the browser dev tools.

## Requirements

1. Features
   1. Single or multi player is ok
   2. The gameplay should happen on a single HTML page
   3. Interactivity using client-side JS
   4. Users cannot cheat by looking in the browser console
   5. Some game state must be saved in the database server-side
   6. User login \(full-stack or server-side\)
2. Technologies
   1. Use CSS
   2. Use Express.js
   3. Use Webpack

The game you implement does not have to have a score or winners. It must be completely playable for the stated rules. i.e., if a rule of the game is stated, the game must implement it.

If you choose to implement a card game with a known set of rules, you as the game implementer can state a lesser set of rules if you want.

Note that you can choose to implement user authentication completely in AJAX requests, or you can choose to implement user authentication as in Project 2, where the user is restricted from visiting the game page.

Your app must be complete in the sense that it cannot rely on the theoretical existence of another system, e.g. an API that doesn't exist. You are free to use any 3rd-party APIs available on the internet, e.g. NPM libraries.

## Starter Code

Consider starting with this starter repo: [https://github.com/rocketacademy/webpack-mvc-base-bootcamp](https://github.com/rocketacademy/webpack-mvc-base-bootcamp). Don't fork the repo because we may be using it for multiple projects and exercises. You can copy the code to a new repo, or clone it and remove the `.git` directory to create a new repo.

## App Ideas

### General Ideas

Here is a list of card games: [https://bicyclecards.com/rules/](https://bicyclecards.com/rules/)

Also acceptable are turn based board type games such as Battleship or Connect Four.

Avoid any ideas the depend on timing between players or if another player must be immediately notified of some game state.

## Project Timeline

### Summary

| Course Day | Deliverable | Instructor Feedback |
| :--- | :--- | :--- |
| CD11.1 | Ideation Phase 1. Introduce project, post project ideas in Slack for feedback |  |
| CD11.2 | Deadline to post project ideas in Slack |  |
| CD11.3 | Ideation Phase 2. Create planning docs: user stories, wireframes, and DB ERD. Finalise project idea and share planning docs in GitHub repo over Slack.  | Instructor to review planning docs over Slack and over Zoom if necessary. |
| CD12.2 | MVP deadline. Users should be able to perform the primary user story. Please deploy your app to Heroku. Students to review code in pairs during class. | Instructor to review code in PR on GitHub. |
| CD12.5 | Feature freeze. No more developing new app functionality. Use remaining time to focus on polish, i.e. fixing UX/UI, refactoring code. | Quick project review in class to discuss improvements post-feature freeze. |
| CD13.2 | Project presentations. | 30-minute post-mortem with instructor. Instructor to review code in PR on GitHub. |

### Ideation Phase 1

Brainstorm game ideas.

### Ideation Phase 2

Plan the game implementation. Create planning docs: User stories, wireframes, and database ERD. Save these planning docs in a project GitHub repo and share it in Slack. Instructors will review these planning documents with you before you begin implementation.

### Recommended Order of Implementation

Implement the core game functionality first. What is the core mechanic of the game that makes it playable? Make sure they are able to accomplish that, before adding nice-to-have features.

### MVP Deadline

A user should be able to play the game through once without encountering errors. App should be deployed to Heroku. Peer code review during class.

### Feature Freeze

The app and all its features should run without errors. Brief demo in class to demonstrate user experience and clarify work to do before presentations. Latest app should be deployed.

### Project Presentations

Presentations mark the final day of the project and will cover the following.

1. App demo
2. App development strategy
3. Biggest challenges faced
4. What we might do differently next time

### Post-Mortem Meeting

Please answer the [project post-mortem questions](../course-logistics/course-methodology.md#project-post-mortem-meeting) before the post-mortem meeting with your instructor. These questions will be similar to the presentation questions, but we will dig deeper into your code.

## Video Demo

Congrats on a job well done! You'll now create a short video to help showcase your hard work.

### Requirements

Demo your app in a 2-3 minute video. First and foremost this video should explain what your app does and a demonstration of how a user would actually use the app. As you are demonstrating the app you should be explaining features of the app in the context of what the user wants to accomplish and why they want to accomplish it. The video _**should not go into any technical details**_ that would be incomprehensible to someone non-technical.

For example, when talking about an Express app, when demoing the app, don't talk about how when the button gets clicked that it creates an HTTP POST request, rather, speak about the process of the user selecting an item they want to buy and ordering it.

### Focus On What You Did, Not What You Didn't Do

When speaking it is a common impulse to downplay what the app does. This includes statements like: "This is just a simple app". "I didn't complete this". "I didn't have time to....", "This doesn't work well/is not designed well, but..."

If you catch yourself saying any of these phrases in the video, stop and re-record it. Remember that this video is to demonstrate what the app does do, not to talk about what it doesn't do.

### How to record the video

Use Zoom to record the video locally on your computer. It will record you and your face in the upper right corner. When you are done with the video make it available in the following ways.

1. Upload it to YouTube. Embed the video in your project README.md file.
2. Put the video file in your project repo, commit the file and push it to GitHub.

