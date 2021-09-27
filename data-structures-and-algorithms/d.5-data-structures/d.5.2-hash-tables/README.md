# D.5.2: Hash Tables

## Introduction

This section will eventually discuss the Hash Table, which is an abstract computer science data structure. 

### Hash Table as Object / Dictionary

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

#### Why isn't a dictionary called a Hash Map?

The Python dictionary data structure is way to access a value through a key in **O\(1\)** time. In the easy Leetcode problems below we can assume that dictionary and hash map are synonymous because we are only thinking about the key/value access behaviour of the hash map data structure.

In a computer science context the importance of the hash map data structure references a point in the history of the field and in programming languages where such a key/value store did not exist by default- you had to create your own or use a library \(for example in the C programming language\). The base language did not come with such a data structure included inside. At the end of this section we'll have rebuilt everything needed for a dictionary using only primitive types like lists, strings and integers. This will also be similar for other very basic data structures we'll see where things like stacks, queues and linked lists, which do have more modern Python equivalents but for DS&A we are more concerned with conceptual understanding rather than easy to write code. Also see below for how Python dictionaries and JavaScript objects work under the hood.

### Hash Functions

From the context of a simpler, older language we'll see just how much complexity there is behind the ability to create a dictionary and access values inside.

```python
dictionary = {
    "age":12,
    "height":25
}

# when you mention the "height" string key, how
# does Python know to give back the value 25? 
print(dictionary["height"])
```

Before we can dive into the storing of the data itself we need to talk about the association of the key with the value inside the hash map data structure. We'll use an algorithm for that, and it's not as easy as it seems.

We've already seen the idea of "hashing" a value is JavaScript in [Password Hashing 3.5.3](../../../3-backend-applications/3.5-authentication/3.5.3-password-hashing.md). We'll use a very similar algorithm to associate hash map keys with hash map values.

We saw that cryptographic hashing functions have 4 properties:

1. Consistency - always give back the same value
2. Consistent length - in the context of hash maps, "fixed length" hash output
3. Output not related to input
4. Rarely repeat for different inputs

Cryptographic hash algorithms are a superset of normal hash algorithms. We're going to create a similar algorithm that we can use to associate a hash map key with a value, but because we are not doing cryptography we can throw away property \#3.

We also need to state one other property which we didn't mention before- that we can consider the complexity of this function to be **O\(1\)**. \(Which isn't true in all cryptographic hash algorithm cases or even all hash map cases.\)

```python
def hash_function(input_string: str):

  for character in input_string:
    # convert the char to an ASCII int using ord
    char_to_int = ord(character)
    # add it to the total
    result += char_to_int
  
  # return the sum mod 10
  # return a num from 0 9
  return result % 10
```

```python
# pythonic (idiomatic) version
def hash_function(input_string: str):
  return sum([ord(ch) for ch in input_string]) % 10 
```

This function takes any length string value and outputs an integer value.

```python
print(hash_function("happy")) #6 
print(hash_function("debit card")) #2
print(hash_function("bad credit")) #2 
print(hash_function("dirtyroom")) #1 
print(hash_function("dormitory")) #1 
```

### Hash Collisions

Note how different inputs can result in the same output. This is referred to as a "_**collision**_". Here it's because two words have the same letters. We can make some simple improvements to the code to make it take letter position into account.

```python
def hash_function(input_string: str):

  for i, character in enumerate(input_string):
    # convert the char to an ASCII int using ord
    char_to_int = ord(character)
    # add it to the total
    # make an exponent of the char position
    # and the char int
    result += char_to_int ** (i+1)
  
  # return the sum mod 10
  # return a num from 0 9
  return result % 10


print(better_hash_function("dormitory") == better_hash_function("dirtyroom")) #false 
print(better_hash_function("debit card") == better_hash_function("bad credit")) #false 
```

### Using the Hash Function to Create a Hash Map

Let's reimplement the Python dictionary inside a class.

