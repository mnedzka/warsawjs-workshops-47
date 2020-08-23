import React, { Component } from 'react';

class CalculatorContainer extends Component {

  state = {
    amount: 1,
    base: 'PLN',
    currency: 'HKD',
    result: 0
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state)

    fetch(`https://api.ratesapi.io/api/latest?base=${this.state.base}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        result: data.rates[this.state.currency] * parseInt(this.state.amount)
      })
    })
  }

  render() {
    const { amount, base, currency, result } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h5>Convert from</h5>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={amount}
              onChange={this.handleChange}
            />
            <select
              name="base"
              onChange={this.handleChange}
              value={base}>
              <option value="GBP">GBP</option>
              <option value="HKD">HKD</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="PLN">PLN</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <div>
            <h5>Convert to</h5>
            <select
              name="currency"
              onChange={this.handleChange}
              value={currency}>
              <option value="GBP">GBP</option>
              <option value="HKD">HKD</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="PLN">PLN</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <div>
            <h5>Result: {result}</h5>
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default CalculatorContainer;
