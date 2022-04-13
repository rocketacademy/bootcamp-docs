# D.5.5: Linked Lists

## Introduction

Linked lists, like arrays, store ordered lists of data. Unlike arrays, however, linked lists may not be stored in contiguous blocks of memory in RAM. Consecutive elements in a linked list may be stored in different places in RAM, but linked by a pointer from each element in the linked list to the next and/or previous element. This means 2 things for us.

1. Mid-list insertion and deletion operations that were `O(n)` time with arrays become `O(1)` time with LLs because all subsequent elements do not need to be shifted in memory. Only pointers of previous and next elements in the list need to be updated.
2. Accessing a specific index that was `O(1)` time with arrays becomes `O(n)` time with LLs because the only way to access an element in the middle of a LL is to traverse the list until we reach that element.

| Operation                                  | Runtime \(Arrays\) | Runtime \(Linked Lists\)                                                             |
| :----------------------------------------- | :----------------- | :----------------------------------------------------------------------------------- |
| Insertion/Deletion \(end\)                 | `O(1)`             | `O(1)` \(Only doubly-linked list\)                                                   |
| Insertion/Deletion \(anywhere except end\) | `O(n)`             | `O(1)` \(Assuming we have access to the previous or current node, `O(n)` otherwise\) |
| Access element at specific index           | `O(1)`             | `O(n)`                                                                               |

## Helpful Videos

1. [Here](https://www.youtube.com/watch?v=R9PTBwOzceo) is a short and intuitive introduction to linked lists.

## Exercises

### Rocket Academy

#### Problems

1. [https://repl.it/@neokaiyuan/singly-linked-list](https://repl.it/@neokaiyuan/singly-linked-list)
2. [https://repl.it/@neokaiyuan/doubly-linked-list](https://repl.it/@neokaiyuan/doubly-linked-list)
3. [https://repl.it/@neokaiyuan/circular-doubly-linked-list](https://repl.it/@neokaiyuan/circular-doubly-linked-list)

#### Solutions

1. [https://repl.it/@neokaiyuan/singly-linked-list](https://repl.it/@neokaiyuan/singly-linked-list)
2. [https://repl.it/@neokaiyuan/doubly-linked-list](https://repl.it/@neokaiyuan/doubly-linked-list)
3. [https://repl.it/@neokaiyuan/circular-doubly-linked-list](https://repl.it/@neokaiyuan/circular-doubly-linked-list)

### Leetcode

[Here](https://leetcode.com/problemset/all/?topicSlugs=queue%2Clinked-list&difficulty=Easy) are 11 Easy-level Leetcode problems with linked lists.
