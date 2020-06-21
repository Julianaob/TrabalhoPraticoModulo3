import React, { Component } from 'react';
import { formatNumber, formatPercent } from '../../helpers/formatHelpers';
import css from './salary.module.css';

export default class InputReadyOnly extends Component {
  render() {
    const {
      baseInss,
      descontoInss,
      baseIRPF,
      descontoIRPF,
      salarioLiquido,
      fullSalary,
    } = this.props;

    const percdescontoInss = baseInss != 0 ? [descontoInss / baseInss] : 0;
    const percdescontoIRPF = fullSalary != 0 ? [descontoIRPF / fullSalary] : 0;
    const percNetSalary = fullSalary != 0 ? [salarioLiquido / fullSalary] : 0;

    return (
      <div>
        <div className="row">
          <div className="col s12 m3">
            <label>Base INSS</label>
            <input
              readOnly={true}
              className={`${'input-field'} ${css.bold} `}
              value={formatNumber(baseInss)}
              type="text"
              id="baseInss"
            />
          </div>
          <div className="col s12 m3">
            <label>Desconto INSS</label>
            <input
              className={`${'input-field'} ${css.bold} ${css.colorInss}`}
              readOnly={true}
              value={`${formatNumber(descontoInss)} ${'('}${formatPercent(
                percdescontoInss || 0
              )} ${')'}`}
              type="text"
              id="descontoInss"
            />
          </div>
          <div className="col s12 m3">
            <label>Base IRPF</label>
            <input
              className={` ${'input-field'} ${css.bold} `}
              readOnly={true}
              value={formatNumber(baseIRPF)}
              type="text"
              id="baseIRPF"
            />
          </div>
          <div className="col s12 m3">
            <label>Desconto IRPF</label>
            <input
              className={`${'input-field'} ${css.bold} ${css.colorIrpf} `}
              readOnly={true}
              value={`${formatNumber(descontoIRPF)} ${'('} ${formatPercent(
                percdescontoIRPF || 0
              )} ${')'}`}
              type="text"
              id="descontoIRPF"
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m3">
            <label>Salario Liquido</label>
            <input
              className={`${'input-field'} ${css.bold} ${css.colorNetSalary}`}
              readOnly={true}
              value={`${formatNumber(salarioLiquido)} ${'('} ${formatPercent(
                percNetSalary || 0
              )} ${')'}`}
              type="text"
              id="salarioLiquido"
            />
          </div>
        </div>
      </div>
    );
  }
}
