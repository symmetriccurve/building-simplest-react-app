import React, { Component,PropTypes } from 'react'
class ProductCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      isSelected: false
    }
  }

  handleDeselect(){
    this.setState({
      isSelected: false
    })
  }

  handleSelect(){
    this.setState({
      isSelected: true
    })
    this.props.addToCartFunctionPassedAsProp(this.props.name)
  }


  render() {
    if(this.state.isSelected == true) {
        return (
          <div>
            <h1> Product: {this.props.name} </h1>
            <h1> Price: {this.props.price}</h1>
            <button onClick={()=>this.handleDeselect()}> Remove</button>
          </div>
        );
    }else {
        return (
          <div>
            <h1> Product: {this.props.name} </h1>
            <h1> Price: {this.props.price}</h1>
            <button onClick={()=>this.handleSelect()}> Add </button>
          </div>
        );
    }
  }
}

module.exports = ProductCard


ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string
};

ProductCard.defaultProps = {
  price: 'Not Available'
};
