# A.5.4: Queues

![](../../.gitbook/assets/1_axag3gn3s-xjn3dvqw6afw.png)

## Learning Objectives

By the end of this lesson, you should:

* be familiar with queue functionality time and space complexity
* understand the difference between LIFO and FIFO
* understand the python queue class example

## Introduction

Queues are similar to stacks except instead of removing elements from the end of a list, we can only remove elements from the front of a list. Instead of push and pop operations, queues have "enqueue" and "dequeue" operations respectively. Enqueue adds an element to the back of a queue, and dequeue removes an element from the front of a queue. Queues are FIFO- First In First Out.

#### Big-O of Queues

If we think of a list or, even worse, a stack, operations that affect the beginning of the data would run in at least O\(n\). Remember that in an array, removing something from the front is **O\(n\)**. We can think of a queue as a doubly linked list so that taking things off the front or the back is always **O\(1\)**.

## Helpful Resources

1. [This](https://www.youtube.com/watch?v=9Obx8TTQnaY) video is a concise introduction for the motivation and usage of queues.
2. [This](https://www.youtube.com/watch?v=Y7wZO2tMjnY) video is a more detailed introduction to queues and how to use them in Python.
3. Read pages 109-110 in the [Cracking the Coding Interview PDF](../a.0-algorithms-overview.md#resources).

## Queue Class

Notice we Python's built-in `deque` data structure because it supports more efficient popping \(dequeuing\) of the left-most element than Python Lists.

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

## Linked List Queue Class

From [here](https://www.geeksforgeeks.org/queue-linked-list-implementation/).

```python
class Node:

    def __init__(self, data):
        self.data = data
        self.next = None

# A class to represent a queue

# The queue, front stores the front node
# of LL and rear stores the last node of LL
class Queue:

    def __init__(self):
        self.front = self.rear = None

    def isEmpty(self):
        return self.front == None

    # Method to add an item to the queue
    def EnQueue(self, item):
        temp = Node(item)

        if self.rear == None:
            self.front = self.rear = temp
            return
        self.rear.next = temp
        self.rear = temp

    # Method to remove an item from queue
    def DeQueue(self):

        if self.isEmpty():
            return
        temp = self.front
        self.front = temp.next

        if(self.front == None):
            self.rear = None

# Driver Code
if __name__== '__main__':
    q = Queue()
    q.EnQueue(10)
    q.EnQueue(20)
    q.DeQueue()
    q.DeQueue()
    q.EnQueue(30)
    q.EnQueue(40)
    q.EnQueue(50)
    q.DeQueue()
    print("Queue Front " + str(q.front.data))
    print("Queue Rear " + str(q.rear.data))
```

## Exercises

Please use Python's `deque` data structure to represent queues.

### Pre-Class

```python
# The following exercises represent a queue with a deque.
# The start of the deque is the front of the queue.
# We can enqueue with .append(element), and dequeue with .popleft().
from collections import deque

####################
# Pass The Bomb #
####################

# Problem statement:
# Given a list of names and a bomb timer, return the name of the last
# person standing. The bomb is passed around iteratively, and the bomb
# timer decreases by 1 at each iteration. When the bomb timer reaches 0,
# the bomb explodes and the person at the current index is eliminated.
# After each explosion, the bomb timer is reset and the bomb starts
# with the person at the next iteration.

def play(names, timer):
  # Convert input array to deque
  names = deque(names)
  pass

print(play(["Ally", "Beth", "Coco", "Dede", "Elsa"], 1)) # "Coco"
print(play(["Ally", "Beth", "Coco", "Dede", "Elsa"], 2)) # "Dede"
print(play(["Ally", "Beth", "Coco", "Dede", "Elsa"], 3)) # "Ally"
print(play(["Ally", "Beth", "Coco", "Dede", "Elsa"], 4)) # "Beth"
print(play(["Ally", "Beth", "Coco", "Dede", "Elsa"], 5)) # "Dede"
print(play(["Ally", "Beth", "Coco", "Dede", "Elsa"], 6)) # "Dede"
```

```python
# The following exercises represent a queue with a deque.
# The start of the deque is the front of the queue.
# We can enqueue with .append(element), and dequeue with .popleft().
from collections import deque

######################
# Moving Averages #
######################

# Problem statement:
# Given a valid window size, move through the given list and
# return a new list of moving averages. A moving average is
# the average of all the numbers in the given window. For example,
# for a list [1, 2, 3] and window size of 2, a resultant list
# of moving averages would be [1.5, 2.5].
#
# The following examples illustrate the number of elements in the
# resultant list.
# 6 items, window_size=2, loop 5 times
# 6 items, window_size=3, loop 4 times
# 6 items, window_size=6, loop 1 time
# 3 items, window_size=2, loop 2 times
# 4 items, window_size=2, loop 3 times
# 5 items, window_size=2, loop 4 times
# N items, window_size=2, loop N-1 times
# N items, window_size=X, loop N-(X-1) times

# Helper function to calculate the mean (average) of
# numbers in a given list.
def mean(l):
  return sum(l)/len(l)

def moving_averages(l, window_size):
  pass

print(moving_averages([0,1,2,3,4,5], 1)) # [0.0, 1.0, 2.0, 3.0, 4.0, 5.0]
print(moving_averages([0,1,2,3,4,5], 2)) # [0.5, 1.5, 2.5, 3.5, 4.5]
print(moving_averages([0,1,2,3,4,5], 3)) # [1.0, 2.0, 3.0, 4.0]
print(moving_averages([0,1,2,3,4,5], 4)) # [1.5, 2.5, 3.5]

```

Solutions: [https://repl.it/@kaiyuanneo/queuessoln\#main.py](https://repl.it/@kaiyuanneo/queuessoln#main.py)

### Comfortable

1. [https://leetcode.com/problems/task-scheduler/](https://leetcode.com/problems/task-scheduler/)
   1. Hint: This may be solved more efficiently without queues, but see how we can implement it with queues first.
