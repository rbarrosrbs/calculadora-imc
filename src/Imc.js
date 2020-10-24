import React, { Component } from "react";

class Imc extends Component {
  state = {
    altura: 0,
    peso: 0,
    imc: 0,
  };

  calcular = () => {
    let imc = (
      this.state.peso /
      (this.state.altura * this.state.altura)
    ).toFixed(2);
    this.setState({ imc });

    let classificacao = this.state;
    classificacao.resultado = imc;

    if (classificacao.resultado < 18.5) {
      classificacao.resultadoText = "Magreza - Obesidade Grau 0";
    }
    if (classificacao.resultado > 18.5 && classificacao.resultado <= 24.9) {
      classificacao.resultadoText = "Normal - Obesidade Grau 0";
    }
    if (classificacao.resultado > 24.9 && classificacao.resultado <= 29.9) {
      classificacao.resultadoText = "Sobrepeso - Obesidade Grau I";
    }
    if (classificacao.resultado > 29.9 && classificacao.resultado <= 39.9) {
      classificacao.resultadoText = "Obesidade - Obesidade Grau II";
    }
    if (classificacao.resultado > 39.9) {
      classificacao.resultadoText = "Obesidade Grave- Obesidade Grau III";
    }

    this.setState({ classificacao });
  };

  render() {
    return (
      <div className="imc">
        <h2>Calculadora de IMC</h2>
        <label className="label">Peso:</label>
        <input
          type="number"
          id="peso"
          placeholder="ex.: 70.2"
          autoFocus
          onChange={(e) => this.setState({ peso: e.target.value })}
        />
        <label className="label">Altura:</label>
        <input
          type="number"
          id="altura"
          placeholder="ex.: 1.70"
          onChange={(e) => this.setState({ altura: e.target.value })}
        />
        <button className="button" onClick={this.calcular}>
          {" "}
          Calcular{" "}
        </button>
        <h2>IMC: {this.state.imc}</h2>
        <p>{this.state.resultadoText}</p>
      </div>
    );
  }
}
export default Imc;
