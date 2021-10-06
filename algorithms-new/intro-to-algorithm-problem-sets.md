# Intro to Algorithm Problem Sets

## Introduction

When solving DS&A problems, there are a few common strategies we can use to perform better.

1. Clarify the Problem
2. Think Out Loud
3. Pseudocode First
4. Can We Do Better?
5. End With a Working Solution
6. Think of Test Cases
7. Trace Code with Simple Examples
8. Read and Understand Solutions

## Clarify the Problem

Always clarify the interview problem before attempting a solution. This shows initiative, communication skills, and an outcome-driven mindset which will impress employers. Clarifying the problem can include the following.

1. What are sample inputs and outputs?
2. Are there constraints on how we can solve the problem? E.g. Recursion vs iteration or specific data structures?
3. Any other ambiguities regarding what the problem is asking.

## Think Out Loud

Thinking out load greatly increases one's chances of succeeding in DS&A interviews and we encourage everyone to do it. DS&A interviews are meant to test a person's problem-solving ability, not their ability to regurgitate a solution. Someone who is silent throughout a DS&A interview and pops out a solution at the end may pass the interview, but someone that is silent throughout and fails to produce a solution will always fail. Someone that communicates their thought process throughout the DS&A interview not only is able to earn partial points, they also allow the interviewer to vouch for the candidate's communication skills, and allow the interviewer a chance to provide hints along the way.

## Pseudocode First

Always write pseudocode before code in DS&A problems. One might think that this "extra" step saps time in a short interview, but in reality the pseudocode provides clarity and prevents errors in code writing and more often saves time than not.

The hardest part of DS&A problems is coming up with the algorithm. When we write pseudocode, it frees us to imagine the algorithm without worrying about code syntax. It is easy to improve our algorithm in pseudocode because we need not worry that code runs. **We should always ask ourselves if we can solve the problem more efficiently during the pseudocode stage, before writing code.** This allows us to find optimal algorithms without writing and rewriting code. Having our algorithm in pseudocode also allows our interviewer to provide valuable feedback on our algorithm early.

1 caveat to this rule is during automated online interviews. While pseudocode is still beneficial to make sure we code efficiently, our pseudocode may not be considered when our interviews are graded, thus we may not want to invest as much time in the "prettiness" of our pseudocode.

## Can We Do Better?

The goal in DS&A interviews is to find the optimal solution in terms of time and space complexity in minimal time. Nice interviewers may prompt us to develop faster or smaller algorithms, but some may not, testing if candidates can independently find optimal solutions. We should always ask ourselves: Can we do this faster or in less space?

The best time to improve our algorithms is during the pseudocode stage \(as mentioned above\) before we start writing code. This gives us the most flexibility in tweaking our algorithms, and gives us more time to optimise earlier in the interview. The most impressive candidates are ones that develop multiple solutions, each with tradeoffs in terms of time or space complexity, and can communicate those tradeoffs clearly with their interviewer. They can then decide together with the interviewer which solution to implement in code.

## End With a Working Solution

Try to have working code at the end of the interview, regardless of algorithm efficiency. Often we will be on the cusp of developing the best algorithm, only to find that time is running out and we haven't written any code yet. For automated interviews, always end with a working solution, even if it isn't the most efficient one. A working solution will get some points, but a partial solution often gets none. For live interviews, ask your interviewer if she would prefer you continue developing the optimal algorithm in pseudocode, or complete code for the suboptimal algorithm. Often interviewers recommend candidates complete code, even for suboptimal algorithms, because interviewers may present the candidate's code as proof during hiring reviews. It is harder to recommend candidates that can talk about algorithms but not implement them.

## Think of Test Cases

We should always think about how our algorithms can fail and proactively develop test cases to test those situations in interviews. More often than not, DS&A interview problems provide incomplete test cases, sometimes none at all. This is because developing realistic test cases is a strong signal on someone's capability. Strong candidates are able to solve a problem, determine how their solution could fail, then fix their solution independently. Stronger candidates determine how their solution could fail upfront \(e.g. during pseudocode\), and address those cases the first time they write code.

## Trace Code with Simple Examples

More often than not we will develop a flawed solution on our first try. The code may run but it fails our test cases. Instead of guessing where bugs may be, we must test methodically.

1 common and foolproof way to find bugs in our code is to trace the code line by line with the simplest examples that our algorithm fails to address. 1 way is to put `print` statements where we want to read intermediate variable values. We can also do this without running code by tracking variable values on paper or on a whiteboard. At which line in our code does the intermediate value not match our expectations and why?

If we find our code is still failing on more complex test cases, gradually increase the complexity of the test cases until we find the simplest test case where our code fails. Trace our code for that simplest failing test case to find the bug.

## Read and Understand Solutions

To maximise chances of success in DS&A interviews, always review and understand solutions after attempting each problem. Commit the strategies to memory, because there is a good chance we will encounter a similar problem in the future. There are a finite number of patterns in DS&A problems, and even fewer for common DS&A problems used in interviews. We will cover a majority of these common patterns in Coding Bootcamp's DS&A curriculum. If the platform you are using does not provide a solution for a given problem, Google almost always will have one.

Past students have found the spaced-repetition flashcard software [Anki](https://apps.ankiweb.net/) helpful in revising and keeping warm on DS&A concepts during and after RA's bootcamp. They would store problems and solutions in flashcards to revise them periodically.

## Tips

### Useful Python List Syntax

### Basic Python list methods: [https://www.w3schools.com/python/python\_arrays.asp](https://www.w3schools.com/python/python_arrays.asp)

### Python list slice syntax: [https://stackoverflow.com/a/509295](https://stackoverflow.com/a/509295)

```python
a[start:stop]  # items start through stop-1
a[start:]      # items start through the rest of the array
a[:stop]       # items from the beginning through stop-1
a[:]           # a copy of the whole array
# There is also the step value, which can be used with any of the above:

a[start:stop:step] # start through not past stop, by step
# The key point to remember is that the :stop value represents the first value that is not in the selected slice. So, the difference between stop and start is the number of elements selected (if step is 1, the default).

# The other feature is that start or stop may be a negative number, which means it counts from the end of the array instead of the beginning. So:

a[-1]    # last item in the array
a[-2:]   # last two items in the array
a[:-2]   # everything except the last two items
a[::2]   # every other item in the array

# Similarly, step may be a negative number:

a[::-1]    # all items in the array, reversed
a[1::-1]   # the first two items, reversed
a[:-3:-1]  # the last two items, reversed
a[-3::-1]  # everything except the last two items, reversed
```

## Introduction to Leetcode

Leetcode problems are encapsulated in classes. We will learn more about classes in [D.6: Object-Oriented Programming](../algorithms/a.8-intro-to-object-oriented-programming.md), but without going into too much detail here, the following are what we need to know to solve and submit problems in Leetcode.

1. Every method inside a Python class requires `self` as the 1st parameter in the method definition, so that the method has access to other attributes and methods within the class instance via `self`.
2. To call Python class methods \(i.e. methods inside the class\), we will need to prefix the method name with `self.`, for example `self.myMethodName()`. There is no need to pass `self` as the 1st parameter to class methods, even though `self` is the 1st param in the method definition.
3. Python 3 provides optional syntax to specify variable types. Leetcode problems specify variable types in function parameters to help us understand the inputs and outputs of the function we need to implement.
4. There is no need for us to call the function we define, for example `validMountainArray`. Leetcode will call the function, we just need to implement it.

```python
class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
```

