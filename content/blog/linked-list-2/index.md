---
title: Singly Linked List - Push and Unshift
date: "2020-06-30T17:30:03.284Z"
description: "A short guide to writing the basic methods to create a singly linked list"
---
 
Hey all, so in the last blog, I explained some of the why in using a linked list, in this blog I will go through the how. 

Each link in a linked list is composed of a node that contains its own value and a pointer to the next value. 

So first let's create the syntax for our Node
```js
class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}
```
Note: If you are unfamiliar with classes, you can read up more about them at [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) . If you are familiar with Object Oriented Programming(OOP) from another language such as Ruby, you should have no issues with a linked list. 


As you can see, each node contains 2 values 
1. Its own value
2. A next property that will point to the next node. 

Now let's create our List

```js
class List{
    constructor(){
        this.head = null 
        this.tail = null 
        this.length = 0
    }
}
```
Each List must contain 3 properties
* Head - which will allow us to access the first node in the List
* Tail - which will allow us to access the last node in the List.
* A length value to track how many nodes our List contains. 

Now that we have both a List class and single Node class, let's add nodes to our list!!!

As mentioned in the last blog, we need to create each method manually so let's start off with the usual push method.

```js
   push(val){
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length+=1
        return this;
    }
```
1. Every time we add a new value we have to create a new Node to hold that value.

2. Then, check if the list is empty, I did so with checking if the head is null, you can also see if the length is 0 as well. 

3. If the list is empty, set the value of both the head and tail of the list to the new value. 

4. If the list is not empty, to add the new node to the end of the list(Remember this is the push method), set the next value of the current tail to our new node, and then set the new node as the new tail. 

5. **Increase the length of the list by 1.**

6. Return the new node.

In step 4 we are taking the last link in our chain and setting its next value to our new Node. However our tail value is still the old tail, so we reset that as well. 

Now if you write list inside the console, you should see a push function. 

```js
list // List {head: null, tail: null, length: 0}
list.push("Linked") 
// List {head: Node, tail: Node, length: 1}
// head: Node {val: "Linked", next: null}
// length: 1
// tail: Node {val: "Linked", next: null}
list.push("List")
// List {head: Node, tail: Node, length: 2}
// head: Node
// next: Node {val: "List", next: null}
// val: "Linked"
// __proto__: Object
// length: 2
// tail: Node {val: "List", next: null}
```

Also always remember to increase the length or you will have no idea how long your link is!!

> Visualize a linked chain, once you understand how the logic works, you should find yourself having no problem implementing it in code. 

---

Very similar to push(adding to the end of the list) is unshift(adding to the beginning of the list)

First the syntax.
```js
 unshift(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
        newNode.next = this.head
        this.head = newNode
        }
        this.length+=1
        return this
    }
```

1. Create a new Node with the value passed in.
2. Check if the list is empty.
3. If empty set the new node to both head and tail.
4. If list is not empty, set the new node's next pointer to point to the current head.
5. Set the new head to be the new node.
6. Increase length by 1.
7. Return the new node.

To use method simply `list.unshift("Singly")`

Same as push just instead of adding to the end, we are pushing the head down one and making the new one head in its place.

Head |  | Tail |  |
--- | --- | --- | ---
value: Singly | value: Linked | value: List | value: Null
Next -> | Next -> | Next -> | 

Thats it for push and unshift, In the next blog I will go through pop and unshift, removing nodes from the beginning and end of a list.


####  ---------------------- Notes ----------------------
1. I learned linked lists from a Udemy course which you can find [here](https://www.udemy.com/share/101X5sAEMacFZTRHoF/).
2. [Visualgo](https://visualgo.net/en/list?slide=1) is a great resource to understand how linked lists and other data structures work, Check it out!
