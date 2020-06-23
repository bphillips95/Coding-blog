---
title: Why a Linked List
date: "2020-06-23T22:12:03.284Z"
description: "Some benefits of using a linked list over a simple array."
---

Hey, so I was recently going over data structures and came across one of the more well known ones - the linked list. Being that in order to access any given element in the list you would need to iterate through the entire list up to the point where your element is, and in order to create a linked list, you need to create it from scratch as well as create all the methods that go along with it, it would seem at first to be pointless. In most cases, yes, a simple array could probably do the job just as well if not quicker, however there are cases where the linked list could save you a lot of time and space complexity.

First off, one of the great things about arrays is that every element is indexed. In most cases that helps us out a ton, when accessing and then editing an element, we can just call it by its index. In a case of **changing** the order of the array though, it would need to change the index of every element that is affected. 

For example let's look at an array.
```js
let arr = ["arrays","are","always","indexed"]
```
Javascript indexes each element in the array, so we can call by index.
```js
arr[0] // "arrays"
arr[1] // "are"
arr[2] // "always"
arr[3] // "indexed"
```
Now if we push a new element to the end, it's not a big deal, but what if we want to add an element to the _beginning_ of an array?? 
```js
arr.unshift("Javascript")

arr[0] // "Javascript"
arr[1] // "arrays"
arr[2] // "are"
arr[3] // "always"
arr[4] // "indexed"
```
Every element had to be issued a new index, in short instead of using one computation (O^1), by just adding a single element, our code had to iterate through and change every element(O^n)??!!

Besides for the time complexity when changing elements, if your code doesn't need to be indexed, you would save memory and space by not having it indexed.

 -----------------------      Enter Linked Lists  --------------------

A linked list is what it sounds like - a linked list- each element or node in this case is connected to the one after it(or in the case of a doubly linked list, the one before and after it). So in order to access a given element inside the list you would need to traverse the entire list, but if you want to add to the beginning, or end for that matter, it would take a single computation(O^1). 

![A Singly Linked-List where each node is only connected through the node after it](./linkedlist.png)       *Each node is only connected through the one after it*

---

So just to re-iterate the 2 major benefits 

1. Time complexity - when inserting or removing elements 
2. Space complexity - lack of index attached takes less memory. (Note that because each node contains a pointer to a second node, the nodes themselves do take up more memory than an element in an array.)

Now the thing with linked lists is that Javascript doesn't just give it to you like an array, you have to create it for yourself, not just that but you also have to create the methods yourself as well. In my next blog, I'll go through how to create a basic singly linked-list and the most used methods. 

Until then, enjoy coding!


