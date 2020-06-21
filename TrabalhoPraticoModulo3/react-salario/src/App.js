import React, { Component } from 'react';
import InputReadyOnly from './components/salary/InputReadyOnly';
import { calculateSalaryFrom } from './components/salary/Salary.js';
import ProgressBarSalary from './components/salary/ProgressBarSalary';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: 0,
    };
  }
  handleInputChange = (event) => {
    const newText = event.target.value;
    this.setState({ fullSalary: newText });
  };

  render() {
    const { fullSalary } = this.state;
    const calc = calculateSalaryFrom(fullSalary);
    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>React Salário</h1>
        <label>Salário Bruto</label>
        <input
          className="input-field"
          type="text"
          name="fullSalary"
          id="fullSalary"
          placeholder="Salário Bruto"
          onChange={this.handleInputChange}
        />
        <InputReadyOnly
          descontoIRPF={calc.discountIRPF}
          baseInss={calc.baseINSS}
          descontoInss={calc.discountINSS}
          baseIRPF={calc.baseIRPF}
          salarioLiquido={calc.netSalary}
          fullSalary={fullSalary}
        />
        <br></br>
        <br></br>
        <ProgressBarSalary
          netSalary={calc.netSalary}
          descontoIRPF={calc.discountIRPF}
          descontoInss={calc.discountINSS}
          fullSalary={fullSalary}
          baseInss={calc.baseINSS}
        />
      </div>
    );
  }
}
const styles = {
  centeredTitle: {
    textAlign: 'center',
  },
};
