import React, { Component } from 'react';
import css from './salary.module.css';

export default class ProgressBarSalary extends Component {
  render() {
    const {
      netSalary,
      descontoIRPF,
      descontoInss,
      baseInss,
      fullSalary,
    } = this.props;

    const percdescontoInss =
      baseInss != 0 ? [descontoInss / baseInss] * 100 : 0;
    const percdescontoIRPF =
      fullSalary != 0 ? [descontoIRPF / fullSalary] * 100 : 0;
    const percNetSalary = fullSalary != 0 ? [netSalary / fullSalary] * 100 : 0;

    return (
      <div className={css.App}>
        <span
          style={{
            width: `${percdescontoInss}%`,
          }}
          className={css.backgroundColorInss}
        ></span>
        <span
          style={{
            width: `${percdescontoIRPF}%`,
          }}
          className={css.backgroundColorIrpf}
        ></span>
        <span
          style={{
            width: `${percNetSalary}%`,
          }}
          className={css.backgroundColorNetSalary}
        ></span>
      </div>
    );
  }
}
