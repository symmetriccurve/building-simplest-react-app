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

  /* =======================start of constructor========================== */
  constructor(){
    /*
        Every React Component under goes three phases in it's life.

        Initialization phase or mouting phase
        updating phase or maintaing phase
        unmounting phase

        Each phase has differnt life cycle methods. Lets discuss the life cycle methods in Initialization phase or mouting phase

       constructor life cycle method:
       a constructor helps to initiate the state of the component.

       What is a State ?
      A state is nothing but a piece of data that is accessible through out the component, Think of this like a database to the component,
      we can get data from database and set data on database.
      A state is a JSON object.

      for example we can set a variable called name with value Cliff in state, by doing

      this.state = {
          name: 'Cliff'
      }

      This can be accessed under render function by  { this.state.name } //shows Cliff on UI

    */
    super()
    this.state = {
      name: 'Cliff'
    }
  }
  /* =======================end of constructor========================== */

  /* =======================start of render============================ */
  render(){
    /*
      A Render method in react must and should return atleast one div( atleast a empty div ),
      a return terminates the render function like a javascript function,

      return(
            <h1> This is first Heading </h1>
            <h2> This is second Heading </h2>
      )

      Anything like above will not work and React throws erros saying, Adjacent JSX elements must be wrapped in an enclosing tag

      But when wrapped inside a div

      return(
        <div>
            <h1> This is first Heading </h1>
            <h2> This is second Heading </h2>
        </div>
      )

       The above return works.

      Conditional rendering:

      render stops when it hits the first return it encounters

      In below Case:

      render(){  // What if render has multiple returns ?
          return(
            <div>
                <h1> This is return view from first render </h1>
            </div>
          )
          return(
            <div>
                <h1> This is return view from second  render </h1>
            </div>
          )
    }

    The render encounters first return and stop executing from there after, we can advantage of this execution to show
    views depending on requirement.

    For Example:
    UI shows if a user is Online or offline depending on a variable(Let's say we get this from remote server )

    const isUserOnline = true

    render(){
        if( isUserOnline == true ) {
            return(
                  <h1> The user is Online </h1>
            )
        }else {
          return(
                <h1> The user is Offline </h1>
          )
      }
    }

    Since the render stops when it hits the first return we can skip the else loop all together.

    render(){
        if( isUserOnline == true ) { //  render enters the if condition and Immediately executes return and stops.
            return(
                  <h1> The user is Online </h1>
            )
        }

        return(
              <h1> The user is Offline </h1>
        )

    }

    Adding Class Names and Ids to Views

    Like any other html tags, tags under the render can have class names and Ids except there is a catch.

    in usual HTML we have <div class='myCustomClass'> </div>
    But in React, class is a keyword and reserved for creating a react Component, instead we use.
      <div className='myCustomClass'> </div>

      ps. className in camel case.

      Adding id remains the same in react.

    */
    return (
        <div>

            <h1> {this.state.name}</h1>

        </div>
    )
  }
/* =======================end of render============================ */
}

module.exports = App // Both ES5 and ES6 has exports in common.

/* Going forward  we will be using only ES6 syntax throughout  the course, which is trendy and fancy*/
