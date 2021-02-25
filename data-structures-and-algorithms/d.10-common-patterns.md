# D.10: Common Patterns

## Introduction

This module reviews common algorithmic patterns in DS&A interview problems.

## Trees

### Depth-First Search

Most vanilla recursion applies DFS. For example, the naive Fibonacci implementation of Fib\(n\) might solve the entire Fib\(n-1\) subtree before recursing on Fib\(n-2\).

![](../.gitbook/assets/image%20%281%29.png)

#### Exercises

1. [https://leetcode.com/problems/increasing-order-search-tree/](https://leetcode.com/problems/increasing-order-search-tree/)
2. [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/)
3. [https://leetcode.com/problems/maximum-depth-of-binary-tree/](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
4. [https://leetcode.com/problems/leaf-similar-trees/](https://leetcode.com/problems/leaf-similar-trees/)
5. [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)
6. [https://leetcode.com/problems/flood-fill/](https://leetcode.com/problems/flood-fill/)
7. [https://leetcode.com/problems/same-tree/](https://leetcode.com/problems/same-tree/)
8. [https://leetcode.com/problems/minimum-distance-between-bst-nodes/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/)
9. [https://leetcode.com/problems/binary-tree-paths/](https://leetcode.com/problems/binary-tree-paths/)
10. [https://leetcode.com/problems/binary-tree-tilt/](https://leetcode.com/problems/binary-tree-tilt/)
11. [https://leetcode.com/problems/symmetric-tree/](https://leetcode.com/problems/symmetric-tree/)
12. [https://leetcode.com/problems/balanced-binary-tree/](https://leetcode.com/problems/balanced-binary-tree/)
13. [https://leetcode.com/problems/path-sum/](https://leetcode.com/problems/path-sum/)

### Breadth-First Search

BFS is a fancier form of tree traversal that typically involves queues. 

![](../.gitbook/assets/image.png)

As a recap of BFS, consider the following `level_order` traversal solution from [D.6.6: Trees](d.6-data-structures/d.6.6-trees.md#solutions), RA tree traversal exercises. The following algorithm enables us to access nodes in a tree in level order.

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

#### Exercises

For each exercise, please answer why this is more efficiently solved with BFS than DFS. Consider using Python's built-in `deque` data structure [here](https://docs.python.org/3/library/collections.html#collections.deque) for a more efficient queue implementation than `list`.

1. [https://leetcode.com/problems/cousins-in-binary-tree/](https://leetcode.com/problems/cousins-in-binary-tree/)
2. [https://leetcode.com/problems/symmetric-tree/](https://leetcode.com/problems/symmetric-tree/)
3. [https://leetcode.com/problems/minimum-depth-of-binary-tree/](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
4. [https://leetcode.com/problems/employee-importance/](https://leetcode.com/problems/employee-importance/)
5. [https://leetcode.com/problems/binary-tree-right-side-view/](https://leetcode.com/problems/binary-tree-right-side-view/) \(Medium\)
6. [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) \(Medium\)

### Recursive Backtracking

Backtracking means pruning exploration of subtrees that we know are invalid. See RA's slides [here](https://docs.google.com/presentation/d/1rpY5NnOvN7MKVLSI5NoU7LYySGVNRTC9Yptl9mtaXRY/edit#slide=id.g81c439b50b_0_81) for a more detailed explanation.

#### Exercises

The following exercises are all Medium-level exercises on Leetcode. The Easy Leetcode backtracking problems weren't relevant.

1. [https://leetcode.com/problems/generate-parentheses/](https://leetcode.com/problems/generate-parentheses/)
2. [https://leetcode.com/problems/permutations/](https://leetcode.com/problems/permutations/)
3. [https://leetcode.com/problems/letter-case-permutation/](https://leetcode.com/problems/letter-case-permutation/)
4. [https://leetcode.com/problems/letter-combinations-of-a-phone-number/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
5. [https://leetcode.com/problems/combination-sum/](https://leetcode.com/problems/combination-sum/)

## Arrays

### Binary Search

1. [Slides](https://docs.google.com/presentation/d/1NXWbDYJz2EMvrHQGq1IYkftwwQ8sdDlE25QGiGWlrpY/edit?usp=sharing)
2. [Exercises](https://repl.it/@LionellRocket/binsearchpattern)

### Sliding Window

1. [Explanation](https://levelup.gitconnected.com/an-introduction-to-sliding-window-algorithms-5533c4fe1cc7)
2. [Exercises](https://repl.it/@JonathanYisheng/patterns-sliding-windows)

### Bit Manipulation

1. [Slides](https://docs.google.com/presentation/d/1YBuk9IBRGy1gLLTljdwggSG_6thReAujI-8Ix5tagCU/edit?usp=sharing)
2. [Exercises](https://repl.it/@LionellRocket/Bits1)

