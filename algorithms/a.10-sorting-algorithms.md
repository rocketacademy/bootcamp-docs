# A.10: Sorting Algorithms

## Introduction

This module explores various ways to sort unsorted arrays of numbers. While our examples only use numbers, the same methods can be used to sort arrays of arbitrary data types according to arbitrary sort order.

We will rarely write sorting algorithms as software engineers because most languages have built-in sorting functions, and DS\&A interview questions rarely test sorting algorithms because sorting algorithms are relatively easily memorised. However, we will learn sorting algorithms because they are a common-enough concept in DS\&A and the strategies behind sorting algorithms can be relevant to how we approach other DS\&A problems.

There is no need to memorise the below sorting algorithms' implementation. Just understand how they work such that you could describe their logic well-enough to write pseudocode.

## `Naive` Sorting Algorithms

### Selection Sort

* Runtime: _**O(n²)**_
* Space: _**O(1)**_
* Sort In-Place: Yes
* Stable: No

#### Attributes

* good space complexity
* simple code
* slow for large lists / fast for small lists

#### Selection Sort Pseudo Code

```
for each element in the array
  consider the current element as the least value
  for each element in the rest of the array forward from the current element
    look for an element that is less
      if it's less, set the inner loop element as the least value
  swap the least value and the current element
```

#### Selection Sort

```
from pprint import pprint

A = [64, 25, 12, 22, 11]

def selection_sort(arr):

    # traverse through all array elements
    for outer_idx in range(len(arr)):

        # given current point in array
        # mark that value as min
        min_idx = outer_idx

        # start inner loop
        # loop starting at outer_idx to end
        for i in range(outer_idx+1, len(arr)):

            # if a lower value is found
            if arr[min_idx] > arr[i]:
                min_idx = i

        # loop set a min value
        # swap the found minimum element with
        # the first element
        arr[outer_idx], arr[min_idx] = arr[min_idx], arr[outer_idx]
    return arr

result = selection_sort(A)
print ("Sorted array")
pprint( result)
```

#### Selection Sort with Prints

```
from pprint import pprint

A = [64, 25, 12, 22, 11]

def selection_sort(arr):

    # Traverse through all array elements
    for outer_idx in range(len(arr)):

        # given current point in array
        # mark that value as min
        min_idx = outer_idx
        print(f'set min value for location: {outer_idx} : {arr[outer_idx]}')

        # start inner loop
        # loop starting at outer_idx to end
        print('starting inner loop')
        for i in range(outer_idx+1, len(arr)):

            # if a lower value is found
            if arr[min_idx] > arr[i]:
                print(f'found a lower value: {arr[i]}')
                min_idx = i

            print('*******************')

        # loop set a min value
        # swap the found minimum element with
        # the first element
        print(f'swapping {arr[outer_idx]} with {arr[min_idx]}')
        arr[outer_idx], arr[min_idx] = arr[min_idx], arr[outer_idx]
        print('done with outer loop')
        print('-------------------')
    return arr

result = selection_sort(A)
print ("Sorted array")
pprint( result)
```

#### Further Reading

{% embed url="https://www.youtube.com/watch?v=xWBP4lzkoyM" %}

{% embed url="https://www.youtube.com/watch?v=g-PGLbMth_g" %}

