---
title: Group Anagrams
date: "2020-06-10T22:12:03.284Z"
description: "A short guide to solving a popular coding problem."
---

Here is a pretty common problem I came up on while doing LeetCode challenges. 

 ```
 Given an array of strings, group anagrams together.

 Example: 

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

Note:

- All inputs will be in lowercase.
- The order of your output does not matter.
```

So first off, I wanted to collect the words which contain the same letters seperately, so in order to do that I created an Object. 

```js
let object = {}
```

Next, I wanted to iterate through my input array and see if any words had the same letters, In order to do so I split then sorted the letters to create the word in alphabetical order.

```js
    strs.forEach(string => {
        let letters = string.split("").sort()
    }) 
```

 Once the words are alphabetized, I can see if there is a key with the organized letters. If yes, I can add the original word to that key, if not, I create a new key-value pair, with the key being the organized letters and the value being the original. 
 
 Note that since each group of letters has its own array, when creating the key-value pair, the value must be an array.

 ```js
  strs.forEach(string => {
        let letters = string.split("").sort()
          if(object[letters]) {
            object[letters].push(string)
        } else {
            object[letters] = [string]
        }
    }) 
 ```

Now you have all the anagrams grouped in an object. 

```js 
{
  "a,e,t": ["eat","tea","ate"],
  "a,n,t": ["tan","nat"],
  "a,b,t": ["bat"]
}
```
Now our problem doesn't care for objects but wants the ouput to be an array, so I used `Object.keys` and then the `map` method in order to turn it back into an array

```js
    const keys = Object.keys(object)
    const values = keys.map(value => object[value])
```
Now all together using a ternary operator instead of an if else to make it cleaner.
```js
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
var groupAnagrams = function(strs) {
    let object = {}
    strs.forEach(string => {
        let letters = string.split("").sort()
        object[letters] ? object[letters].push(string) : object[letters] = [string]
    }) 
    const keys = Object.keys(object)
    const values = keys.map(value => object[value])
    return values
}
Output: 
[
  ["eat","tea","ate"],
  ["tan","nat"],
  ["bat"]
]
```


Hope this was of some help, and enjoy coding!