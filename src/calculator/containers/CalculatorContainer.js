import React, { Component } from 'react';

class CalculatorContainer extends Component {

  state = {
    amount: 0
  }

  // constructor(props) {
  //   super(props);

  //   this.handleChange = this.handleChange.bind(this);
  // }

  handleChange = (event) => {
    this.setState({ amount:  event.target.value })
  }

  render() {
    const { amount } = this.state;
    return (
      <div>
        <div>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={this.handleChange}
          />
          <select>
            <option>GBP</option>
            <option>HKD</option>
            <option>IDR</option>
            <option>ILS</option>
            <option>PLN</option>
          </select>
          <input type="submit" value="Send" />
        </div>
      </div>
    );
  }
}

export default CalculatorContainer;
