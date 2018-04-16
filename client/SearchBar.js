import React, { Component,PropTypes } from 'react'
class SearchBar extends Component {

  constructor(){
    super()
    this.state = {
      searchString: ''
    }
  }

  render() {
      return (
          <input value={this.state.searchString} onChange={(e)=>this.setState(searchString:e.target.value)}/>
      );
  }
}

module.exports = SearchBar
