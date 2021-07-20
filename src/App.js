import BoxGenerator from './Components/BoxGenerator';
import './App.css';
import React, { useState } from 'react';
import BoxDisplay from './Components/BoxDisplay';

function App() {
  const [colorBoxArray, setColorBoxArray] = useState([])

  return (
    <div className="App">
      <BoxGenerator colorBoxArray={colorBoxArray} setColorBoxArray={setColorBoxArray} />
      <BoxDisplay colorBoxArray={colorBoxArray} />
    </div>
  );
}

export default App;
