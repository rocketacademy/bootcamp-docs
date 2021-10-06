# Big-O

## Introduction

There are typically 3 aspects of DS&A problems: Correctness, Complexity, and Code Quality. Correctness is whether the algorithm can generate the right answer. Complexity is whether the candidate understands how much time and space the algorithm needs to complete, and whether this "time and space complexity" is optimal. Code Quality is how well the candidate's code communicates its intention. Code quality may not be important for automated screening interviews, but will be a factor in live coding interviews. This module focuses on complexity.

## Time and Space Complexity

As the names suggest, time and space complexity measure the relative time and space algorithms need to complete. Both time and space complexity are measured in what we call "Big-O Notation" \(pronounced "big oh"\), which is a notation specific to Computer Science and adopted in the SWE industry. Big-O Notation gives us a way to describe the time or space complexity of an algorithm relative to its inputs. For example, if my input had `n` elements and my algorithm ran in `O(n^2)` \(pronounced "oh of n squared"\) time, I could expect this algorithm to take longer to complete than a different algorithm that solves the same problem in `O(n)` \("oh of n"\) time.

The goal of measuring time and space complexity is to evaluate whether we have the most optimal algorithm, not to measure a specific number of seconds or gigabytes our algorithms need. By optimising the relative time and space complexity of an algorithm, we should also have optimised the number of seconds or gigabytes it may need.

## Big-O Notation

We first explain the syntax of Big-O notation, then share common Big-O complexities and examples of algorithms for each of those complexities. Big-O complexities apply to both time and space calculations. Do not worry if you are unfamiliar with the algorithms we share. We will review each of them in due time as we progress through RA's DS&A curriculum.

### Syntax

Big-O Notation consists of a big O, parentheses, and a variation on a mathematical variable, most commonly `n`, sometimes `m` also if there are multiple inputs or variables that need to be represented. These variations are typically orders of `n`, for example valid Big-O notations in order of increasing complexity are `O(1)` \(constant\), `O(logn)` \(logarithmic\), `O(n)` \(linear\), `O(nlogn)` \("n log n"\), `O(n^2)` \(polynomial, where we can replace the 2 with any number bigger than 2\), and `O(2^n)` \(exponential\).  

When expressing Big-O notation, we only consider the variable with the largest order of complexity, and remove any summed variables of lower complexity. When evaluating the variable of largest order of complexity, we also remove any coefficients attached to that variable, since those coefficients make minimal difference in the complexity when we consider large numbers where the complexity matters. For example, if I determined that my algorithm ran in complexity of `2n^2 + n` time, I would remove the `n` because it is of lower complexity than `n^2`, and I would remove the 2 in `2n^2` because it is a coefficient. I would then be left with `O(n^2)`.

### Big-O Order of Complexity

From the following chart by [Geeks for Geeks](https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/), we can visualise the differences in complexity for various Big-O values from `O(1)` to `O(n!)`. This shows us that there is indeed a large difference between each level of Big-O complexity.

![](../.gitbook/assets/image%20%284%29.png)

### `O(1)`

#### Description

Also known as constant time, `O(1)` time complexity means that regardless of how big the input of an algorithm is, the algorithm will still be able to complete in a fixed number of iterations.

`O(1)` space complexity means regardless of input size, the algorithm can complete using a fixed amount of additional space, e.g. a fixed number of variables or data structure size excluding the input data.

#### Example: Find the median element in a sorted array

Given a sorted input array of length `n`, find the median element of the array. Median refers to the element that is ranked `n/2` in the sorting order. One might be tempted to do a for loop over the array and return when the index is `n/2`, but this would be an `O(n)` algorithm because the number of iterations is linear based on `n`. Instead, since the array is sorted, we can access the middle element directly with `arr[len(arr)/2]`. This operation does not depend on the size of `n`, since the array length is readily available and accessing elements in an array by index is a single operation. This algorithm that immediately retrieves the middle element by index runs in `O(1)` time.

The above algorithm also runs in `O(1)` space complexity because it does not require additional variables other than the input array.

### `O(logn)`

#### Description

