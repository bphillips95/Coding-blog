---
title: Singly Linked List - Pop and Shift
date: "2020-07-10T17:30:03.284Z"
description: "Continuing with Linked Lists, How to remove a node from the beginning or end of a list."
---

Hey, So continuing with Linked Lists, in the last blog I discussed adding a node to the beginning of the end of a list, here I will go through how to remove a node from the beginning or end.

First, let's go through removing from the beginning which in Javascript is the shift method.

What we want to do is just replace the head with the next node on the list. So simply enough I can just write.
```js
shift(){
    this.head = this.head.next
}
```
Easily enough this works, of course, we also need to increase the length, and account for edge cases such as when the list is empty. 

So first off, we need to start a method with a condition in case our list is empty. `if(!this.head) return undefined`  should  do the trick. (Again, you can write `this.length === 0`, this is just the format I prefer.)

Now, what if our list has only a single node? Well by setting our head to its next value, you're effectively setting the head to null, but the tail still contains the old head value, so we would have to reset our tail to null as well. 

Now in full.

```js
    shift(){
        if(!this.head) return undefined // for empty list
        let temp = this.head // to return removed value
        this.head = this.head.next
        this.length = this.length-1
        if(this.length == 0) { // in case of single node
            this.tail = null 
        }
        return temp
    }
```
Now you'll notice I saved the old head to a variable, that is in order to be able to return the removed value. As soon as you invoke this method though, that node no longer exists. 

---

Great, Now let's move on to the pop method. Pop is a bit more tricky because a singly linked list only goes one way, and we have to replace the tail with the node before it.

So 2 things to keep in mind.
1. To access the 2nd to last node, we need to iterate through the entire list(O(n)).
 2. To replace the tail with the node previous to the tail, we need to have access to the previous node. 

 To solve these issues, we have to create a loop that holds 2 values at once, If the next node is the last, it replaces it with the previous value. 

Here syntactically.
```js
pop(){
    let current = this.head
    let newTail = current 
    while(current.next){
    //      As long the value after current 
    // is not null, ie. current is not the last value
        newTail = current 
        current = current.next
    }

    this.tail = newTail 
    this.tail.next = null
}
```
In our while loop, *newTail* is always one node behind *current*, once *current* is the last value(the node after *current* is null, breaking the loop), we reset the tail to *newTail* and set its next value to null. 

Now again we have to account for either a list that is empty or contains a single node, and return the removed value, so in full.

```js
 pop(){
        if(!this.head) return undefined
        let current = this.head
        let newTail = current 
        while(current.next){
            newTail = current 
            current = current.next
        }
        this.tail = newTail 
        this.tail.next = null
        this.length = this.length-1
        if(this.length == 0){
            this.head = null
            this.tail = null
        }
        return current
    }
```


---

Alright, so now we've covered push, pop, shift, and unshift. In the next blog, I'm going to get to accessing a node inside of our list ie. *get*, as well as changing the value of that node ie. *set*. 

