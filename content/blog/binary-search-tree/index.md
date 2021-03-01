---
title: Binary Search Trees
date: "2021-03-01T22:12:03.284Z"
description: "Binary Search Trees: What, Why, and How"
---

Hey, so a lot of people like me finished a coding bootcamp and then needed to start practicing algorithms and learning data structures to get into that FAANG company. Well, chances are you have come across Binary Search Trees, which I'll call BST for short.

So first off a Binary Search Tree is a data structure, a way of formatting data similar to linked lists, stacks, or queues. A binary search tree as said in the name is binary, there will always be 2 options, right or left.

A BST is a tree of nodes composed of branches. Every node on the branch to the left is smaller than the current node and every node to the right is greater. Example in the picture.

![A Binary Search Tree](./BST.png) 

In this picture the root of the Tree is the number 7, Therefore any number to the left must be smaller than the number 7. On the left is 2, and again, to the left of 2 is the number 1, and to the right of 2 is the number 5. Bear in mind, every number is unique and all the numbers in the branches to the left of a number must be smaller than that number. For example, even though 5 is to the right of 2 it is part of the branches to the left of the root 7, and therefore must be smaller than 7.

![A larger Binary Search Tree](./BST2.png)

***Every node to the left of the root 25 must be smaller, whilst every branch to the right must be greater***

So after explaining the What, there is the Why. As with other data structures, the purpose is to simply make it quicker and more efficient to find data. Similar to using binary search in an algorithm, using a binary search tree continuously halves the data structure, cutting the time needed to traverse the tree many times. 

In the next blog, I will go through how to implement a Binary Search Tree, along with creating the Insert and Find functions