Also known as logarithmic or logn \("log n"\) time, `O(logn)` complexity means that the algorithm will need to perform a number of operations proportional to the log of the size of the input. Without getting into too much math, `log(n)` represents the exponent necessary to raise a constant number \(typically 2 or 10, the exact number doesn't matter in Big-O\) to the value of `n`. For example, assuming a log of base 2, `log(2)` would be 1, and `log(1024)` would be 10. Notice how even though the value of `n` increased by 1000+ between the 2 examples, the value of `log(n)` only increased by roughly 10. Thus `log(n)` is significantly less than `n` at large numbers. 

#### Example: Find the element with value `x` in a sorted array

Given a sorted input array of length `n`, find the position of an element with value `x`. A naïve solution would be to iterate over every element in the array until we find `x`, but this would run in `O(n)` or linear time because we would need to search through `n` elements at most, in the event that `x` were at the end of the array. A more optimal solution would be to perform binary search over the array, which runs in `O(logn)` time. Binary search works by splitting a sorted array into halves recursively until it finds the relevant element. This would require us to compare at most on the order of `log(n)` elements. For example, if my input array were numbers from 1 to 1000, e.g. `[1, 2, ..., 1000]`, to perform binary search on this array, I would first look for the middle element at index `n/2`, and compare it with `x`. If `x == arr[n/2]`, return `n/2` as the index of `x`. If `x > arr[n/2]`, repeat the same process on the right half of `arr`. If `x < arr[n/2]`, repeat the same process on the left half of `arr`. Read more about binary search [here](https://www.geeksforgeeks.org/binary-search/).

The above algorithm runs in `O(1)` space because it does not require additional variables beyond the input elements.

### `O(n)`

#### Description

Known as linear time, `O(n)` complexity means that the algorithm needs to inspect at most each element of the input a constant number of times. 

#### Example: Find the largest number in an unsorted array

Given an unsorted input array of numbers of length `n`, find the position of the largest number. We cannot perform binary search on this array because it is unsorted and we do not know the value of the largest number. If the array were sorted, we could extract the last element of the array which would be the largest number in `O(1)` time. The fastest sorting algorithms take `O(nlogn)` time complexity. Thus the best method we have is to iterate over each element of the array linearly \(i.e. a for loop\) until we reach the end of the array and confirm the largest number, which would take `O(n)` time complexity.

The above algorithm runs in `O(1)` space because it does not require additional variables beyond the input elements.

### `O(nlogn)`

#### Description

`O(nlogn)` complexity typically involves performing a binary-search-like operation for every element in the input.

#### Example: Sort an unsorted array of numbers

It's rare to invent a sorting algorithm from scratch. Computer scientists have been working on efficient sorting algorithms since the start of the field, and so far they have concluded that [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort) is the fastest sorting algorithm \(in the worst case\) that exists today, and it runs in `O(nlogn)` time. Thus whenever we are given a problem to sort an unordered list, our first instinct should be to think that this could run in `O(nlogn)` time.

Companies rarely ask candidates to implement sorting algorithms such as merge sort in interviews because it's the kind of answer that can be memorised. It doesn't hurt to memorise how common sorting algorithms such as merge sort work, but there's no need to spend too much time on them other than to understand how they work.

The above Merge Sort algorithm runs in `O(n)` space because at any given time it requires temporary storage space on the order of `n` elements in addition to the input data.

### `O(n^2)`

#### Description

`O(n^2)` complexity typically involves nested loops over an input collection. 

#### Example: Find all pairs of numbers in an array

Given an array of numbers, find all unordered pairs of those numbers. This problem requires us to loop through each element of the array, and for each element of the array, loop through each other element of the array. This is a classic `O(n^2)`-complexity algorithm.

The above algorithm requires `O(n)` space during calculation, but its output will require space proportional to the size of the output, roughly nC2 or "n choose 2".

### `O(2^n)`

#### Description

Also known as exponential complexity, `O(2^n)` complexity \(and any `O(C^n)` complexity where `C` is a constant\) is the highest order of complexity \(without combining it with itself or others above\) and typically bad. If you find that your algorithm runs in exponential complexity in a DS&A interview, there is probably a more efficient algorithm to solve the problem.

#### Example: Calculate the n-th Fibonacci Number

The Fibonacci sequence is defined as `Fib(n) = Fib(n-1) + Fib(n-2)`, where `Fib(0) == 1` and `Fib(1) == 1`. The naïve way to solve Fibonacci is to write a recursive algorithm that calculates `Fib(n)` by calling `Fib(n-1)` and `Fib(n-2)`. However, this results in 2 operations per `Fib` operation, and because each `Fib` operation runs recursively, we end up with `2^n` operations because it would take `n` levels of `Fib` operations to reach the base cases of `Fib(0)` and `Fib(1)`. Interestingly, this problem can be solved in `O(n)` time complexity. See [here](https://stackoverflow.com/questions/18172257/efficient-calculation-of-fibonacci-series) for solution. 

The `O(2^n)` time complexity algorithm above also requires `O(2^n)` space complexity because at any given time, there will be up to `O(2^n)` simultaneous function calls, thus `O(2^n)` intermediate Fib calculations in memory. However, the optimal `O(n)` time complexity solution only requires `O(1)` space complexity because it only uses a finite number of variables to calculate `Fib(n)`, regardless of `n`.

