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
/*
  Importing one components in to another is as simple as importing any other Library, just make sure,
  the component name starts with Capital letter
*/
import ProductCard from './ProductCard'
/*

  You might be wondering why did we do,
  import React from 'react'
      but when we do ProductCard we did
  import ProductCard from './ProductCard'

What is the prefix './' does ?
'./' is the location prefix.
When we import modules from node_modules we import them directly with out a location prefix, if we do not add this prefix,
the usual location to look for is under node_modules.

thus we do   import React from 'react' .

But react component we just created is not part of node_modules, thus we exactly tell the location of the file.
thus ./  signifies that the file is under the same folder of the file which is importing.

For Example:
    A folder
      B file
      C file

We we import C into B we simply do import C from './C'

A folder
  B file
  C file
D folder
    E file
    F File

if We are importing C file into E file then we do. '../A/C'

  the two dots signifies the file is not on the same folder but its on the same level of folder which we are importing
  (A and are on the Same level)

in a similiar fasion we go to any folder from any folder and import files, just make sure to have correct number of dots and slashes


*/
class App extends React.Component{ // It's just Syntax, under the hood this is equal to React.createClass

  /* =======================start of constructor========================== */
  constructor(){
    /*
        Every React Component under goes three phases in it's life.

        Initialization phase or mouting phase
        updating phase or maintaing phase
        unmounting phase

        Each phase has differnt life cycle methods. Lets discuss the life cycle methods in Initialization phase or mouting phase

       constructor life cycle method: constructor is part of Initialization phase,
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
      products:[
        { name: 'Apple', price: '$20'},
        { name: 'Orange', price: '$10'},
        { name: 'Grape', price: '$5'},
      ]
    }
    /*
      Let add 3 products to the state and try to access them inside the render function

    */
  }
  /* =======================end of constructor========================== */

  /* =======================start of componentWillMount================== */

    componentWillMount(){
      /*
        componentWillMount is part of Initialization phase, it is called when component first mounted or Initialized
        if for any reason we might have missed anything to add to state or feel like changing the state even before it shows on the UI.
        This is your oppurtuity to do it.

        componentWillMount helps to set new data or change existing data inside the state before the render is called.

        let try to change the name variable inside the state from Cliff to Mark, We know how to access the state variables( this.state.someStateVariable).
        Let look at how to change th state variable values.



      */
        // this.setState({
        //   name: 'Mark'
        // })

        /*
          As componentWillMount is called before the render function, the name Mark is shown on the UI.
          rener just looks at data in state, if anything has changed the data,  render simply shows the latest data.
        */
    }

  /* =======================end of componentWillMount================== */

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
    console.log('This is App, Im Rendering')
    return (
        <div>
            {/* We do not have to do anything else render after we import ProductCard from a different file*/}
            <ProductCard product={this.state.products[0].name} price={this.state.products[0].price}/>
            <br></br>
            <ProductCard product={this.state.products[1].name} price={this.state.products[1].price}/>
            <br></br>
            <ProductCard product={this.state.products[2].name} price={this.state.products[2].price}/>

        </div>
    )
  }
/* =======================end of render============================ */


/* =======================start of componentDidMount================== */

  componentDidMount(){
    /*
      componentDidMount is part of Initialization phase as well, it is called when component first mounted or Initialized
      This is another oppurtunity to set the state after render happens.

      componentDidMount helps to set new data or change existing data inside the state after the render is called.
      let try to change the name variable inside the state from Cliff to Dave,

      As this happens after the render, UI initially shows Mark and Immediately switches to Dave( within a nanosecond ).


      Every time a setState happens within a component, a render call is triggered.

      State: "Hey Render, I have some new data do you like to see".
      Render: "Sure, let me take a look"

      So the order of methods called are

      constructor  - name: 'Cliff'
      componentWillMount  -  name: 'Mark'
      render - Shows name: 'Mark'
      componentDidMount - name: 'Dave'
      render - Shows name: 'Dave'

      constructor, componentWillMount, render and componentDidMount are part of Initialization phase.

    */
      this.setState({
        name: 'Mark'
      })

      /*
        We take advantage of  this behaviour of componentDidMount to make any async operation like API calls,
        initially we show spinner or  loader as data is available from API, we update the state which in turn calls the render.
      */
  }

/* =======================end of componentDidMount================== */

}

module.exports = App // Both ES5 and ES6 has exports in common.

/* Going forward  we will be using only ES6 syntax throughout  the course, which is trendy and fancy*/
