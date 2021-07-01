# D.10: Bit Manipulation

## Bit Manipulation

Bit manipulation is commonly taught in core computer science courses to help students understand how numbers are represented and manipulated by computers. Some companies use bit manipulation in their interview processes.

1. Please read about the 6 main bitwise operators `&`, `|`, `~`, `^`, `<<`, and `>>` [here](https://code.tutsplus.com/articles/understanding-bitwise-operators--active-11301). These operators can be used in Python to perform bitwise operations.
2. Please read pages 124-128 on Bit Manipulation in [CTCI](d.0-dsa-overview.md#resources).

### Hamming Codes

A Hamming code is an error correction algorithm that uses bit manipulation to check if a set of data has errors \(specifically binary data\) in O\(logn\) space and time.

These videos give a good intuition of the usefulness of bit manipulation as it relates to binary data.

{% embed url="https://www.youtube.com/watch?v=X8jsijhllIA" %}

{% embed url="https://www.youtube.com/watch?v=b3NxrZOu\_CE" %}

Hamming codes have a Hamming distance of 3- The algorithm can detect up to three errors per block.

## Exercises

### Pre-Class

1. [https://leetcode.com/problems/decode-xored-array/](https://leetcode.com/problems/decode-xored-array/)
   1. Rocket Academy solution code: [https://pastebin.com/BVmPd2kE](https://pastebin.com/BVmPd2kE)
   2. Rocket Academy solution video: [https://youtu.be/88-cUrvsZ5Q?t=3202](https://youtu.be/88-cUrvsZ5Q?t=3202)

### Part 1

1. [https://leetcode.com/problems/xor-operation-in-an-array/](https://leetcode.com/problems/xor-operation-in-an-array/)
2. [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)
3. [https://leetcode.com/problems/hamming-distance/](https://leetcode.com/problems/hamming-distance/)
4. [https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/)
   1. Consider using Python's built-in decimal to binary converter function `bin()`

### More Comfortable

1. [https://leetcode.com/problems/single-number/](https://leetcode.com/problems/single-number/)
   1. Requires trick to understand what happens when we XOR a number with 0, and when we XOR a number with itself
2. [https://leetcode.com/problems/number-complement/](https://leetcode.com/problems/number-complement/)
3. [https://leetcode.com/problems/binary-number-with-alternating-bits/](https://leetcode.com/problems/binary-number-with-alternating-bits/)
4. [https://leetcode.com/problems/power-of-two/](https://leetcode.com/problems/power-of-two/)
5. [https://leetcode.com/problems/reverse-bits/](https://leetcode.com/problems/reverse-bits/)
6. [https://leetcode.com/problems/power-of-four/](https://leetcode.com/problems/power-of-four/)

