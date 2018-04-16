import React, { Component } from 'react';
import Header from './Header'
import SearchBar from './SearchBar'
import ProductContainer from './ProductContainer'
class App extends Component {
    constructor(){
      super()
      this.state = {
        products: [],
        productsInCart: []
      }
    }

    componentWillMount(){
    }

    addToCart(newProductToBeAdded){
      let existingProductsInCart = this.state.productsInCart
      let newListOfProductsInCart = existingProductsInCart.concat(newProductToBeAdded)
      this.setState({
        productsInCart: newListOfProductsInCart
      })
    }

    render() {
        return (
            <div>
              <SearchBar/>
              <Header/>
              <ProductContainer products={this.state.products} addToCartFunctionPassedAsProp={(newProductToBeAdded)=>this.addToCart(newProductToBeAdded)}/>
            </div>
        );
    }

    componentDidMount(){
      fetch('https://api.myjson.com/bins/ixx7z')
      .then(htmlResponse=>{
        return htmlResponse.json()
      })
      .then(jsonResponse=>{
        this.setState({
          products: jsonResponse
        })
      })
    }
}

module.exports = App
