# Course Methodology

## Exercises and Projects

### Base, Comfortable, and More Comfortable

To accommodate different learning speeds and prior experience, exercises and projects in Coding Bootcamp may have different sections to differentiate what must be completed to minimally understand concepts, and what are extra exercises or features to help solidify one's understanding.

#### Base

Everything in the Base section must be completed to minimally understand relevant concepts. When short on time, we can complete the Base section then move onto the next exercise or project.

#### Comfortable

The Comfortable section is for students that are able to complete Base and wish to practise more of the relevant concepts. This will help students solidify their understanding of the concepts and be better prepared for more complex exercises and projects.

#### More Comfortable

The More Comfortable section is for students that wish to push their boundaries and have completed Base and Comfortable sections. Students can complete Coding Bootcamp successfully without ever touching More Comfortable, but students that can complete More Comfortable exercises may be more valuable in the job market.

### Exercise / Project Strategies

#### Read full project page before starting

Please read through all sections of exercises and projects before starting. Later parts of exercises and projects may require different code architecture than earlier parts. If we plan on implementing later parts, we may want to design our code in a certain way to avoid lengthy refactoring later.

#### Separate UI logic from business logic

Whenever possible, separate UI logic from business logic. This is to separate concerns and make it easier to debug both UI and business logic by only having to worry about 1 at a time. For example, code to manipulate the DOM can be separated from code that determines rules of a game.

#### Use a project management tool

Project management tools can be helpful to manage longer-term projects involving multiple people. Even for individual projects they can be useful tools to organise one's thoughts and prioritise development.

[Trello](https://trello.com/) is a popular, simple project management tool that we recommend for Coding Bootcamp, and [here](https://blog.trello.com/how-to-scrum-and-trello-for-teams-at-work)'s a breakdown of how to get started with it.

### Recommended Order of Work

On any given day in Coding Bootcamp, students will have Post-Class Exercises for the current day, Pre-Class Exercises for the upcoming day, and potentially a multi-day Project. RA recommends that students prioritise the material in the following order.

1. Base section of Post-Class Exercises / Project
2. Pre-Class Exercises
3. Comfortable and More Comfortable sections of Post-Class Exercises / Project

### Project Scrums

Professional tech teams typically operate using [Agile Scrum Methodology](https://www.atlassian.com/agile/scrum). We will simulate this during Coding Bootcamp project weeks. Every morning we will take turns to share the following with each other, to make sure we are on-track with our projects and don't get stuck on blockers.

1. What I did yesterday
2. What I plan to do today
3. Anything I am blocked on

### Project Presentations

After each project we will spend time in class for presentations. Each student will have a chance to present, and presentations should cover the following:

1. Demonstration of how the application works
2. Discussion of the strategy the student took when developing this application
3. Discussion of some of the biggest challenges the student faced when working on the project
4. Discussion of what the student would like to do next if he/she had more time on the project

### How to Save Generic Exercise Code to a New GitHub Repo

Sometimes we might want to save pre-class or in-class exercise work to a repo in our own GitHubs, but we completed the exercises on a copy of the [base-node-bootcamp repo](https://github.com/rocketacademy/base-node-bootcamp) that we cannot fork more than once. One of our students Alvin Lim compiled a convenient way to do this.

1. Create a new, empty repo in GitHub
2. In your local copy of `base-node-bootcamp` that you want to now link to your new repo, run the command `git remote set-url origin <NEW_REPO_HTTPS_URL>`, where `<NEW_REPO_HTTPS_URL>` looks something like `https://github.com/<GITHUB_USERNAME>/<REPO_NAME>.git`. This will link your local repo to the new repo, and de-llink it from `base-node-bootcamp`.
3. Run `git remote -v` to verify that our local repo is linked to the new repo in GitHub
4. Commit any desired local changes and run `git push`. This will push the current state of the repo to the `origin` remote, which should be the new repo we created.

## Peer Code Review

On days where we have longer post-class exercises or projects due, we will review each others' code in groups of 2-3 during class. If there is a group of 3, the triplet will do individual code review together so that everyone gets to review someone else's code, then split into 2 groups for pairing.

### Step 1: Individual

1. Clone partner's code
   1. You'll be paired up so that you can exchange the links for your repos via Slack. Remember that the forked repo is the one that is under your GitHub account, not Rocket Academy's.
   2. **If you have forked the repo, but you don't have the latest code on GitHub** take a moment now to do a `git push`. Let your partner know you're updating the repo.
   3. Run `git clone <repo-url> <new-folder-name>` to clone your partner's code. You will need to rename the target folder when you clone if you already have a folder named after the repo.
2. Run partner's code
   1. Open the code in the browser and test it. What does it do? If you're not sure what it does look inside the `script.js` or relevant files to see.
3. Read partner's code
   1. How does it work?
   2. Does it have any obvious errors?
   3. Does it implement something that you were trying to do?
   4. Does it implement a feature that you haven't started yet? How does the code work?
4. Play with partner's code
   1. It may be helpful to make changes to the code to help you understand it better. Write some `console.log` that would help you figure out what the code does. Break the code in a certain way to prove how it works or doesn't work.
5. Discuss
   1. Once both partners are done with \#1-4, discuss what you saw.

### Step 2: In Pairs

1. Pair program on 1 person's project at a time. The goal is to get working versions for each person. **The driver will be the person who is \*not\* working on their own code.**
2. Once done with 1 person's code, send the code to your pair \(it's their project\) via a [Slack code snippet](https://slack.com/intl/en-sg/slack-tips/share-code-snippets). Switch to work on the other person's code. If you are working on your partner's code you can't push to their repo because GitHub repos are read-only to non-owners by default.
3. Once both have working versions, implement a new feature in 1 of the repos together.

## Instructor Code Review

After each project an instructor will review your code with you 1-1. Please prepare answers to the following questions before the 1-1.

### Technical Review

1. What part of the project went well, technically? Give at least one link to your repo as an example.
2. What part the project was a struggle, technically? Give at least one link to your repo as an example.
3. What technical adjustments would you make for the next project? Why?

### Process Review

1. What in the approach and process during this project went well?
2. What in the approach and process during this project did not go well?
3. What would you change in your process and approach in the next project? Why?

