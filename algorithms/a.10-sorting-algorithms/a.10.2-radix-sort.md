# A.10.2: Radix Sort

## Non-Comparison Sorting Algorithms

> \[Radix Sort] is a non-comparative sorting algorithm, meaning that it doesn't sort a collection by comparing its individual elements, but rather uses the inherent nature of the data its sorting to sort faster - it sorts data based on their _radix_.
>
> Comparative sorting algorithms have the best case time complexity of _O(nlogn)_, which is comparatively worse to _linear execution time_ (_O(n+k)_) of non-comparative algorithms.

The following examples are taken from [https://stackabuse.com/radix-sort-in-python/](https://stackabuse.com/radix-sort-in-python/).

## Counting Sort

* Runtime: _**O(n+k)**_

**k** is the highest integer in the array.

```python
def countingSort(inputArray):
    # Find the maximum element in the inputArray
    maxEl = max(inputArray)

    countArrayLength = maxEl+1

    # Initialize the countArray with (max+1) zeros
    countArray = [0] * countArrayLength

    # Step 1 -> Traverse the inputArray and increase
    # the corresponding count for every element by 1
    for el in inputArray:
        countArray[el] += 1

    # Step 2 -> For each element in the countArray,
    # sum up its value with the value of the previous
    # element, and then store that value
    # as the value of the current element
    for i in range(1, countArrayLength):
        countArray[i] += countArray[i-1]

    # Step 3 -> Calculate element position
    # based on the countArray values
    outputArray = [0] * len(inputArray)
    i = len(inputArray) - 1
    while i >= 0:
        currentEl = inputArray[i]
        countArray[currentEl] -= 1
        newPosition = countArray[currentEl]
        outputArray[newPosition] = currentEl
        i -= 1

    return outputArray

inputArray = [2,2,0,6,1,9,9,7]
print("Input array = ", inputArray)

sortedArray = countingSort(inputArray)
print("Counting sort result = ", sortedArray)
```

## Radix Sort

* Runtime: _**O(d(n+k))**_

**d** is the number of times counting sort is run.

Use the numbers in each "radix" or place to know how to sort the array.

```python
def countingSortForRadix(inputArray, placeValue):
    # We can assume that the number of digits used to represent
    # all numbers on the placeValue position is not grater than 10
    countArray = [0] * 10
    inputSize = len(inputArray)

    # placeElement is the value of the current place value
    # of the current element, e.g. if the current element is
    # 123, and the place value is 10, the placeElement is
    # equal to 2
    for i in range(inputSize):
        placeElement = (inputArray[i] // placeValue) % 10
        countArray[placeElement] += 1

    for i in range(1, 10):
        countArray[i] += countArray[i-1]

    # Reconstructing the output array
    outputArray = [0] * inputSize
    i = inputSize - 1
    while i >= 0:
        currentEl = inputArray[i]
        placeElement = (inputArray[i] // placeValue) % 10
        countArray[placeElement] -= 1
        newPosition = countArray[placeElement]
        outputArray[newPosition] = currentEl
        i -= 1

    return outputArray

def radixSort(inputArray):
    # Step 1 -> Find the maximum element in the input array
    maxEl = max(inputArray)

    # Step 2 -> Find the number of digits in the `max` element
    D = 1
    while maxEl > 0:
        maxEl /= 10
        D += 1

    # Step 3 -> Initialize the place value to the least significant place
    placeVal = 1

    # Step 4
    outputArray = inputArray
    while D > 0:
        outputArray = countingSortForRadix(outputArray, placeVal)
        placeVal *= 10
        D -= 1

    return outputArray

input = [2,20,61,997,1,619]
print(input)
sorted = radixSort(input)
print(sorted)
```

## Additional Resources

1. [Video introduction to Counting Sort](https://www.youtube.com/watch?v=OKd534EWcdk)
2. [Video introduction to Radix Sort](https://www.youtube.com/watch?v=XiuSW\_mEn7g)
