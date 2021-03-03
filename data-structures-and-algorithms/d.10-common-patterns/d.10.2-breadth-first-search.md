# D.10.2: Breadth-First Search

## Introduction

BFS is a fancier form of tree traversal that typically involves queues. 

![](../../.gitbook/assets/image.png)

As a recap of BFS, consider the following `level_order` traversal solution from [D.6.6: Trees](../d.6-data-structures/d.6.6-trees.md#solutions), RA tree traversal exercises. The following algorithm enables us to access nodes in a tree in level order.

```python
def level_order(tree):
  ''' Return the list of values level by level (Hint: Consider iteration)'''
  level_order_values = []
  # Store upcoming nodes in a queue
  q = [tree]
  while len(q) > 0:
    # Iteratively dequeue first node in queue until queue is empty
    currnode = q.pop(0)
    # Perform operation on current node
    level_order_values.append(currnode.value)
    # Enqueue left child if any
    if currnode.left:
      q.append(currnode.left)
    # Enqueue right child if any
    if currnode.right:
      q.append(currnode.right)
  return level_order_values
```

## Exercises

For each exercise, please answer why this is more efficiently solved with BFS than DFS. Consider using Python's built-in `deque` data structure [here](https://docs.python.org/3/library/collections.html#collections.deque) for a more efficient queue implementation than `list`. `deque` is implemented with a doubly-linked list, thus dequeue is a O\(1\) operation. Specifically, see the [`popleft` method](https://docs.python.org/3/library/collections.html#collections.deque.popleft).

1. [https://leetcode.com/problems/cousins-in-binary-tree/](https://leetcode.com/problems/cousins-in-binary-tree/)
   1. Rocket Academy solution code: [https://leetcode.com/submissions/detail/461981577/](https://leetcode.com/submissions/detail/461981577/)
   2. Rocket Academy video solution: [https://youtu.be/SeNfZBAU\_f4?t=4088](https://youtu.be/SeNfZBAU_f4?t=4088) \(1:08:08 onward\)
2. [https://leetcode.com/problems/symmetric-tree/](https://leetcode.com/problems/symmetric-tree/)
3. [https://leetcode.com/problems/minimum-depth-of-binary-tree/](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
4. [https://leetcode.com/problems/employee-importance/](https://leetcode.com/problems/employee-importance/)
5. [https://leetcode.com/problems/binary-tree-right-side-view/](https://leetcode.com/problems/binary-tree-right-side-view/) \(Medium\)
6. [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) \(Medium\)

