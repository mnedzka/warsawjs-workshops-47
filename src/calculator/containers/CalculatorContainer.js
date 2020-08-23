import React, { Component } from 'react';

import Input from '../components/Input';
import Select from '../components/Select';
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
            <Input
              name="amount"
              placeholder="Amount"
              value={amount}
              handleChange={this.handleChange}
            />
            <Select
              name="base"
              value={base}
              handleChange={this.handleChange}
            />
          </div>
          <div>
            <h5>Convert to</h5>
            <Select
              name="currency"
              value={currency}
              handleChange={this.handleChange}
            />
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
