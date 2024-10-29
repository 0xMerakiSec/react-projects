import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    // this.setState((cState) => {
    //   return { count: cState.count - 1 };
    // });
    this.setState({ count: this.state.count - 1 });
  }
  handleIncrement() {
    // this.setState((cState) => {
    //   return { count: cState.count - 1 };
    // });
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    const date = new Date("jun 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {`${date.toDateString()}
          is
          ${this.state.count} from today`}
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
export default Counter;
