import React, { Component } from 'react';
import FancyButton from '../../index.js';

const baseStyle = {
  color: 'red',
  border: 'none',
  fontSize: '1.5rem'
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  
  handleChange = () => {
    this.setState(state => ({count: state.count + 1}))
  }
  
  render() {
    const { count } = this.state;
    return (
      <div>
        <div onClick={this.handleChange}>test</div>
        <div>count check: {count}</div>
        <app-button 
          title={`title-${count}`} 
          onClick={() => console.log('clicked!')}
          style={baseStyle}
        ></app-button>
      </div>
    )
  }
}