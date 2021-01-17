# D.3: Complexity Analysis, Big-O Notation

## Introduction

There are typically 3 aspects of DS&A problems: Correctness, Complexity, and Code Quality. Correctness is whether the algorithm can generate the right answer. Complexity is whether the candidate understands how much time and space the algorithm needs to complete, and whether this "time and space complexity" is optimal. Code Quality is how well the candidate's code communicates its intention. Code quality may not be important for automated screening interviews, but will be a factor in live coding interviews. This module focuses on complexity.

## Time and Space Complexity

As the names suggest, time and space complexity measure the relative time and space algorithms need to complete. Both time and space complexity are measured in what we call "Big-O Notation" \(pronounced "big oh"\), which is a notation specific to Computer Science and adopted in the SWE industry. Big-O Notation gives us a way to describe the time or space complexity of an algorithm relative to its inputs. For example, if my input had `n` elements and my algorithm ran in `O(n^2)` \(pronounced "oh of n squared"\) time, I could expect this algorithm to take longer to complete than a different algorithm that solves the same problem in `O(n)` \("oh of n"\) time.

The goal of measuring time and space complexity is to evaluate whether we have the most optimal algorithm, not to measure a specific number of seconds or gigabytes our algorithms need. By optimising the relative time and space complexity of an algorithm, we should also have optimised the number of seconds or gigabytes it may need.

## Big-O Notation

We first explain the syntax of Big-O notation, then share common Big-O complexities and examples of algorithms for each of those complexities. Big-O complexities apply to both time and space calculations. Do not worry if you are unfamiliar with the algorithms we share. We will review each of them in due time as we progress through RA's DS&A curriculum.

### Syntax

Big-O Notation consists of a big O, parentheses, and a variation on a mathematical variable, most commonly `n`, sometimes `m` also if there are multiple inputs or variables that need to be represented. These variations are typically orders of `n`, for example valid Big-O notations in order of increasing complexity are `O(1)` \(constant time\), `O(logn)` \(logarithmic time\), `O(n)` \(linear time\), `O(nlogn)` \("n log n time"\), `O(n^2)` \(polynomial or n squared time, where we can replace the 2 with any number bigger than 2\), and `O(2^n)` \(exponential time\).  

When expressing Big-O notation, we only consider the variable with the largest order of complexity, and remove any summed variables of lower complexity. When evaluating the variable of largest order of complexity, we also remove any coefficients attached to that variable, since those coefficients make minimal difference in the complexity when we consider large numbers where the complexity matters. For example, if I determined that my algorithm ran in complexity of `2n^2 + n` time, I would remove the `n` because it is of lower complexity than `n^2`, and I would remove the 2 in `2n^2` because it is a coefficient. I would then be left with `O(n^2)`.

### `O(1)`

#### Description

Also known as constant time, `O(1)` complexity means that regardless of how big the input of an algorithm is, the algorithm will still be able to complete in a fixed number of iterations. 

#### Example: Find the median element in a sorted array

Given a sorted input array of length `n`, find the median element of the array. Median refers to the element that is ranked `n/2` in the sorting order. One might be tempted to do a for loop over the array and return when the index is `n/2`, but this would be an `O(n)` algorithm because the number of iterations is linear based on `n`. Instead, since the array is sorted, we can access the middle element directly with `arr[len(arr)/2]`. This operation does not depend on the size of `n`, since the array length is readily available and accessing elements in an array by index is a single operation. This algorithm that immediately retrieves the middle element by index runs in `O(1)` time.

### `O(logn)`

#### Description

Also known as logarithmic or logn \("log n"\) time, `O(logn)` complexity means that the algorithm will need to perform a number of operations proportional to the log of the size of the input. Without getting into too much math, `log(n)` represents the exponent necessary to raise a constant number \(typically 2 or 10, the exact number doesn't matter in Big-O\) to the value of `n`. For example, assuming a log of base 2, `log(2)` would be 1, and `log(1024)` would be 10. Notice how even though the value of `n` increased by 1000+ between the 2 examples, the value of `log(n)` only increased by roughly 10. Thus `log(n)` is significantly less than `n` at large numbers. 

#### Example: Find the element with value `x` in a sorted array

Given a sorted input array of length `n`, find the position of an element with value `x`. A naïve solution would be to iterate over every element in the array until we find `x`, but this would run in `O(n)` or linear time because we would need to search through `n` elements at most, in the event that `x` were at the end of the array. A more optimal solution would be to perform binary search over the array, which runs in `O(logn)` time. Binary search works by splitting a sorted array into halves recursively until it finds the relevant element. This would require us to compare at most on the order of `log(n)` elements. For example, if my input array were numbers from 1 to 1000, e.g. `[1, 2, ..., 1000]`, to perform binary search on this array, I would first look for the middle element at index `n/2`, and compare it with `x`. If `x == arr[n/2]`, return `n/2` as the index of `x`. If `x > arr[n/2]`, repeat the same process on the right half of `arr`. If `x < arr[n/2]`, repeat the same process on the left half of `arr`. Read more about binary search [here](https://en.wikipedia.org/wiki/Binary_search_algorithm#:~:text=In%20computer%20science%2C%20binary%20search,middle%20element%20of%20the%20array.).

### `O(n)`

#### Description

Known as linear time, `O(n)` complexity means that the algorithm needs to inspect at most each element of the input a constant number of times. 

#### Example: Find the largest number in an unsorted array

Given an unsorted input array of numbers of length `n`, find the position of the largest number. We cannot perform binary search on this array because it is unsorted and we do not know the value of the largest number. If the array were sorted, we could extract the last element of the array which would be the largest number in `O(1)` time. The fastest sorting algorithms take `O(nlogn)` time complexity. Thus the best method we have is to iterate over each element of the array linearly \(i.e. a for loop\) until we reach the end of the array and confirm the largest number, which would take `O(n)` time complexity.



### 

