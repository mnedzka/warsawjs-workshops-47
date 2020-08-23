import React, { Component } from 'react';

class CalculatorContainer extends Component {

  state = {
    amount: 0,
    currency: 'HKD'
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { amount, currency } = this.state;
    return (
      <div>
        <div>
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={amount}
            onChange={this.handleChange}
          />
          <select
            name="currency"
            onChange={this.handleChange}
            value={currency}>
            <option value="GBP">GBP</option>
            <option value="HKD">HKD</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="PLN">PLN</option>
          </select>
          <input type="submit" value="Send" />
        </div>
      </div>
    );
  }
}

export default CalculatorContainer;
