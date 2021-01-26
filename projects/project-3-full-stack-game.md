# Project 3: Full-Stack Game

## Introduction

This app is a continuation of [Project 2: Server Side App](project-2-server-side-app.md). We are spreading the logic and computation across 2 computers, the server computer and the user's computer. The underlying mechanic of request and response happening across the network is still the same.

You will implement a card game or turn based card-type game. The user or users will be identified by the system and be able to play a game where the server remembers something about the user and the game cannot be cheated by opening the dev tools.

## Requirements

Requirements:

* User login \(full stack or server side\)
* Users cannot cheat by looking in the dev console
* Single or many players
* Interactivity using browser-side JS
* The game _play_ cannot be over more than one page
* Use CSS
* Use Express.js
* Some game state must be permanently saved on the database

The game you implement does not have to have a score or winners. It must be completely playable for the stated rules. i.e., if a rule of the game is stated, the game must implement it.

If you choose to implement a card game with a known set of rules, you as the game implementer can state a lesser set of rules if you want. 

Your app must be complete in the sense that it cannot rely on the theoretical existence of another system, e.g. an API that doesn't exist. You are free to use any 3rd-party APIs available on the internet, e.g. NPM libraries.

Begin with this starter repo: [https://github.com/rocketacademy/webpack-mvc-base-swe1](https://github.com/rocketacademy/webpack-mvc-base-swe1)  
  
Note: don't fork the repo- you can copy the code to a new repo, or clone it and get rid of the .git directory to begin a new repo.

{% hint style="warning" %}
Note that you can choose to implement user authentication completely in AJAX requests, or you can choose to implement user authentication as in project 2, where the user is restricted from visiting the game page.
{% endhint %}

## App Ideas

### General Ideas

Here is a list of card games: [https://bicyclecards.com/rules/](https://bicyclecards.com/rules/)

Also acceptable are turn based board type games such as battleship or connect four.

Avoid any ideas the depend on timing between players or if another player must be immediately notified of some game state.

## Project Timeline

### Summary

| Course Day | Deliverable |
| :--- | :--- |
| W11D2 | Ideation Phase 1. Introduce Project 2, post project ideas in Slack for feedback |
| W11D3 | Deadline to post project ideas in Slack |
| W11D3 | Ideation Phase 2. Create planning docs: DB ERD, and wireframes |
| W11D3 | Finalise project idea and share planning docs in GitHub repo over Slack. 30-minute planning docs review with instructor. |
| W12D2 | Finish core functionality. Users should be able to perform the primary user story. Please deploy your app to Heroku before feature freeze. 30-minute mid-point check-in with instructor. |
| W12D4 | Feature freeze. No more developing new app functionality. Use remaining time to focus on polish, i.e. fixing UI/UX, refactoring code. 15-minute review with instructor. |
| W13D1 | Project presentations. 60-minute post-mortem with instructor. |

### Ideation Phase 1

Brainstorm game ideas.

### Ideation Phase 2

Plan the game implementation. Create planning docs: database ERD, and wireframes. Save these planning docs in a project GitHub repo and share it in Slack. Instructors will review these planning documents with you before you begin implementation.

### Recommended Order of Implementation

Implement the core game functionality first. What is the core mechanic of the game that makes it playable? Make sure they are able to accomplish that, before adding nice-to-have features.

### Core Functionality

The core game play should be done. A user should be able to play the game through once without encountering errors.

### Feature Freeze

Plan your app around having the app and all it's features running without errors. All CSS that the game depends on should be done. You app must be deployed.

### Post-Mortem Meeting

Please answer [these questions](../course-logistics/course-methodology.md#instructor-code-review) before the post-mortem meeting with your instructor.

