import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrementCount =  () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>

        <p data-testid="count-text">Count: {this.state.count}</p>
        <button data-testid="count" onClick={this.incrementCount}>Increment</button>
        <button data-testid="countt" onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}
export default Counter;
