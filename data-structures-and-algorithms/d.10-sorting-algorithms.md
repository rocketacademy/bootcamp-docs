# D.10: Sorting Algorithms

## Introduction

This module explores various ways to sort unsorted arrays of numbers. While our examples only use numbers, the same methods can be used to sort arrays of arbitrary data types according to arbitrary sort order.

We will rarely write sorting algorithms as software engineers because most languages have built-in sorting functions, and DS&A interview questions rarely test sorting algorithms because sorting algorithms are relatively easily memorised. However, we will learn sorting algorithms because they are a common-enough concept in DS&A and the strategies behind sorting algorithms can be relevant to how we approach other DS&A problems.

There is no need to memorise the below sorting algorithms' implementation. Just understand how they work such that you could describe their logic well-enough to write pseudocode.

## `O(n^2)` Time, `O(1)` Space Sorting Algorithms

### Selection Sort

1. `O(n^2)` time, `O(1)` space sorting algorithm
2. [https://www.tutorialspoint.com/data\_structures\_algorithms/selection\_sort\_algorithm.htm](https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm)

### Insertion Sort

1. `O(n^2)` time, `O(1)` space sorting algorithm
2. [https://www.geeksforgeeks.org/insertion-sort/](https://www.geeksforgeeks.org/insertion-sort/)

### Bubble Sort

1. `O(n^2)` time, `O(1)` space sorting algorithm
2. [https://www.geeksforgeeks.org/bubble-sort/](https://www.geeksforgeeks.org/bubble-sort/)

### Quick Sort

1. `O(n^2)` time, `O(1)` space sorting algorithm
2. Average case time complexity is `O(nlogn)`, so some prefer it over Merge Sort
3. [https://www.geeksforgeeks.org/quick-sort/](https://www.geeksforgeeks.org/quick-sort/)

## `O(nlogn)` Time, `O(n)` Space Sorting Algorithms

### Merge Sort

1. `O(nlogn)` time, `O(n)` space sorting algorithm
2. Commonly used sorting algorithm
3. [https://www.geeksforgeeks.org/merge-sort/](https://www.geeksforgeeks.org/merge-sort/) 

## `O(nlogn)` Time, `O(1)` Space Sorting Algorithms

### Heap Sort

1. `O(nlogn)` time, `O(1)` space sorting algorithm
2. On average slower and less commonly used than Merge Sort and Quick Sort
3. [https://www.geeksforgeeks.org/heap-sort/](https://www.geeksforgeeks.org/heap-sort/)

{% hint style="warning" %}
No need to cover this code right now- we haven't seen the heap data structure yet. We'll look at this again when we cover heaps, but this is another example of a sorting algorithm that runs in `O(nlogn)` time.
{% endhint %}

