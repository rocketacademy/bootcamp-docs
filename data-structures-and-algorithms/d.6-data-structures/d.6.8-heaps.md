# D.6.8: Heaps

## Introduction

Heap is a data structure that is useful for keeping track of the minimum or maximum out of a changing collection of elements. Without heaps we would need linear time to keep track of the max or min element in a changing collection, but with heaps we only need log time. 

## Helpful Resources

1. Read pages 115-116 in the [Cracking the Coding Interview PDF](../d.0-module-d-overview.md#resources).
2. See Rocket Academy's Heap introduction slides [here](https://docs.google.com/presentation/d/1W5iR6eeOYWA7zyia_augbwtdELKmHmNk-pUw4vNcIgQ/edit?usp=sharing). The slides may lack explanation at the moment but slides 14 \(heap operation runtimes\), 18 \(heap implementation insight\), and 41 \(underlying heap operation runtimes\) are key to understanding heaps.
3. Also check out MIT's Heap introduction slides [here](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/MIT6_006F11_lec04.pdf) for a more detailed description of heap operations.
4. [This](https://www.youtube.com/watch?v=c1TpLRyQJ4w) video is a concise visualisation of how heaps work.
5. [This](https://www.coursera.org/lecture/cs-fundamentals-2/4-1-heap-introduction-XYVou) video may help understand how heaps can be represented with arrays. 

## Summary \(What do we need to know?\)

1. Efficient extraction \(`O(logn)`\) of min or max elements in a mutable collection 
2. Creating a heap is `O(n)` 
3. Heap push and heap pop run in `O(logn)` because they each involve 1 heapify call
4. Heap sort runs in `O(nlogn)` time, but in practice is slower than Merge Sort

## How are heaps used in real life?

1. Priority queues 

## Exercises

1. Complete the 2 Easy-level heap problems on Leetcode [here](https://leetcode.com/problemset/all/?difficulty=Easy&topicSlugs=heap).  You may find the [Python `heapq` library ](https://docs.python.org/3/library/heapq.html)helpful. 
2. Attempt the top Medium-level heap problems on Leetcode in decreasing order of acceptance percentage [here](https://leetcode.com/problemset/all/?difficulty=Medium&topicSlugs=heap). Use Python `heapq` where necessary.

