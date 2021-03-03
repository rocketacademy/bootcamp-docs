# D.10.4: Binary Search

## Introduction

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

## Exercises

1. [https://leetcode.com/problems/binary-search/](https://leetcode.com/problems/binary-search/)
2. [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/)
3. [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/)
4. [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
5. [https://leetcode.com/problems/search-insert-position/](https://leetcode.com/problems/search-insert-position/)
6. [https://leetcode.com/problems/valid-perfect-square/](https://leetcode.com/problems/valid-perfect-square/)
7. [https://leetcode.com/problems/first-bad-version/](https://leetcode.com/problems/first-bad-version/)

