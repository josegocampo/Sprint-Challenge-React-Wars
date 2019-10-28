# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

Its a JS Library for building Using Interfaces. 


1. What does it mean to think in react?

It means to learn to think in terms of the reach of the language. Thinking about dynamic apps and how to build them trough components and manipulating the virtual dom. 

1. Describe state.

State is a moment in a certain object. You can change it, mutate it, but the state is where it is at at a certain given moment. 

1. Describe props.

Props are, as the name says, properties of a component. They are kind of like the parameters for the functions, properties that you can set to different pieces of data and pass around to other components.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side Effect is something that affects something outside the scope of the function being executed. Like getting data from an API, or console logging. 

Syncing effects is done by passing a dependency array at the end of the useEffect, it syncs it with the useEffect so that it will not run infinetly and will only do it when there are changes in the array we passed to the useEffect.

