# D.10: Common Patterns

## Introduction

This module reviews common algorithmic patterns in DS&A interview problems.

## 

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
2. Please read pages 124-128 on Bit Manipulation in [CTCI](../d.0-module-d-overview.md#resources).

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

