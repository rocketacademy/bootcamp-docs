# D.5.2: Hash Tables

## Introduction

This section will eventually discuss the Hash Table, which is an abstract computer science data structure. 

#### Hash Table as Object / Dictionary

The first most simple implementation we'll work with of something that behaves like a hash table is a Python dictionary, or known as objects in JavaScript.

#### Keys and Values

Access to data given a key is a behavior of a hash table that is also in a Python dictionary / JavaScript object. Access to a value through a key is an **O\(1\)** operation, so it is a good way to store and retrieve data.

```javascript
var obj = {
    "age":12,
    height:25
};
// access a value
console.log(obj["height"]);
```

```python
dictionary = {
    "age":12,
    "height":25
}
# access a value
print(dictionary["height"])
```

#### Hash Table Implementation in Python

[http://thepythoncorner.com/dev/hash-tables-understanding-dictionaries/](http://thepythoncorner.com/dev/hash-tables-understanding-dictionaries/)  
[https://www.youtube.com/watch?v=npw4s1QTmPg](https://www.youtube.com/watch?v=npw4s1QTmPg)

#### JavaScript Objects are not Hash Maps

[https://stackoverflow.com/questions/6586670/how-does-javascript-vm-implements-object-property-access-is-it-hashtable](https://stackoverflow.com/questions/6586670/how-does-javascript-vm-implements-object-property-access-is-it-hashtable)

#### Object value properties are accessed through hidden classes

[https://v8.dev/blog/fast-properties](https://v8.dev/blog/fast-properties)  
[https://www.infoq.com/presentations/javascript-objects-spidermonkey/](https://www.infoq.com/presentations/javascript-objects-spidermonkey/)

#### Hash Functions

Hash functions take a value and compute a fixed length value from it.

#### Hash Collisions

What happens when two values create the same fixed-length output value?

#### Hash Collision Functions

There are two ways to deal with hash collisions:

1. Open Addressing Algorithm
2. Chaining Algorithm

## Hash Table Theory

See [this article](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/) for a brief explanation of hash table theory.

## Hash Table Usage Examples

In DSA problems, hash tables are typically used for 1 of 2 purposes.

1. Tally frequencies of elements in a collection
2. Creating mappings between values and relevant metadata, for example between values in an array and their corresponding indices.

See [this Repl](https://repl.it/@kaiyuanneo/hashmapapplications#main.py) for examples of the above usage patterns compiled by one of RA's former instructors Jon.

## Exercises

Once you've attempted each problem, find solutions in the Discuss tab on that problem's page.

### Pre-Class

1. [https://replit.com/@kaiyuanneo/hashmaps](https://replit.com/@kaiyuanneo/hashmaps)
   1. Solutions: [https://replit.com/@kaiyuanneo/hashmapssolns](https://replit.com/@kaiyuanneo/hashmapssolns)
2. [https://leetcode.com/problems/valid-anagram/](https://leetcode.com/problems/valid-anagram/)

### Part 1

Please proceed to Part 2 if you are done with Part 1 early.

1. [https://leetcode.com/problems/unique-number-of-occurrences/](https://leetcode.com/problems/unique-number-of-occurrences/)
2. [https://leetcode.com/problems/sum-of-unique-elements/](https://leetcode.com/problems/sum-of-unique-elements/)
3. [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/)
4. [https://leetcode.com/problems/single-number/](https://leetcode.com/problems/single-number/)
   1. Please ignore the constraint to implement this in constant space complexity because that involves a more advanced technique we haven't learned yet.

### Part 2

1. [https://leetcode.com/problems/uncommon-words-from-two-sentences/](https://leetcode.com/problems/uncommon-words-from-two-sentences/)
2. [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/)
3. [https://leetcode.com/problems/find-common-characters/](https://leetcode.com/problems/find-common-characters/)
4. [https://leetcode.com/problems/maximum-number-of-balloons/](https://leetcode.com/problems/maximum-number-of-balloons/)

