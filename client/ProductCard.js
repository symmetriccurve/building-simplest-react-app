import React from 'react'
class ProductCard extends React.Component{
    render(){
      return(
          <div>
              <h1> Product: {this.props.product} </h1>
              <h1> Price: {this.props.price}</h1>
          </div>
        )
    }
}
module.exports = ProductCard
/*
  Inspect and see with chrome plugin about the props
  We can also console the this instance to understand the props and state of ProductCard
*/
