import { useState } from 'react';

import Botao from "./componentes/Botao";
import './App.css'
import Visor from "./componentes/Visor";
import Limpar from './componentes/Limpar';
import Calcula from './componentes/Calcula';



function App() {
  const [equacao, setEquacao] = useState([]);
  const [equacoes, setEquacoes] = useState([])

  return (
    <div className="app">
     <div className='container'>
      <Visor 
        equacao={equacao}>{equacao}</Visor>

      <div className="linha">
        <Botao setEquacao={setEquacao} equacao={equacao}>1</Botao>
        <Botao setEquacao={setEquacao} equacao={equacao}>2</Botao>
        <Botao setEquacao={setEquacao} equacao={equacao}>3</Botao>
        <Limpar setEquacao={setEquacao} equacao={equacao}>CE</Limpar>
      </div>
      <div className="linha">
        <Botao setEquacao={setEquacao} equacao={equacao}>4</Botao>
        <Botao setEquacao={setEquacao} equacao={equacao}>5</Botao>
        <Botao setEquacao={setEquacao} equacao={equacao}>6</Botao>
        <Botao setEquacao={setEquacao} equacao={equacao}>+</Botao>
      </div>
      <div className="linha">
        <Botao setEquacao={setEquacao} equacao={equacao}>7</Botao>
        <Botao setEquacao={setEquacao} equacao={equacao}>8</Botao>
        <Botao setEquacao={setEquacao} equacao={equacao}>9</Botao>
        <Botao setEquacao={setEquacao} equacao={equacao}>-</Botao>
      </div>
      <div className="linha">
        <Botao setEquacao={setEquacao} equacao={equacao}>*</Botao>
        <Botao setEquacao={setEquacao} equacao={equacao}>/</Botao>
        <Calcula setEquacao={setEquacao} equacao={equacao}>Calcular</Calcula>
      </div>
      </div>
      </div>
   
  );
}

export default App;
