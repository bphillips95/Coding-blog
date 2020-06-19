---
title: The useState Hook
date: "2020-06-18T22:40:32.169Z"
description: A basic overview of creating and using state with Hooks as opposed to a Class Component. 
---

Hey, so until ES6, in order to use state with React, you had to use Class Components. Now, not only can you use state with a functional component, but it's an easier and more simplified process. 

Let's take a look at state within a class component. 

```js
import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        counter: 0
    }
    handleClick = () => {
        this.setState({
            counter: this.state.counter+1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}
```
This is a typical Class Component with a basic counter as outlined in the React Docs. The only difference is that I seperated the setState method into a seperate method to keep the code cleaner, however you can write it into the return just as well. 
```js
<button onClick={() => this.setState({counter: this.state.counter+1})}>Click Me</button>
```

Now let's take a look at a functional component using the useState hook.
```js
// Must import useState 
import React, {useState} from 'react'

export default function FunctionComponent() {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}> Click Here</button>
        </div>
    )
}
```
Alright as you can see, I didn't create a seperate method here, although you could, because the code is much shorter and cleaner. 

There are a number of differences that come up. 

> **NOTE:** When using useState, every instance of state should have its own hook.

1. Any hook you want to use must be imported. 
2. When initializing state, you must also create an update method, replacing setState of a class component.
3. State is initialized by passing in the value in the useState method
4. When using setState, you have to tell the method what instance you are updating ex. 
`this.setState({counter: new value)`    
Using hooks however, the updating method is specific to each instance, therefore you just need the value.
`setCounter(new value)`
5. You do not need **this** anymore!!!!!!! You are able to call state directly with the variable you have set for it.
6. Unlike when creating state with classes, the useState hook accepts any value, such as an array,string,object or integer.

These are just a few of what sticks out when transitioning to React Hooks, there are more of course and you should definitely read the React Docs.

 Enjoy Coding!


