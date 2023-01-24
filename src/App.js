import React, { useState, useEffect } from 'react';
import './estilo.css';

function App() {

const [display, setDisplay] = useState();

useEffect(() => {
  setDisplay('');
},[]);

function onoff(){
  if(display === ''){
    setDisplay(0);
  }else{
    setDisplay('');
  }
}

  return (

    <div className='container'>
      <h1>Calculadora</h1>
      <img src={require('./assets/Calculadora.png')} className='img' alt='Calculadora' />
      <a className='display'>{display}</a>
      <div className='botoes'>
        <div className='fileira1'>
          <a className='onoff' onClick={onoff}></a>
        </div>
        <div className='fileira2'>
          <a className='btn7' onClick={onoff}></a>
          <a className='btn8' onClick={onoff}></a>
          <a className='btn9' onClick={onoff}></a>
          <a className='btnDivisao' onClick={onoff}></a>
        </div>
        <div className='fileira3'>
          <a className='btn4' onClick={onoff}></a>
          <a className='btn5' onClick={onoff}></a>
          <a className='btn6' onClick={onoff}></a>
          <a className='btnMultiplicacao' onClick={onoff}></a>
        </div>
        <div className='fileira4'>
          <a className='btn3' onClick={onoff}></a>
          <a className='btn2' onClick={onoff}></a>
          <a className='btn1' onClick={onoff}></a>
          <a className='btnSubtracao' onClick={onoff}></a>
        </div>
        <div className='fileira5'>
          <a className='btn0' onClick={onoff}></a>
          <a className='btnPonto' onClick={onoff}></a>
          <a className='btnIgual' onClick={onoff}></a>
          <a className='btnSoma' onClick={onoff}></a>
        </div>
      </div>
    </div>
  );
}

export default App;