import React, { useState } from 'react';
import './estilo.css';

function App() {

  const [valor, setValor] = useState('');
  const [operacao, setOperacao] = useState(false);
  const [resultado, setResultado] = useState(0);

  const Display = (valor, resultado) => {
    return (
      <div className='display'>
        <a className='valor'>{valor}</a>
        <a className='resultado'>{resultado}</a>
      </div>
    )
  }

  const Botao = (estilo, botao, acao) => {
    return (
      <div className={estilo} onClick={acao}>{botao}</div>
    )
  }

  const AdicionaDigito = (digito) => {
    if ((digito === '+' || digito === '-' || digito === '*' || digito === '/') && operacao) {
      setOperacao(false);
      setValor(resultado + digito);
      return;
    }

    if (operacao) {
      setOperacao(false);
      setValor(digito);
      return;
    }

    const valorDigitado = valor + digito;
    setValor(valorDigitado);
  }

  const Operacao = (oper) => {
    try {
      if (oper === '=') {
        setOperacao(true);
        let acao = eval(valor);
        setResultado(acao);
      }

      if (oper === '<=') {
        let valorDisplay = valor;
        valorDisplay = valorDisplay.substring(0, (valorDisplay.length - 1));
        setValor(valorDisplay);
        setOperacao(false);
        return;
      }

      if (oper === 'ac') {
        setValor('');
        setResultado(0);
      }

    } catch {
      setResultado('ERRO');
    }
  }

  return (

    <div className='container'>
      <h1>Calculadora</h1>
      <div className='calculadora'>
        {Display(valor, resultado)}
        <div className='botoes'>
          <div className='fileira'>
            {Botao('btn4', '<=', () => Operacao('<='))}
            {Botao('btn5', '(', () => AdicionaDigito('('))}
            {Botao('btn5', ')', () => AdicionaDigito(')'))}
            {Botao('btn4', 'AC', () => Operacao('ac'))}
          </div>
          <div className='fileira'>
            {Botao('btn1', '7', () => AdicionaDigito('7'))}
            {Botao('btn1', '8', () => AdicionaDigito('8'))}
            {Botao('btn1', '9', () => AdicionaDigito('9'))}
            {Botao('btn2', '/', () => AdicionaDigito('/'))}
          </div>
          <div className='fileira'>
            {Botao('btn1', '4', () => AdicionaDigito('4'))}
            {Botao('btn1', '5', () => AdicionaDigito('5'))}
            {Botao('btn1', '6', () => AdicionaDigito('6'))}
            {Botao('btn2', '*', () => AdicionaDigito('*'))}
          </div>
          <div className='fileira'>
            {Botao('btn1', '3', () => AdicionaDigito('3'))}
            {Botao('btn1', '2', () => AdicionaDigito('2'))}
            {Botao('btn1', '1', () => AdicionaDigito('1'))}
            {Botao('btn2', '-', () => AdicionaDigito('-'))}
          </div>
          <div className='fileira'>
            {Botao('btn1', '0', () => AdicionaDigito('0'))}
            {Botao('btn5', '.', () => AdicionaDigito('.'))}
            {Botao('btn3', '=', () => Operacao('='))}
            {Botao('btn2', '+', () => AdicionaDigito('+'))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;