# D.4: Interview Strategies

## Introduction

When solving DS&A problems, there are a few common strategies we can use to perform better.

1. Think out loud
2. Pseudocode first
3. Trace code with simple examples
4. Think of test cases
5. Can we do better?
6. Read and understand solutions

## Think Out Loud

Thinking out load greatly increases one's chances of succeeding in DS&A interviews and we encourage everyone to do it. DS&A interviews are meant to test a person's problem-solving ability, not their ability to regurgitate a solution. Someone who is silent throughout a DS&A interview and pops out a solution at the end may pass the interview, but someone that is silent throughout and fails to produce a solution will always fail. Someone that communicates their thought process throughout the DS&A interview not only is able to earn partial points, they also allow the interviewer to vouch for the candidate's communication skills, and allow the interviewer a chance to provide hints along the way.

## Pseudocode First

Always write pseudocode before code in DS&A problems. One might think that this "extra" step saps time in a short interview, but in reality the pseudocode provides clarity and prevents errors in code writing and more often saves time than not. 

The hardest part of DS&A problems is coming up with the algorithm. When we write pseudocode, it frees us to imagine the algorithm without worrying about code syntax. It is easy to improve our algorithm in pseudocode because we need not worry that code runs. **We should always ask ourselves if we can solve the problem faster during the pseudocode stage, before writing code.** This allows us to find optimal algorithms without writing and rewriting code. Having our algorithm in pseudocode also allows our interviewer to provide valuable feedback on our algorithm early.

1 caveat to this rule is during automated online interviews. While pseudocode is still beneficial to make sure we code efficiently, our pseudocode may not be considered when our interviews are graded, thus we may not want to invest as much time in the "prettiness" of our pseudocode. 

## Trace Code With Simple Examples

More often than not we will develop a flawed solution on our first try. The code may run but it fails our test cases. Instead of guessing where the bugs in our code may be, we must be methodical about testing. 

1 common and foolproof way to find bugs in our code is to trace the code line by line with the simplest examples that our algorithm fails to address. 1 way to do this efficiently is to put `print` statements where we want to read intermediate variable values. We can also do this without running our code by keeping track of variable values on paper or on a whiteboard. At which line in our code does the intermediate value not match our expectations and why?

## Think of Test Cases

We should always think about how our algorithms can fail and proactively develop test cases to test those situations in interviews. More often than not, DS&A interview problems provide incomplete test cases, sometimes none at all. This is because developing realistic test cases is a strong signal on someone's capability. Strong candidates are able to solve a problem, determine how their solution could fail, then fix their solution independently. Stronger candidates determine how their solution could fail upfront \(e.g. during pseudocode\), and address those cases the first time they write code.

## Can We Do Better?

The goal in DS&A interviews is to find the optimal solution in terms of time and space complexity in minimal time. Nice interviewers may prompt us to develop faster or smaller algorithms, but some may not, testing if candidates can independently find optimal solutions. We should always ask ourselves: Can we do this faster or in less space?

The best time to improve our algorithms is during the pseudocode stage \(as mentioned above\) before we start writing code. This gives us the most flexibility in tweaking our algorithms, and gives us more time to optimise earlier in the interview. The most impressive candidates are ones that develop multiple solutions, each with tradeoffs in terms of time or space complexity, and can communicate those tradeoffs clearly with their interviewer. They can then decide together with the interviewer which solution to implement in code.

## Read and Understand Solutions

To maximise chances of success in DS&A interviews, always review and understand solutions after attempting each problem. Commit the strategies to memory, because there is a good chance we will encounter a similar problem in the future. There are a finite number of patterns in DS&A problems, and even fewer for common DS&A problems used in interviews. We will cover a majority of these common patterns in SWE1's DS&A curriculum. If the platform you are using does not provide a solution for a given problem, Google almost always will have one.

