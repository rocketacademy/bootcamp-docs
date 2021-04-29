# D.9: Dynamic Programming

## Introduction

Dynamic programming allows us to optimise recursive solutions by "caching" intermediate calculation results to reduce repeated and redundant calculations.

## Helpful Resources

1. Read pages 143-148 in [CTCI](d.0-dsa-overview.md#resources) on DP
2. [This](https://www.youtube.com/watch?v=vYquumk4nWw) video illustrates 2 fundamental examples of dynamic programming with the Fibonacci sequence.
3. [This](https://awjin.me/algos-js/dp/tab-memo.html) article describes the differences between memoisation and tabulation methods of DP. Memoisation will be sufficient for a majority of DP problems.

## Key Concepts

1. Memoisation
   1. Store previous calculations in cache to avoid repeated calculations
2. "Take or don't take"
   1. The problem can be broken down into "find the optimal value between choosing the current element and not choosing the current element"
   2. "Take or don't take" problems typically also involve memoisation

## Exercises

### Pre-Class

1. [https://repl.it/@kaiyuanneo/dp1-basics\#main.py](https://repl.it/@kaiyuanneo/dp1-basics#main.py)
   1. [https://repl.it/@kaiyuanneo/dp1-basics-soln\#main.py](https://repl.it/@kaiyuanneo/dp1-basics-soln#main.py)

### Part 1

1. [https://leetcode.com/problems/min-cost-climbing-stairs/](https://leetcode.com/problems/min-cost-climbing-stairs/)
2. [https://leetcode.com/problems/house-robber/](https://leetcode.com/problems/house-robber/)

### Part 2

1. [https://leetcode.com/problems/climbing-stairs/](https://leetcode.com/problems/climbing-stairs/)
2. [https://leetcode.com/problems/partition-array-for-maximum-sum/](https://leetcode.com/problems/partition-array-for-maximum-sum/)

### Part 3

1. [https://leetcode.com/problems/minimum-cost-for-tickets/](https://leetcode.com/problems/minimum-cost-for-tickets/)
2. [https://leetcode.com/problems/divisor-game/](https://leetcode.com/problems/divisor-game/)
   1. Note: This can be solved with math and not DP, but please implement the DP version for practice.
   2. Rocket Academy solution code: [https://pastebin.com/mywskXkk](https://pastebin.com/mywskXkk)
   3. Rocket Academy solution video: [https://youtu.be/SUGb21Ec5kE?t=2113](https://youtu.be/SUGb21Ec5kE?t=2113) \(35:13 until about 1:48:30\)

