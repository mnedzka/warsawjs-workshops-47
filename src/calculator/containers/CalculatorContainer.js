import React, { Component } from 'react';

class CalculatorContainer extends Component {

  state = {
    amount: 0,
    currency: 'HKD'
  }

  handleChange = (event) => {
    this.setState({ amount:  event.target.value })
  }
  handleSelectChange = (event) => {
    this.setState({ currency:  event.target.value })
  }

  render() {
    const { amount, currency } = this.state;
    return (
      <div>
        <div>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={this.handleChange}
          />
          <select onChange={this.handleSelectChange} value={currency}>
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
