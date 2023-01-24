import React, { useState } from 'react';
import './estilo.css';

function App() {
  return (

    <div className='container'>
      <h1>Calculadora</h1>
      <img src={require('./assets/Calculadora.png')} className='img' alt='Calculadora' />
      <a className='display'>0</a>
      <div className='botoes'>
        <div className='fileira1'>
          <a className='onoff'></a>
        </div>
        <div className='fileira2'>
          <a className='btn7'></a>
          <a className='btn8'></a>
          <a className='btn9'></a>
          <a className='btnDivisao'></a>
        </div>
        <div className='fileira3'>
          <a className='btn4'></a>
          <a className='btn5'></a>
          <a className='btn6'></a>
          <a className='btnMultiplicacao'></a>
        </div>
        <div className='fileira4'>
          <a className='btn3'></a>
          <a className='btn2'></a>
          <a className='btn1'></a>
          <a className='btnSubtracao'></a>
        </div>
        <div className='fileira5'>
          <a className='btn0'></a>
          <a className='btnPonto'></a>
          <a className='btnIgual'></a>
          <a className='btnSoma'></a>
        </div>

      </div>
    </div>
  );
}

export default App;