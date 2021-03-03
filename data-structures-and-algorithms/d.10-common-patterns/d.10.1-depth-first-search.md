# D.10.1: Depth-First Search

## Introduction

Most vanilla recursion applies DFS. For example, the naive Fibonacci implementation of Fib\(n\) might solve the entire Fib\(n-1\) subtree before recursing on Fib\(n-2\).

The following is an example of DFS that returns true if the value `x` is within a tree, false if not.

```python
def find_x_in_tree(node, x):
  # If recursion reaches child of leaf node, x was not found
  if not node:
    return False
  # If current node has value x, x is found
  if node.val == x:
    return True
  # Return True if x is in the left or right subtrees
  return find_x_in_tree(node.left) or find_x_in_tree(node.right)
```

![](../../.gitbook/assets/image%20%281%29.png)

## Exercises

1. [https://leetcode.com/problems/increasing-order-search-tree/](https://leetcode.com/problems/increasing-order-search-tree/)
   1. Hint: Consider in-order traversal to traverse a binary search tree in increasing order.
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

