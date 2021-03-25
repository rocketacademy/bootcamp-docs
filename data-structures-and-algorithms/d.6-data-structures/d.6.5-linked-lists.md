# D.6.5: Linked Lists

![](../../.gitbook/assets/llmeme2.jpeg)

## Introduction

Linked lists, like arrays, store ordered lists of data. Unlike arrays, linked lists may not be stored in contiguous blocks of memory in RAM. Consecutive elements in a linked list may be stored in different places in RAM, but linked by a pointer from each element in the linked list to the next and/or previous element. This means 2 things for us.

1. Start and mid-list insertion and deletion operations that were `O(n)` time with arrays become `O(1)` time with LLs because all subsequent elements do not need to be shifted in memory. Only pointers of previous and next elements in the list need to be updated.
2. Accessing a specific index that was `O(1)` time with arrays becomes `O(n)` time with LLs because the only way to access an element in the middle of a LL is to traverse the list until we reach that element.

| Operation | Runtime \(Arrays\) | Runtime \(Linked Lists\) |
| :--- | :--- | :--- |
| Insertion/Deletion \(start\) | `O(n)` | `O(1)` |
| Insertion/Deletion \(end\) | `O(1)` | `O(n)` \(`O(1)` if we have pointer to tail node with doubly-linked list\) |
| Insertion/Deletion \(middle\) | `O(n)` | `O(n)` \(`O(1)` if we have pointer to the node to be deleted\) |
| Access element at specific index | `O(1)` | `O(n)` |

## Helpful Resources

1. [Here](https://www.youtube.com/watch?v=R9PTBwOzceo) is a short and intuitive introduction to linked lists.
2. Read pages 104-106 in the [Cracking the Coding Interview PDF](../d.0-dsa-overview.md#resources).

## Use Cases

Linked lists \(LLs\) are typically used when we want faster insertion or deletion of the first element in a list, for example to implement queues or hash tables. LLs are also used when we may not have sufficient contiguous storage space, for example in file systems on our hard drives. 

## Exercises

### Rocket Academy

#### Problems

1. [https://repl.it/@kaiyuanneo/singly-linked-list](https://repl.it/@kaiyuanneo/singly-linked-list)
2. [https://repl.it/@kaiyuanneo/doubly-linked-list](https://repl.it/@kaiyuanneo/doubly-linked-list)
3. [https://repl.it/@kaiyuanneo/circular-doubly-linked-list](https://repl.it/@kaiyuanneo/circular-doubly-linked-list)

#### Solutions

1. [https://repl.it/@kaiyuanneo/singly-linked-list-soln](https://repl.it/@kaiyuanneo/singly-linked-list-soln)
2. [https://repl.it/@kaiyuanneo/doubly-linked-list-soln](https://repl.it/@kaiyuanneo/doubly-linked-list-soln)
3. [https://repl.it/@kaiyuanneo/circular-doubly-linked-list-soln](https://repl.it/@kaiyuanneo/circular-doubly-linked-list-soln)

### Leetcode

[Here](https://leetcode.com/problemset/all/?topicSlugs=linked-list&difficulty=Easy) are 10 Easy-level Leetcode problems with linked lists.

