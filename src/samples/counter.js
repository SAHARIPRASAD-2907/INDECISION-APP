import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: props.count,
    };
  }
  addOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  minusOne = () => {
    this.setState((prevState) => {
      if (prevState.count > 0) {
        return {
          count: prevState.count - 1,
        };
      }
    });
  };
  reset = () => {
    console.log("Reset");
    this.setState((prevState) => {
      return {
        count: 0,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button disable={this.state.count < 0} onClick={this.addOne}>
          +1
        </button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0,
};
