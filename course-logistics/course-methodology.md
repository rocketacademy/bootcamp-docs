# Course Methodology

## Exercises and Projects

### Base, Comfortable, and More Comfortable

To accommodate different learning speeds and prior experience, exercises and projects in SWE1 may have different sections to differentiate what must be completed to minimally understand concepts, and what are extra exercises or features to help solidify one's understanding.

#### Base

Everything in the Base section must be completed to minimally understand relevant concepts. When short on time, we can complete the Base section then move onto the next exercise or project.

#### Comfortable

The Comfortable section is for students that are able to complete Base and wish to practise more of the relevant concepts. This will help students solidify their understanding of the concepts and be better prepared for more complex exercises and projects.

#### More Comfortable

The More Comfortable section is for students that wish to push their boundaries and have completed Base and Comfortable sections. Students can complete SWE1 successfully without ever touching More Comfortable, but students that can complete More Comfortable exercises may be more valuable in the job market.

### Exercise / Project Strategies

#### Read full project page before starting

Please read through all sections of exercises and projects before starting. Later parts of exercises and projects may require different code architecture than earlier parts. If we plan on implementing later parts, we may want to design our code in a certain way to avoid lengthy refactoring later.

#### Separate UI logic from business logic

Whenever possible, separate UI logic from business logic. This is to separate concerns and make it easier to debug both UI and business logic by only having to worry about 1 at a time. For example, code to manipulate the DOM can be separated from code that determines rules of a game.

### Recommended Order of Work

On any given day in SWE1, students will have Post-Class Exercises for the current day, Pre-Class Exercises  for the upcoming day, and potentially a multi-day Project. RA recommends that students prioritise the material in the following order.

1. Base section of Post-Class Exercises / Project
2. Pre-Class Exercises
3. Comfortable and More Comfortable sections of Post-Class Exercises / Project

### Project Presentations

After each project we will spend time in class for presentations. Each student will have a chance to present, and presentations should cover the following:

1. Demonstration of how the application works
2. Discussion of the strategy the student took when developing this application
3. Discussion of some of the biggest challenges the student faced when working on the project
4. Discussion of what the student would like to do next if he/she had more time on the project

## Peer Code Review

On days where we have longer post-class exercises or projects due, we will review each others' code in groups of 2-3 during class. If there is a group of 3, the triplet will do individual code review together so that everyone gets to review someone else's code, then split into 2 groups for pairing.

### Step 1: Individual

#### 1\) Clone Partner's Code

You'll be paired up so that you can exchange the links for your repos via Slack. Remember that the forked repo is the one that is under your GitHub account, not Rocket Academy's.

**If you have forked the repo, but you don't have the latest code on GitHub** take a moment now to do a `git push`. Let your partner know you're updating the repo.

Run a `git clone <repo-url> <new-folder-name>` to get a copy of your partner's code.

_Note: You need to rename the folder when you clone if you already have a folder named after the repo where you're making the clone._

#### 2\) Run Partner's Code

Open the code in the browser and test it. What does it do? If you're not sure what it does look inside the `script.js` to see.

#### 3\) Read Partner's Code

Read the code.

* How does it work?
* Does it have any obvious errors?
* Does it implement something that you were trying to do?
* Does it implement a feature that you haven't started yet? How does the code work?

#### 4\) Play with Partner's Code

It may be helpful to make changes to the code to help you understand it better. Write some `console.log` that would help you figure out what the code does. Break the code in a certain way to prove how it works or doesn't work.

#### 5\) Discuss

Once both partners are done with \#1-4, discuss what you saw.

### Step 2: In Pairs

You'll be pair programming on one person's project at a time. The goal is to get working versions for each person. **The driver will be the person who is \*not\* working on their own code.** 

Once done with one person's code, send the code to your pair \(it's their project\) via a [Slack code snippet](https://slack.com/intl/en-sg/slack-tips/share-code-snippets). Switch to work on the other person's code.

_Note: If you are working on your partner's code you can't push to their repo because GitHub repos are read-only to non-owners by default._

If you both have working versions, implement a new feature in one of the projects together.

## Instructor Code Review

After each project an instructor will review your code with you 1-1. Please prepare answers to the following questions before the 1-1.

### Code

1. What part of the project went well, technically? Give at least one link to your repo as an example.
2. What part the project was a struggle, technically? Give at least one link to your repo as an example.

### Process

1. What in the approach and process during this project went well?
2. What in the approach and process during this project did not go well?

### Looking Ahead

1. What technical adjustments would you make for the next project? Why?
2. What would you change in your process and approach in the next project? Why?

