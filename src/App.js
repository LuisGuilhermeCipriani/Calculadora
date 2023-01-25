import React, { useState } from 'react';
import './estilo.css';

function App() {

  const [valor, setValor] = useState('');
  const [operacao, setOperacao] = useState(false);
  const [resultado, setResultado] = useState(0);
  const [armazenamento, setArmazenamento] = useState(0);

  const Botao = (estilo, botao, acao) => {
    return (
      <div className={estilo} onClick={acao}>{botao}</div>
    )
  }

  return (

    <div className='container'>
      <h1>Calculadora</h1>
      <div className='calculadora'>
        <div className='display'>
        </div>
        <div className='botoes'>
          <div className='fileira'>
            {Botao('btn5', '3', '')}
            {Botao('btn5', '3', '')}
            {Botao('btn5', '3', '')}
            {Botao('btn4', '3', '')}
          </div>
          <div className='fileira'>
            {Botao('btn1', '3', '')}
            {Botao('btn1', '3', '')}
            {Botao('btn1', '3', '')}
            {Botao('btn2', '3', '')}
          </div>
          <div className='fileira'>
            {Botao('btn1', '3', '')}
            {Botao('btn1', '3', '')}
            {Botao('btn1', '3', '')}
            {Botao('btn2', '3', '')}
          </div>
          <div className='fileira'>
            {Botao('btn1', '3', '')}
            {Botao('btn2', '3', '')}
            {Botao('btn3', '3', '')}
            {Botao('btn2', '3', '')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;