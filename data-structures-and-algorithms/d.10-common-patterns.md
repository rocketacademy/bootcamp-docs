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

Consider the following canonical binary search implementation.

```python
def binarySearch(arr, x):
  # Initialise left and right bounds of search to start and end of arr
  l, r = 0, len(x) - 1
  # While l and r have yet to overlap
  while l <= r:
    # Find the midpoint between l and r
    mid = l + (r - l)//2
    # If the element at mid index is x, return mid
    if arr[mid] == x:
      return mid
    # Otherwise, if x is greater than elem at mid, update l to be 1 above mid
    elif arr[mid] < x:
      l = mid + 1
    # Otherwise, if x is less than elem at mid, update r to be 1 below mid
    else:
      r = mid - 1
  # If x is not found, return -1
  return -1
```

#### Exercises

1. [https://leetcode.com/problems/binary-search/](https://leetcode.com/problems/binary-search/)
2. [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/)
3. [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/)
4. [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
5. [https://leetcode.com/problems/search-insert-position/](https://leetcode.com/problems/search-insert-position/)
6. [https://leetcode.com/problems/valid-perfect-square/](https://leetcode.com/problems/valid-perfect-square/)
7. [https://leetcode.com/problems/first-bad-version/](https://leetcode.com/problems/first-bad-version/)

### Sliding Window

Sliding window algorithms generally store a start and end index of a "window" in an array, and update that start and end index as we iterate through the array. See [this](https://levelup.gitconnected.com/an-introduction-to-sliding-window-algorithms-5533c4fe1cc7) explanation for an intro to sliding window algorithms. Use incognito mode to read the full article.

#### Exercises

The following exercises are Medium-level Leetcode exercises. There were no free Easy exercises.

1. [https://leetcode.com/problems/max-consecutive-ones-iii/](https://leetcode.com/problems/max-consecutive-ones-iii/)
2. [https://leetcode.com/problems/grumpy-bookstore-owner/](https://leetcode.com/problems/grumpy-bookstore-owner/)
3. [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)
4. [https://leetcode.com/problems/longest-repeating-character-replacement/](https://leetcode.com/problems/longest-repeating-character-replacement/)
5. [https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)
6. [https://leetcode.com/problems/longest-turbulent-subarray/](https://leetcode.com/problems/longest-turbulent-subarray/)
7. [https://leetcode.com/problems/permutation-in-string/](https://leetcode.com/problems/permutation-in-string/)
8. [https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)
9. [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/)
10. [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/)
11. [https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)
12. [https://leetcode.com/problems/longest-substring-without-repeating-characters/](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

### Bit Manipulation

Bit manipulation is commonly taught in core computer science courses to help students understand how numbers are represented and manipulated by computers. Some companies use bit manipulation in their interview processes.

1. Please read about the 6 main bitwise operators `&`, `|`, `~`, `^`, `<<`, and `>>` [here](https://code.tutsplus.com/articles/understanding-bitwise-operators--active-11301). These operators can be used in Python to perform bitwise operations.
2. Please read pages 124-128 on Bit Manipulation in [CTCI](d.0-module-d-overview.md#resources).

#### Exercises

1. [https://leetcode.com/problems/decode-xored-array/](https://leetcode.com/problems/decode-xored-array/)
2. [https://leetcode.com/problems/xor-operation-in-an-array/](https://leetcode.com/problems/xor-operation-in-an-array/)
3. [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)
4. [https://leetcode.com/problems/hamming-distance/](https://leetcode.com/problems/hamming-distance/)
5. [https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/)
   1. Consider using Python's built-in decimal to binary converter function `bin()`
6. [https://leetcode.com/problems/single-number/](https://leetcode.com/problems/single-number/)
   1. Requires trick to understand what happens when we XOR a number with 0, and when we XOR a number with itself
7. [https://leetcode.com/problems/number-complement/](https://leetcode.com/problems/number-complement/)
8. [https://leetcode.com/problems/binary-number-with-alternating-bits/](https://leetcode.com/problems/binary-number-with-alternating-bits/)
9. [https://leetcode.com/problems/power-of-two/](https://leetcode.com/problems/power-of-two/)
10. [https://leetcode.com/problems/reverse-bits/](https://leetcode.com/problems/reverse-bits/)
11. [https://leetcode.com/problems/power-of-four/](https://leetcode.com/problems/power-of-four/)

