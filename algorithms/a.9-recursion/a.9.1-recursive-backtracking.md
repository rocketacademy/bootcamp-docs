# A.9.1: Recursive Backtracking

## Introduction

Recursive backtracking means to explore all potentially valid recursive subtrees, and "backtrack" when we discover that a particular subtree is invalid or exhausted. In certain problems such as [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/), this may mean we can avoid recursively exploring every subtree. In other problems such as [Permutations](https://leetcode.com/problems/permutations/), this may mean we explore every subtree, and "backtrack" when we have exhausted each subtree.

[This video](https://www.youtube.com/watch?v=gBC_Fd8EE8A) gives a simple explanation of the backtracking concept when applied to a maze problem, where our program "backtracks" each time it reaches a dead end. The code example is in Java, but we should be able to understand its logic. For a more detailed exploration of backtracking, consider the relevant Geeks for Geeks article [here](https://www.geeksforgeeks.org/backtracking-introduction/#:~:text=Backtracking%20is%20an%20algorithmic%2Dtechnique,reaching%20any%20level%20of%20the).

## Sample Code Snippet

You have a set of tiles, where each tile has one letter tiles\[i\] printed on it.  Return the number of possible non-empty sequences of letters you can make.

Input: “AAB”, Output: 8. Explanation: "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

```python
def numTilePossibilities(self, tiles: str):
    # Store the possible sequences in a set to ensure no duplicates
    sequences = set()
    
    # Perform depth-first search
    # current is an array of tiles chosen so far
    # remaining is an array of remaining tiles
    def find_possibilities(current, remaining):
        # If current is non-empty, it is a valid sequence.
        # Convert it to string and add to sequences.
        if current != []:
            sequences.add("".join(current))
            
        # If there are no letters remaining, we have exhausted all possible
        # sequences in this subtree and can return.
        if remaining == "":
            return
        
        # For each letter in remaining, add it to current and find
        # possibilities that start with letters in the new current.
        for i in range(len(remaining)): 
            current.append(remaining[i])
            find_possibilities(current, remaining[:i] + remaining[i+1:])
            # After finding possibilities for new current, reset current
            # by popping the last-added letter, before appending the next
            # letter in remaining. This is the backtracking step.
            current.pop() 
    
    # Kick off our search by providing an empty array for current and 
    # the original tiles string containing possible letters.
    find_possibilities([], tiles)
    
    # Return the number of unique sequences that we found from our search.
    return len(sequences)
```

## Exercises

### Pre-Class

1. [https://leetcode.com/problems/generate-parentheses/](https://leetcode.com/problems/generate-parentheses/)
   1. Hint: Consider [this slide](https://docs.google.com/presentation/d/1rpY5NnOvN7MKVLSI5NoU7LYySGVNRTC9Yptl9mtaXRY/edit#slide=id.g81c439b50b_0_93) on how we can prune invalid subtrees.
   2. Rocket Academy solution code: [https://pastebin.com/HMxZjpM7](https://pastebin.com/HMxZjpM7)
   3. Rocket Academy solution video: [https://youtu.be/MTqylosJ1ow?t=2022](https://youtu.be/MTqylosJ1ow?t=2022) until 57:25

### Part 1

1. [https://leetcode.com/problems/permutations/](https://leetcode.com/problems/permutations/)
2. [https://leetcode.com/problems/letter-case-permutation/](https://leetcode.com/problems/letter-case-permutation/)
3. [https://leetcode.com/problems/letter-combinations-of-a-phone-number/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
4. [https://leetcode.com/problems/combination-sum/](https://leetcode.com/problems/combination-sum/)

