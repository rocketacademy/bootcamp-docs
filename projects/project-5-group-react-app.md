# Project 5: Group React App

## Introduction

Build a full-stack app in a team setting.

This project will incorporate group work into building a complete full-stack React app.

The required technologies are not any different from the previous project, although it is heavily recommended to implement a reduce/context store for the data in the React app.

The backend should be derived the same standard Express MVC app: [https://github.com/rocketacademy/base-mvc-bootcamp](https://github.com/rocketacademy/base-mvc-bootcamp)

Remember that you need to add CORS to this repo.

## Requirements

The app must fulfill the following requirements.

* Use React
* Use AJAX to get and set data from the server
* At least 1 full set of CRUD routes \(create, retrieve, update, delete\)
* At least 2 SQL tables
* At least 1 one-to-many and 1 many-to-many SQL relationship
* Use CSS

The app must be complete in the sense that it cannot rely on the theoretical existence of another system, e.g. an API that doesn't exist. Any 3rd-party APIs available on the internet can be used, e.g. NPM libraries.

Any seed data your app would need to run needs to be included in the repo. The final version of the app must be populated with data that looks at least semi-realistic. For example, a social media app would have more than 1 post, 1 comment and 1 like in the system.

## Project Timeline

### Summary

<table>
  <thead>
    <tr>
      <th style="text-align:left">Course Day</th>
      <th style="text-align:left">Deliverable</th>
      <th style="text-align:left">Instructor Feedback</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">CD17.3</td>
      <td style="text-align:left"><b>Start: Ideation Phase 1.</b> Introduce project, post project ideas in
        Slack for feedback</td>
      <td style="text-align:left">Instructor to share feedback on project ideas in Slack.</td>
    </tr>
    <tr>
      <td style="text-align:left">CD18.1</td>
      <td style="text-align:left"><b>Start: Ideation Phase 2.     </b>Create planning docs: user stories,
        wireframes, and DB ERD.</td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">CD18.4</td>
      <td style="text-align:left"><b>Due: Ideation Phase 2.</b> Finalise project idea and share planning
        docs in GitHub repo over Slack.</td>
      <td style="text-align:left">Instructor to review planning docs over Slack and over Zoom if necessary.</td>
    </tr>
    <tr>
      <td style="text-align:left">CD18.4</td>
      <td style="text-align:left"><b>Due: Peer Planning Review.</b>
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">CD18.4</td>
      <td style="text-align:left"><b>Start: Project Start.</b>
      </td>
      <td style="text-align:left">Begin Project Implementation.</td>
    </tr>
    <tr>
      <td style="text-align:left">CD19.3</td>
      <td style="text-align:left">
        <p><b>Due: MVP deadline.</b> 
        </p>
        <p>Users should be able to perform the primary user story. Please deploy
          your app to Heroku. Students to review code in pairs during class.</p>
      </td>
      <td style="text-align:left">Instructor to review code on GitHub, share feedback in Slack and Zoom
        if necessary.</td>
    </tr>
    <tr>
      <td style="text-align:left">CD20.1</td>
      <td style="text-align:left">
        <p><b>Due: Feature freeze.</b> 
        </p>
        <p>No more developing new app functionality. Use remaining time to focus
          on polish, i.e. fixing UX/UI, refactoring code.</p>
      </td>
      <td style="text-align:left">Quick project review in class to discuss improvements post-feature freeze.</td>
    </tr>
    <tr>
      <td style="text-align:left">CD20.3</td>
      <td style="text-align:left"><b>Due: Project presentations.</b>
      </td>
      <td style="text-align:left">30-minute post-mortem with instructor. Instructor to review code in PR
        on GitHub.</td>
    </tr>
    <tr>
      <td style="text-align:left">CD20.4</td>
      <td style="text-align:left"><b>Project Peer Review Exercise.</b>
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">CD20.5</td>
      <td style="text-align:left"><b>Due: Video demo.</b>
      </td>
      <td style="text-align:left"></td>
    </tr>
  </tbody>
</table>

### Recommended Order of Implementation

Implement the core user story first. What are users coming to your app to do? Make sure they are able to accomplish that, before adding authentication and nice-to-have features.

1. CRUD functionality
2. Login functionality
3. Any stretch functionality, e.g. AI APIs or file uploading

## Ideation Phase 1

Brainstorm app ideas. What problem does the app solve, for whom? How does the app solve the problem? What data does the app handle?

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

Presentations should cover the [topics in this list](../course-logistics/course-methodology.md#project-presentations).

## Post-Mortem Meeting

Please answer the [project post-mortem questions](../course-logistics/course-methodology.md#project-post-mortem-meeting) before the post-mortem meeting with your instructor. These questions will be similar to the presentation questions, but we will dig deeper into your code.

## Video Demo

Please follow [video demo guidelines here](../course-logistics/course-methodology.md#project-videos).

