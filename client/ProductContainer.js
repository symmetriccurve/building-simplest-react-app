import React, { Component } from 'react'
import ProductCard from './ProductCard'

class ProductContainer extends Component {
    render() {
      if(this.props.products.length  ==  0) {
        return <h2> Loading Products . . </h2>
      }else{
        return (
            <div>
              <ProductCard name= {this.props.products[0].name} price={this.props.products[0].price} addToCartFunctionPassedAsProp={(newProductToBeAdded)=>this.props.addToCartFunctionPassedAsProp(newProductToBeAdded)}/>
              <ProductCard name= {this.props.products[1].name} price={this.props.products[1].price} addToCartFunctionPassedAsProp={this.props.addToCartFunctionPassedAsProp}/>
              <ProductCard name= {this.props.products[2].name} price={this.props.products[2].price} addToCartFunctionPassedAsProp={this.props.addToCartFunctionPassedAsProp}/>
            </div>
        );
      }
    }

  componentWillReceiveProps(nextProps){
    console.log('=======MESSAGE FROM componentWillReceiveProps=========')
    console.log('Wow, Now I have new Props')
    console.log('This are my old Props',this.props)
    console.log('This are my new Props',nextProps)
    console.log('======================================================')
  }
}

module.exports = ProductContainer
