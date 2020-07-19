---
title: Singly Linked List - Get and Set
date: "2020-07-19T17:30:03.284Z"
description: "How to access and replace a node from inside a linked list."
---

Hey, so continuing with a Singly-Linked-List, so far we have only dealt with adding or removing a node from either **end** of a list, in this blog I will walk through accessing(get) and replacing(set) a node from anywhere in the list. 

First, we have to create our get method, with 4 steps.

1. If the integer being passed in doesn't exist in the list return null.
2. Set a current variable to the head of the list.
3. Run a loop with an increasing integer, as long as the index is not the same as the counter, move the current node over one.
4. Once the index and counter are the same return the current node. 

Now the syntax.

```js
get(index){
        if(index < 0 || index >= this.length) return null 
        let counter = 0 
        let current = this.head
        while(index !== counter){
            current = current.next
            counter++
        }
        return current
    }
```
Now running `List.get(3)` will return the 4th node in your list (The first node is accessed at index 0).

---

#### *We can use the get method to help create the set method!!*

---

Once we are already able to access any node with our get method, creating a set method becomes *much* easier.

As we are changing a value, we need to pass in 2 arguments now, the index of which node to change, and the new value we are changing it to. 

Then write the get method, access, and simply reset the value of the node you have.

Here in syntax.

```js
    set(index,value){
        let node = this.get(index)
        if(node) {
        node.val = value
        return node
        } else return "index not found"
    }
```
You can see, once you have the get method, there isn't too much to add. 

Annnnddd that's it for get and set! In the next blog, I'll finish my rundown of Singly-Linked-Lists with insert and remove, until then enjoy!