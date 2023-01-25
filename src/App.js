import React, { useState } from 'react';
import './estilo.css';

function App() {

  const [valor, setValor] = useState('');
  const [operacao, setOperacao] = useState(false);
  const [resultado, setResultado] = useState(0);
  const [armazenamento, setArmazenamento] = useState(0);

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

  return (

    <div className='container'>
      <h1>Calculadora</h1>
      <div className='calculadora'>
        {Display(valor, resultado)}
        <div className='botoes'>
          <div className='fileira'>
            {Botao('btn5', '', '')}
            {Botao('btn5', '', '')}
            {Botao('btn5', '', '')}
            {Botao('btn4', 'AC', '')}
          </div>
          <div className='fileira'>
            {Botao('btn1', '7', '')}
            {Botao('btn1', '8', '')}
            {Botao('btn1', '9', '')}
            {Botao('btn2', '/', '')}
          </div>
          <div className='fileira'>
            {Botao('btn1', '4', '')}
            {Botao('btn1', '5', '')}
            {Botao('btn1', '6', '')}
            {Botao('btn2', '*', '')}
          </div>
          <div className='fileira'>
            {Botao('btn1', '3', '')}
            {Botao('btn2', '2', '')}
            {Botao('btn3', '1', '')}
            {Botao('btn2', '-', '')}
          </div>
          <div className='fileira'>
            {Botao('btn1', '0', '')}
            {Botao('btn2', '.', '')}
            {Botao('btn3', '=', '')}
            {Botao('btn2', '+', '')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;