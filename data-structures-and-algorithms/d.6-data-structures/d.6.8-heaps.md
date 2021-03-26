# D.6.8: Heaps

## Introduction

Heap is a data structure that is useful for keeping track of the minimum or maximum out of a changing collection of elements. Without heaps we would need linear time to keep track of the max or min element in a changing collection, but with heaps we only need log time. Heaps are especially useful for implementing priority queues, commonly used in public services or hospitals.

## Helpful Resources

1. Read pages 115-116 in the [Cracking the Coding Interview PDF](../d.0-dsa-overview.md#resources).
2. Watch Heap Intro Part 1 \(heap structure, how to add element to heap\) video [here](https://www.youtube.com/watch?v=c1TpLRyQJ4w).
   1. Watch Heap Intro Part 2 \(how to remove element from heap\) video [here](https://www.youtube.com/watch?v=ijfPvX2qYOQ&t=0s).
   2. Watch Heap Intro Part 3 \(how to represent heap as array\) video [here](https://www.youtube.com/watch?v=fJORlbOGm9Y&t=0s).
3. MIT's Heap introduction slides [here](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/MIT6_006F11_lec04.pdf) show a more detailed description of heap operations.

## Summary \(What do we need to know?\)

In summary, we should remember 3 primary operations of heaps, and how heap sort works.

1. Pop: Heaps provide efficient extraction \(`O(logn)`\) of min or max elements in a mutable collection
   1. In code, extraction is done with the `heappop` method of the `heapq` data structure provided by Python [here](https://docs.python.org/3/library/heapq.html).
2. Push: Adding an element to a heap is `O(logn)` because it involves 1 "heapify" call to "fix" the order of the heap after adding the element
   1. In code, adding to a heap is done with `heappush` method of `heapq`.
3. Heapify \(create heap from array\): Creating a heap is `O(n)`
   1. In code, heap creation is done with `heapify` method of `heapq`. 
4. Heap sort runs in `O(nlogn)` time, but in practice is slower than Merge Sort

## Tips

1. Python's `heapq` data structure is a min heap by default. To use `heapq` as a max heap with numerical values, multiply every number you insert by -1 on push and pop.
2. We may wish to sort elements by certain numerical values in a heap, but store associated payloads along with those numerical values. In these situations we can insert tuples \(e.g. `(x, y)`\) into our heap, where `x` is the value to sort by and `y` is the associated payload. For example, in the K Closest Points to Origin problem below, we could store `(dist_to_origin, coordinates)` elements in our heap.

## Exercises

Please use the [Python `heapq` library](https://docs.python.org/3/library/heapq.html) to utilise heaps in code.

### Pre-Class

1. [https://leetcode.com/problems/last-stone-weight/](https://leetcode.com/problems/last-stone-weight/)

### Part 1

1. [https://leetcode.com/problems/kth-largest-element-in-a-stream/](https://leetcode.com/problems/kth-largest-element-in-a-stream/)
   1. Hint: What's the most efficient way to get the k-th largest element in a heap of size k? Would we use a min-heap or max-heap?
2. [https://leetcode.com/problems/k-closest-points-to-origin/](https://leetcode.com/problems/k-closest-points-to-origin/)
3. [https://leetcode.com/problems/sort-characters-by-frequency/](https://leetcode.com/problems/sort-characters-by-frequency/)

### Part 2

1. [https://leetcode.com/problems/top-k-frequent-elements/](https://leetcode.com/problems/top-k-frequent-elements/)
2. [https://leetcode.com/problems/kth-largest-element-in-an-array/](https://leetcode.com/problems/kth-largest-element-in-an-array/)

### Part 3

1. [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
2. [https://leetcode.com/problems/top-k-frequent-words/](https://leetcode.com/problems/top-k-frequent-words/)

