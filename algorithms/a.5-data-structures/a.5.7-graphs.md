# A.5.7: Graphs

## Introduction

Graphs are a more generalised version of trees that can have "edges" that point in forward, backward, and both directions. All trees are graphs but not all graphs are trees.

Unlike trees, where the edges are stored inside node objects in the form of children or left and right pointer attributes, graphs are often represented as an array of edges without any custom node object. For example, the array of arrays `[[1, 2], [2, 3]]` can be used to represent a graph `1 -> 2 -> 3` where there is an edge from node 1 to 2 and from 2 to 3.

## Helpful Resources

[https://www.youtube.com/watch?v=LFKZLXVO-Dg](https://www.youtube.com/watch?v=LFKZLXVO-Dg)

1. See [this video](https://www.youtube.com/watch?v=gXgEDyodOJU) for an intuitive introduction to graphs in computer science.
2. See [this video](https://www.youtube.com/watch?v=iv5DcAi411I) for examples of practical applications of graphs.
3. Read pages 117-121 in the [Cracking the Coding Interview PDF](../a.0-algorithms-overview.md#resources).
4. [FTBC3 class introducing Graphs](https://youtu.be/1xDBSlnUiUE?t=893)

## Exercises

### Pre-Class

1. [https://leetcode.com/problems/find-the-town-judge/](https://leetcode.com/problems/find-the-town-judge/)
   1. Hint: What additional data structures might be helpful for us to solve this problem?
   2. RA solution code: [https://pastebin.com/3N4NUz8G](https://pastebin.com/3N4NUz8G)
   3. RA solution video: [https://youtu.be/1xDBSlnUiUE?t=1308](https://youtu.be/1xDBSlnUiUE?t=1308)

### Part 1

1. [https://leetcode.com/problems/keys-and-rooms/](https://leetcode.com/problems/keys-and-rooms/) (Medium)
2. [https://leetcode.com/problems/redundant-connection/](https://leetcode.com/problems/redundant-connection/) (Medium)

### Part 2

1. [https://leetcode.com/problems/all-paths-from-source-to-target/](https://leetcode.com/problems/all-paths-from-source-to-target/) (Medium)
   1. Hint: Would recursion be helpful?
   2. RA solution code: [https://pastebin.com/AtwkRjBf](https://pastebin.com/AtwkRjBf)
   3. RA solution video: [https://www.youtube.com/watch?v=dUhleIGC-D4](https://www.youtube.com/watch?v=dUhleIGC-D4)
2. [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/) (Medium)
