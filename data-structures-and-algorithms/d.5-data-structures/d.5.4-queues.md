# D.5.4: Queues

## Introduction

![](../../.gitbook/assets/1_axag3gn3s-xjn3dvqw6afw.png)

Queues are similar to stacks except instead of removing elements from the end of a list, we can only remove elements from the front of a list. Instead of push and pop operations, queues have "enqueue" and "dequeue" operations respectively. Enqueue adds an element to the back of a queue, and dequeue removes an element from the front of a queue. Queues are FIFO- First In First Out.

## Helpful Resources

1. [This](https://www.youtube.com/watch?v=9Obx8TTQnaY) video is a concise introduction for the motivation and usage of queues.
2. [This](https://www.youtube.com/watch?v=Y7wZO2tMjnY) video is a more detailed introduction to queues and how to use them in Python.
3. Read pages 109-110 in the [Cracking the Coding Interview PDF](../d.0-dsa-overview.md#resources).

## Code Example

Please read and understand the queue class definition in [this](https://repl.it/@kaiyuanneo/queue-class-definition#main.py) Repl. Notice we Python's built-in `deque` data structure because it supports more efficient popping \(dequeuing\) of the left-most element than Python Lists.

```python
# We use the built-in Python deque data structure for queues.
# Deque is implemented using linked lists and more efficient
# than Python lists for popping the left-most element.
from collections import deque

class Queue:
  '''
  Define a Queue class that supports the methods
  1) .enqueue(element): Add element to back of queue
  2) .dequeue():        Return element from front of queue
  3) .size():           Return number of elements in queue
  '''
  # self is a reference to the instance that was just created
  def __init__(self): 
    self.data = deque()

  # Return optional representation of class in string format
  def __repr__(self):
    return str(self.data)

  def enqueue(self, element):
    print(f"{element} joins the queue")
    self.data.append(element)

  def dequeue(self):
    element = self.data.popleft()
    print(f"{element} leaves the queue")
    return element

  def size(self):
    print(f"Queue contains {len(self.data)} elements")
    return len(self.data)

```

## Exercises

Please use Python's `deque` data structure to represent queues.

### Pre-Class

1. [https://repl.it/@kaiyuanneo/queues\#main.py](https://repl.it/@kaiyuanneo/queues#main.py)
   1. Solutions: [https://repl.it/@kaiyuanneo/queuessoln\#main.py](https://repl.it/@kaiyuanneo/queuessoln#main.py)

### Part 1

1. [https://leetcode.com/problems/task-scheduler/](https://leetcode.com/problems/task-scheduler/)
   1. Hint: This may be solved more efficiently without queues, but see how we can implement it with queues first.

