/*
// This is a ES 5 way of creating a react component
const React = require('react') // Require react library into this file and hold it into a variable called React
var App = React.createClass({ // App is the name of the component we are about to create, we use a method createClass on React to Create new react component
  render(){ // Every react component must and should have a render component life cycle which returns a view.
    return <h1> This is a React ES5 way of Creating a Component </h1>
  }
})

module.exports = App // Once the component is created, it has to be exported so that we can import into other files */

// This is a ES6 way of creating a react component
import React from 'react' //require is ES5 way, while import is ES6 way of getting library into this file
class App extends React.Component{ // It's just Syntax, under the hood this is equal to React.createClass
  render(){ // Every react component must and should have a render component life cycle which returns a view.
    return <h1> This is a React ES6 way of Creating a Component </h1>
  }
}

module.exports = App // Both ES5 and ES6 has exports in common.

/* Going forward  we will be using only ES6 syntax throughout  the course, which is trendy and fancy*/