From [here](https://www.geeksforgeeks.org/hash-map-in-python/).

```python
class HashTable:
  
    # Create empty bucket list of given size
    def __init__(self, size):
        self.size = size
        self.hash_table = self.create_buckets()
  
    def create_buckets(self):
        return [[] for _ in range(self.size)]
  
    # Insert values into hash map
    def set_val(self, key, val):
        
        # Get the index from the key
        # using hash function
        hashed_key = hash_function(key) % self.size
          
        # Get the bucket corresponding to index
        bucket = self.hash_table[hashed_key]
  
        found_key = False
        for index, record in enumerate(bucket):
            record_key, record_val = record
              
            # check if the bucket has same key as
            # the key to be inserted
            if record_key == key:
                found_key = True
                break
  
        # If the bucket has same key as the key to be inserted,
        # Update the key value
        # Otherwise append the new key-value pair to the bucket
        if found_key:
            bucket[index] = (key, val)
        else:
            bucket.append((key, val))
  
    # Return searched value with specific key
    def get_val(self, key):
        
        # Get the index from the key using
        # hash function
        hashed_key = hash(key) % self.size
          
        # Get the bucket corresponding to index
        bucket = self.hash_table[hashed_key]
  
        found_key = False
        for index, record in enumerate(bucket):
            record_key, record_val = record
              
            # check if the bucket has same key as 
            # the key being searched
            if record_key == key:
                found_key = True
                break
  
        # If the bucket has same key as the key being searched,
        # Return the value found
        # Otherwise indicate there was no record found
        if found_key:
            return record_val
        else:
            return "No record found"
  
    # Remove a value with specific key
    def delete_val(self, key):
        
        # Get the index from the key using
        # hash function
        hashed_key = hash(key) % self.size
          
        # Get the bucket corresponding to index
        bucket = self.hash_table[hashed_key]
  
        found_key = False
        for index, record in enumerate(bucket):
            record_key, record_val = record
              
            # check if the bucket has same key as
            # the key to be deleted
            if record_key == key:
                found_key = True
                break
        if found_key:
            bucket.pop(index)
        return
  
    # To print the items of hash map
    def __str__(self):
        return "".join(str(item) for item in self.hash_table)
```

Use the class:

```python
hash_table = HashTable(10)
  
# insert some values
hash_table.set_val('gfg@example.com', 'some value')
print(hash_table)
print()
  
hash_table.set_val('portal@example.com', 'some other value')
print(hash_table)
print()
  
# search/access a record with key
print(hash_table.get_val('portal@example.com'))
print()
  
# delete or remove a value
hash_table.delete_val('portal@example.com')
print(hash_table)
```

#### More Hash Collisions

What happens when two values create the same fixed-length output value?

#### Hash Collision Functions

There are two ways to deal with hash collisions:

1. Open Addressing Algorithm
2. Chaining Algorithm

## Hash Table Usage Examples

In DSA problems, we don't need to implement a hash map class. _**We are normally just going to use Python's built-in dictionary.**_ They are typically used for 1 of 2 purposes.

1. Tally frequencies of elements in a collection
2. Creating mappings between values and relevant metadata, for example between values in an array and their corresponding indices.

### Tallying Frequencies:

Example from module [0.4: JS Object as Tally](../../../0-language-and-tooling/0.4-js-object-as-tally.md):

```javascript
// Create shuffled deck
var deck = shuffleCards(makeDeck());

// Create hand array of 5 cards
var hand = [];
for (let i = 0; i < 5; i += 1) {
  hand.push(deck.pop());
}

// Create Object as tally
var cardNameTally = {};

// Loop over hand
for (let i = 0; i < hand.length; i += 1) {
  var cardName = hand[i].name;
  // If we have seen the card name before, increment its count
  if (cardName in cardNameTally) {
    cardNameTally[cardName] += 1;
  }
  // Else, initialise count of this card name to 1
  else {
    cardNameTally[cardName] = 1;
  }
}
```

#### Count Votes

Given a random set of votes:

```javascript
from random import choice

# Generate votes
candidates = ["sam", "perry", "eng liang"]
votes = []
for _ in range(1000):
  # Append 1000 random (of 3 choices) candidates to votes array
  votes.append(choice(candidates))
```

```javascript
# Compile a tally of how many times an element appears in an array
# The tally is stored in a dictionary.
def get_winner(votes):
  # Compile tally
  tally = {}
  for person in votes:
    if person not in tally:
      tally[person] = 1
    tally[person] += 1
  
  # Return the person with max votes as the winner
  max_votes = max(tally.values())
  for person, vote_count in tally.items():
    if vote_count == max_votes:
      return person

# Output winner
print(get_winner(votes))
```

#### Determine Low-Stock Items

```javascript
"""Example 2: Determine low-stock items"""

# Generate fruits in a supermarket
fruit_types = ["apple","pear","banana"]
fruits = [choice(fruit_types) for _ in range(1000)]

# Compile a tally of how many times an element appears in an array
def get_low_stock(ls_of_fruits, threshold):
  ''' Return names of stock that are low (below threshold, an int) '''
  # Compile tally
  tally = {}
  for fruit in fruits:
    if fruit not in tally:
      tally[fruit] = 1
    else:
      tally[fruit] += 1
  
  # Compile elements in tally that have a count below a threshold
  result = []
  for fruit, count in tally.items():
    if count < threshold:
      result.append(fruit)
  return result

# Output low-stock items
print(get_low_stock(fruits, 330))
```

### Create Mapping / References

Be able to look up a string given an index, but also an index given a string.

```python
# Create a map from name to index
def name_to_index(list_of_names):
  d = {}
  for index, name in enumerate(list_of_names):
    d[name] = index
  return d

# Create a map from index to name
def index_to_name(list_of_names):
  d = {}
  for index, name in enumerate(list_of_names):
    d[index] = name
  return d
```

Create data for a tournament. We want to be able to get the finishers and also their results.

```python
tournament_finishers = ["eng liang", "perry", "sam"]
nti = name_to_index(tournament_finishers)
itn = index_to_name(tournament_finishers)

# given a name, get their place in the tournament
nti["perry"] # 1 ==> perry got 2nd

# given a place, get the name of that person
itn[1] # perry was in 2nd place
```

## Exercises

Once you've attempted each problem, find solutions in the Discuss tab on that problem's page.

### Pre-Class

1. [https://leetcode.com/problems/valid-anagram/](https://leetcode.com/problems/valid-anagram/)

### Part 1

[https://leetcode.com/problems/unique-number-of-occurrences/](https://leetcode.com/problems/unique-number-of-occurrences/)

1. [https://leetcode.com/problems/sum-of-unique-elements/](https://leetcode.com/problems/sum-of-unique-elements/)
2. [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/)
3. [https://leetcode.com/problems/single-number/](https://leetcode.com/problems/single-number/)
   1. Please ignore the constraint to implement this in constant space complexity because that involves a more advanced technique we haven't learned yet.

### Part 2

1. [https://leetcode.com/problems/uncommon-words-from-two-sentences/](https://leetcode.com/problems/uncommon-words-from-two-sentences/)
2. [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/)
3. [https://leetcode.com/problems/find-common-characters/](https://leetcode.com/problems/find-common-characters/)
4. [https://leetcode.com/problems/maximum-number-of-balloons/](https://leetcode.com/problems/maximum-number-of-balloons/)

## Further Reading

{% embed url="https://www.youtube.com/watch?v=sfWyugl4JWA" %}

#### Hash Functions

[https://www.geeksforgeeks.org/what-are-hash-functions-and-how-to-choose-a-good-hash-function/](https://www.geeksforgeeks.org/what-are-hash-functions-and-how-to-choose-a-good-hash-function/)

#### Hash Table Implementation in Python

[http://thepythoncorner.com/dev/hash-tables-understanding-dictionaries/](http://thepythoncorner.com/dev/hash-tables-understanding-dictionaries/)  
[https://www.youtube.com/watch?v=npw4s1QTmPg](https://www.youtube.com/watch?v=npw4s1QTmPg)

#### JavaScript Objects are not Hash Maps

[https://stackoverflow.com/questions/6586670/how-does-javascript-vm-implements-object-property-access-is-it-hashtable](https://stackoverflow.com/questions/6586670/how-does-javascript-vm-implements-object-property-access-is-it-hashtable)

JS object value properties are accessed through hidden classes:

[https://v8.dev/blog/fast-properties](https://v8.dev/blog/fast-properties)  
[https://www.infoq.com/presentations/javascript-objects-spidermonkey/](https://www.infoq.com/presentations/javascript-objects-spidermonkey/)

#### Hash Table Theory

See [this article](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/) for a brief explanation of hash table theory.