[https://www.algostructure.com/sorting/selectionsort.php](https://www.algostructure.com/sorting/selectionsort.php)

[https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/](https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/)

[https://www.programiz.com/dsa/selection-sort](https://www.programiz.com/dsa/selection-sort)

[https://www.tutorialspoint.com/data\_structures\_algorithms/selection\_sort\_algorithm.htm](https://www.tutorialspoint.com/data\_structures\_algorithms/selection\_sort\_algorithm.htm)

[https://en.wikipedia.org/wiki/Insertion\_sort](https://en.wikipedia.org/wiki/Insertion\_sort)

### Insertion Sort

* Runtime: _**O(n²)**_
* Space: _**O(1)**_
* Sort In-Place: Yes
* Stable: Yes

#### Attributes

* good space complexity
* simple code
* slow for large lists / fast for small lists
* good for nearly sorted lists - will exit early if list is done ("adaptive")
* can sort while new items are being added to list ("online")

#### Insertion Sort Pseudo Code

```
begin with the second element
for each element in the array, starting with the second element
  consider the current element as "removed"
  look backwards through the array starting from the current element
    if the current element is more than the inner loop value
      move the current element into the inner loop location
    if the inner loop element is less than the current element, end the loop
```

#### Insertion Sort

```
from pprint import pprint

A = [64, 25, 12, 22, 11]

def insertion_sort(arr):

    # Traverse through the array starting with the 2nd element
    for i in range(1, len(arr)):

        # set the current element as key
        key = arr[i]

        # look backwards through the array
        # move every value forward by one until it finds
        # a value smaller than key
        j = i-1
        while j >= 0 and key < arr[j] :
                # move j ahead one
                arr[j + 1] = arr[j]
                j -= 1
        # put key in the space we found using the loop
        arr[j + 1] = key

    return arr

result = insertion_sort(A)
print ("Sorted array")
pprint( result)
```

#### Insertion Sort with Prints

```
from pprint import pprint

A = [64, 25, 12, 22, 11]

def insertion_sort(arr):

    # Traverse through the array starting with the 2nd element
    for i in range(1, len(arr)):

        print('****************************')
        # set the current element as key
        key = arr[i]
        print(f'removed: {key}')

        # look backwards through the array
        # move every value forward by one until it finds
        # a value smaller than key
        print('looking back ')
        j = i-1
        while j >= 0 and key < arr[j] :
                # move j ahead one
                print(f'putting {arr[j]} at: {j+1}')
                arr[j + 1] = arr[j]
                j -= 1
        # put key in the space we found using the loop
        print(f'putting *key* {key} at: {j+1}')
        arr[j + 1] = key

    return arr

result = insertion_sort(A)
print ("Sorted array")
pprint( result)
```

#### Further Reading

{% embed url="https://www.youtube.com/watch?v=OGzPmgsI-pQ" %}

{% embed url="https://www.youtube.com/watch?v=JU767SDMDvA" %}

[https://www.algostructure.com/sorting/insertionsort.php](https://www.algostructure.com/sorting/insertionsort.php)

[https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/](https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/)

[https://www.programiz.com/dsa/insertion-sort](https://www.programiz.com/dsa/insertion-sort)

[https://www.geeksforgeeks.org/insertion-sort/](https://www.geeksforgeeks.org/insertion-sort/)

### Bubble Sort

* Runtime: _**O(n²)**_
* Space: _**O(1)**_
* Sort In-Place: Yes
* Stable: Yes

#### Attributes

* good space complexity
* simple code
* slow for large lists / fast for small lists

Bubble sort is considered the "beginner's" sorting algorithm. It is slow and lacks the features of other naive algorithms. However, the pseudocode is simple and so it is used to introduce concepts of sorting algorithms.

#### Bubble Sort Pseudo Code

```
for each element in an array
  starting with the current element and
  look at all elements after it
    compare the inner element with it's neighbor
    if the inner elemnt is larger
      swap them
```

#### Bubble Sort

```
from pprint import pprint

A = [64, 25, 12, 22, 11]

def bubble_sort(arr):

    # Traverse through the array
    for i in range(len(arr)):

        # loop to compare array elements
        for j in range(0, len(arr) - i - 1):

            # compare two adjacent elements
            # change > to < to sort in descending order
            if arr[j] > arr[j + 1]:

                # swapping elements if elements
                # are not in the intended order
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

    return arr

result = bubble_sort(A)
print ("Sorted array")
pprint( result)
```

#### Bubble Sort with Print

```
from pprint import pprint

A = [64, 25, 12, 22, 11]

def bubble_sort(arr):

    # Traverse through the array
    for i in range(len(arr)):

        print('***************************')
        print(f'at: {i}')
        # loop to compare array elements
        for j in range(0, len(arr) - i - 1):

            # compare two adjacent elements
            # change > to < to sort in descending order
            print(f'comparing: {j} to {j+1} {arr}')
            if arr[j] > arr[j + 1]:

                print(f'its larger, swapping : {arr[j]} to {arr[j+1]}')
                # swapping elements if elements
                # are not in the intended order
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

    return arr

result = bubble_sort(A)
print ("Sorted array")
pprint( result)
```

#### What's the Difference Between Insetion Sort and Bubble Sort?

The main difference is that insertion sort finds an element's place _in the already sorted list_, and bubble sort does not. This behavior is why insertion sort is "online" and new unsorted things can be added to the end of the array.

See more here: [https://stackoverflow.com/a/17271911/271932](https://stackoverflow.com/a/17271911/271932)

#### Further Reading

{% embed url="https://www.youtube.com/watch?v=nmhjrI-aW5o" %}

{% embed url="https://www.youtube.com/watch?v=xli_FI7CuzA" %}

[https://www.algostructure.com/sorting/bubblesort.php](https://www.algostructure.com/sorting/bubblesort.php)

[https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)

[https://www.programiz.com/dsa/bubble-sort](https://www.programiz.com/dsa/bubble-sort)

[https://www.geeksforgeeks.org/bubble-sort/](https://www.geeksforgeeks.org/bubble-sort/)

[https://en.wikipedia.org/wiki/Bubble\_sort](https://en.wikipedia.org/wiki/Bubble\_sort)

## Divide and Conquer Sorting Algorithms

### Merge Sort

* Runtime: _**O(nlogn)**_
* Space: _**O(n)**_
* Sort In-Place: No
* Stable: No

#### Attributes

* fast
* usually implemented recursively

#### Divide and Conquer

Merge sort is a divide and conquer sorting algorithm, which just means that the sorting happens by splitting up the original array into smaller and smaller pieces until it's completely broken apart _before_ sorting. The sorting happens each time the pieces are combined back together.

#### Merge Sort Pseudo Code

```
Divide the array into half

Give each half to the merge_sort function

The recurence relation is that the array parameter has one or less items in it.

Capture the return value of the merge_sort function.

Once a return value has been captured the merge_sort function can begin recursing up.

Run the merge function. Give the merge function the two arrays.

The merge function will combine and sort them.

For every value in returned left_array, compare it to returned right_array
  if a value in left_array is less than a value in right_array
    put the left_array value in the output array
  else if the value in left_array is more than a value in right_array
    put the right_array value in the output array
```

#### Merge Sort

```
from pprint import pprint

A = [64, 25, 12, 22, 11]

def merge_sort(arr):
    if len(arr) > 1:

         # Finding the mid of the array
        mid = len(arr)//2

        # Dividing the array elements
        L = arr[:mid]

        # into 2 halves
        R = arr[mid:]

        # Sorting the first half
        leftResult = merge_sort(L)

        # Sorting the second half
        rightResult = merge_sort(R)

        # merge the results of the recursive merge_sort calls
        return merge(leftResult,rightResult)
    else:
        return arr

def merge(L,R):

    # create an empty array
    arr = [None] * (len(L) + len(R))

    i = j = k = 0

    # Copy data to temp arrays L[] and R[]
    while i < len(L) and j < len(R):
        if L[i] < R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1

    # Checking if any element was left
    while i < len(L):
        arr[k] = L[i]
        i += 1
        k += 1

    while j < len(R):
        arr[k] = R[j]
        j += 1
        k += 1

    return arr


result = merge_sort(A)
print ("Sorted array")
pprint( result)
```

{% embed url="https://www.youtube.com/watch?v=JSceec-wEyw" %}

{% embed url="https://www.youtube.com/watch?v=4VqmGXwpLqc" %}

{% embed url="https://www.youtube.com/watch?v=1sdEchFsL0Y" %}

{% embed url="https://www.youtube.com/watch?v=Ns7tGNbtvV4" %}

[https://www.programiz.com/dsa/merge-sort](https://www.programiz.com/dsa/merge-sort)

[https://www.algostructure.com/sorting/mergesort.php](https://www.algostructure.com/sorting/mergesort.php)

[https://www.geeksforgeeks.org/merge-sort/](https://www.geeksforgeeks.org/merge-sort/)

#### `O(nlogn)` Time, `O(1)` Space Sorting Algorithms

### Quick Sort

https://www.youtube.com/watch?v=0SkOjNaO1XY\&t=998s

1. `O(n^2)` time, `O(1)` space sorting algorithm
2. Average case time complexity is `O(nlogn)`, so some prefer it over Merge Sort
3. [https://www.geeksforgeeks.org/quick-sort/](https://www.geeksforgeeks.org/quick-sort/)

#### `O(nlogn)` Time, `O(n)` Space Sorting Algorithms

### Heap Sort

1. `O(nlogn)` time, `O(1)` space sorting algorithm
2. On average slower and less commonly used than Merge Sort and Quick Sort
3. [https://www.geeksforgeeks.org/heap-sort/](https://www.geeksforgeeks.org/heap-sort/)

{% hint style="warning" %}
No need to cover this code right now- we haven't seen the heap data structure yet. We'll look at this again when we cover heaps, but this is another example of a sorting algorithm that runs in `O(nlogn)` time.
{% endhint %}

## Non-Comparison Sorting Algorithms

### Radix Sort
