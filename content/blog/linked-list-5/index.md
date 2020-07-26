---
title: Singly Linked List - Insert and Remove
date: "2020-07-26T17:30:03.284Z"
description: "The 5th and final part of a series of Linked-Lists."
---

In this final blog on Singly-Linked-Lists, I am going to give a quick walk-through on inserting a node in the middle of a list and then removing a node from the middle of the list. 

In order, to insert a node, we are going to need to pass in both the new value we are creating as well as the index where to insert it. 

When creating **insert** we can __*really*__ take advantage of our already created methods.

1. Since we already have a method to add to the beginning(_unshift_) or end(_push_) of a list, if we are trying to insert at the beginning or end of the list, we can just run _unshift_ or _push_.

2. We can access where to insert the new node by using our _get_ method! 

Anyways here's the syntax, and then I'll walk through it.

```js
 insert(index,val){
        if(index < 0 || index > this.length) return false 
        // double bang to return boolean
        if(index === this.length) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)

        let prevNode = this.get(index-1)
        let nextNode = prevNode.next
        const newNode = new Node(val)
        prevNode.next = newNode
        newNode.next = nextNode
        this.length++
        return true
    }
```


### __*We can use our get method to create both insert and remove*__
---

1. Cover those edge cases!!! If the index doesn't exist in the list, return false. If it is the first or last index, then simply run _push_ or _unshift_. NOTE: I used the double bang in order to return true if the method worked properly.
2. Set a variable to the node __before__ the index using our get method.
3. Set a variable to the node __after__ that one.
4. Create our new node with the value passed in.
5. Insert our new node between those variables.
6. Increase the length by 1
7. Return true if successful. 

---

Removing a node is almost identical to inserting, except for well removing instead of adding. 

Here syntactically.

```js
    remove(index){
        if(index < 0 || index > this.length) return undefined
        if(index === 0) return !!this.shift()
        if(index === this.length-1) return !!this.pop()
        let prevNode = this.get(index-1)
        let removedNode = prevNode.next
        prevNode.next = removedNode.next
        this.length--
        return removedNode
    }
```

Pretty much the same as insert but just running the opposite methods, and when accessing the previous node, just set the next node to skip one. In a linked list the only connection of one node to another is through each node's next value, by removing that value, that node is essentially deleted.

That's it for linked-lists! 