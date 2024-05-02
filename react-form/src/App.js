import React, { useState } from 'react';
import './App.css';

import FormComponent from './component/FormComponent';
import CartComponent from './component/CartComponent';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <FormComponent
       text={text} 
       setText={setText} />
      <CartComponent
       text={text} />
    </div>
  );
}

export default App;
