# D.6.6: Trees

## Introduction

Trees are a common data structure used to represent hierarchical data, often seen in DS&A problems. Trees are essentially linked lists where nodes are ordered from top to bottom instead of left to right, and each node can have more than 1 subsequent node, called "child nodes" in trees. Each child node can only have 1 parent node, and nodes with no child nodes are called "leaf nodes". Nodes in trees generally contain a data payload \(e.g. a number\), and pointers to each respective child node.

## Helpful Resources

1. [This](https://www.youtube.com/watch?v=qH6yxkw0u78) video is a clear and concise intro to basic concepts regarding trees.
2. Read pages 112-115 in the [Cracking the Coding Interview PDF](../d.0-dsa-overview.md#resources).

## Tree Traversals

The 2 most common methods of tree traversal are Depth-First Search \(DFS\) and Breadth-First Search \(BFS\). Tree traversal is a crucial technique in using trees to solve problems.

### Depth-First Search \(DFS\)

![](../../.gitbook/assets/image%20%281%29.png)

Most vanilla recursion applies DFS. For example, the naive Fibonacci implementation of Fib\(n\) might solve the entire Fib\(n-1\) subtree before recursing on Fib\(n-2\). The following is an example of DFS that returns true if the value `x` is within a tree, false if not.

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

### Breadth-First Search \(BFS\)

![](../../.gitbook/assets/image.png)

BFS is a fancier form of tree traversal that typically involves queues. As a recap of BFS, consider the following `level_order` traversal solution from RA's tree traversal exercises. The following algorithm enables us to access nodes in a tree in level order.

Consider using Python's built-in `deque` data structure [here](https://docs.python.org/3/library/collections.html#collections.deque) for a more efficient queue implementation than `list`. `deque` is implemented with a doubly-linked list, thus dequeue is a O\(1\) operation. Specifically, see the [`popleft` method](https://docs.python.org/3/library/collections.html#collections.deque.popleft).

```python
from collections import deque

def level_order(tree):
  ''' Return the list of values level by level (Hint: Consider iteration)'''
  level_order_values = []
  # Store upcoming nodes in a queue
  q = deque([tree])
  while len(q) > 0:
    # Iteratively dequeue first node in queue until queue is empty
    currnode = q.popleft()
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

### Pre-Class

1. [https://repl.it/@kaiyuanneo/treeintro\#main.py](https://repl.it/@kaiyuanneo/treeintro#main.py)
   1. [https://repl.it/@kaiyuanneo/treeintrosoln\#main.py](https://repl.it/@kaiyuanneo/treeintrosoln#main.py)
2. [https://repl.it/@kaiyuanneo/treebst\#main.py](https://repl.it/@kaiyuanneo/treebst#main.py)
   1. [https://repl.it/@kaiyuanneo/treebstsoln\#main.py](https://repl.it/@kaiyuanneo/treebstsoln#main.py)
3. [https://repl.it/@kaiyuanneo/treetraversals\#main.py](https://repl.it/@kaiyuanneo/treetraversals#main.py)
   1. Hint: Level-order traversal requires BFS techniques.
   2. [https://repl.it/@kaiyuanneo/treetraversals-soln\#main.py](https://repl.it/@kaiyuanneo/treetraversals-soln#main.py)

### Part 1

1. [https://leetcode.com/problems/range-sum-of-bst/](https://leetcode.com/problems/range-sum-of-bst/)
2. [https://leetcode.com/problems/merge-two-binary-trees/](https://leetcode.com/problems/merge-two-binary-trees/)
3. [https://leetcode.com/problems/increasing-order-search-tree/](https://leetcode.com/problems/increasing-order-search-tree/)
   1. Hint: Consider in-order traversal to traverse a binary search tree in increasing order.
4. [https://leetcode.com/problems/n-ary-tree-postorder-traversal/](https://leetcode.com/problems/n-ary-tree-postorder-traversal/)
5. [https://leetcode.com/problems/n-ary-tree-preorder-traversal/](https://leetcode.com/problems/n-ary-tree-preorder-traversal/)

### Part 2

1. [https://leetcode.com/problems/search-in-a-binary-search-tree/](https://leetcode.com/problems/search-in-a-binary-search-tree/)
2. [https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/)
3. [https://leetcode.com/problems/maximum-depth-of-binary-tree/](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
4. [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/)
5. [https://leetcode.com/problems/univalued-binary-tree/](https://leetcode.com/problems/univalued-binary-tree/)

### Part 3

1. [https://leetcode.com/problems/invert-binary-tree/](https://leetcode.com/problems/invert-binary-tree/)
2. [https://leetcode.com/problems/average-of-levels-in-binary-tree/](https://leetcode.com/problems/average-of-levels-in-binary-tree/)
3. [https://leetcode.com/problems/leaf-similar-trees/](https://leetcode.com/problems/leaf-similar-trees/)
4. [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)
5. [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)

### Part 4

1. [https://leetcode.com/problems/minimum-absolute-difference-in-bst/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)
2. [https://leetcode.com/problems/same-tree/](https://leetcode.com/problems/same-tree/)
3. [https://leetcode.com/problems/binary-tree-paths/](https://leetcode.com/problems/binary-tree-paths/)
4. [https://leetcode.com/problems/cousins-in-binary-tree/](https://leetcode.com/problems/cousins-in-binary-tree/)
   1. Rocket Academy solution code: [https://pastebin.com/wWYXg309](https://pastebin.com/wWYXg309)
   2. Rocket Academy video solution: [https://youtu.be/SeNfZBAU\_f4?t=4088](https://youtu.be/SeNfZBAU_f4?t=4088) \(1:08:08 onward\)
5. [https://leetcode.com/problems/sum-of-left-leaves/](https://leetcode.com/problems/sum-of-left-leaves/)

### Part 5

1. [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
2. [https://leetcode.com/problems/diameter-of-binary-tree/](https://leetcode.com/problems/diameter-of-binary-tree/)
3. [https://leetcode.com/problems/symmetric-tree/](https://leetcode.com/problems/symmetric-tree/)
4. [https://leetcode.com/problems/balanced-binary-tree/](https://leetcode.com/problems/balanced-binary-tree/)
5. [https://leetcode.com/problems/subtree-of-another-tree/](https://leetcode.com/problems/subtree-of-another-tree/)

### Part 6

1. [https://leetcode.com/problems/find-mode-in-binary-search-tree/](https://leetcode.com/problems/find-mode-in-binary-search-tree/)
2. [https://leetcode.com/problems/path-sum/](https://leetcode.com/problems/path-sum/)
3. [https://leetcode.com/problems/minimum-depth-of-binary-tree/](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
4. [https://leetcode.com/problems/binary-tree-right-side-view/](https://leetcode.com/problems/binary-tree-right-side-view/) \(Medium\)
5. [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) \(Medium\)

