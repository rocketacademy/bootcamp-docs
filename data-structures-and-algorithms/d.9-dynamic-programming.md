# D.9: Dynamic Programming

## Introduction

Dynamic programming allows us to optimise recursive solutions by "caching" intermediate calculation results to reduce repeated and redundant calculations.

## Helpful Resources

1. Read pages 143-148 in [CTCI](d.0-dsa-overview.md#resources) on DP
2. [This](https://www.youtube.com/watch?v=vYquumk4nWw) video illustrates 2 fundamental examples of dynamic programming with the Fibonacci sequence.
3. [This](https://awjin.me/algos-js/dp/tab-memo.html) article describes the differences between memoisation and tabulation methods of DP

## Key Concepts

1. Memoisation
   1. Store previous calculations in cache to avoid repeated calculations
2. "Take or don't take"
   1. The problem can be broken down into "find the optimal value between choosing the current element and not choosing the current element"
   2. "Take or don't take" problems typically also involve memoisation
3. \(Advanced, optional\) Tabulation and optimal space usage

## Exercises

### Rocket Academy

#### Problems

1. [https://repl.it/@kaiyuanneo/dp1-basics\#main.py](https://repl.it/@kaiyuanneo/dp1-basics#main.py)
2. [https://repl.it/@kaiyuanneo/dp2-intermediate\#main.py](https://repl.it/@kaiyuanneo/dp2-intermediate#main.py)
3. [https://repl.it/@kaiyuanneo/dp3-advanced\#main.py](https://repl.it/@kaiyuanneo/dp3-advanced#main.py)
   1. Advanced covers topics such as tabulation and optimal space usage. Please review and understand the examples in this page, but the exercises are optional.

#### Solutions

1. [https://repl.it/@kaiyuanneo/dp1-basics-soln\#main.py](https://repl.it/@kaiyuanneo/dp1-basics-soln#main.py)
2. [https://repl.it/@kaiyuanneo/dp2-intermediate-soln\#main.py](https://repl.it/@kaiyuanneo/dp2-intermediate-soln#main.py)

### Leetcode

Attempt the following Easy DP problems on Leetcode.

1. [https://leetcode.com/problems/divisor-game/](https://leetcode.com/problems/divisor-game/)
   1. Note: This can be solved with math and not DP, but please implement the DP version for practice.
   2. Rocket Academy solution code: [https://pastebin.com/mywskXkk](https://pastebin.com/mywskXkk)
   3. Rocket Academy solution video: [https://youtu.be/SUGb21Ec5kE?t=2113](https://youtu.be/SUGb21Ec5kE?t=2113) \(35:13 until about 1:48:30\)
2. [https://leetcode.com/problems/min-cost-climbing-stairs/](https://leetcode.com/problems/min-cost-climbing-stairs/)
3. [https://leetcode.com/problems/is-subsequence/](https://leetcode.com/problems/is-subsequence/)
4. [https://leetcode.com/problems/climbing-stairs/](https://leetcode.com/problems/climbing-stairs/)

The following problems are tagged as Easy DP problems in Leetcode but can be solved more efficiently without DP. Try them out.

1. [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
2. [https://leetcode.com/problems/maximum-subarray/](https://leetcode.com/problems/maximum-subarray/)

