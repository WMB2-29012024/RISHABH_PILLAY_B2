import './App.css';
import InputComponent from './component/InputComponent';
import TextComponent from  './component/TextComponent';
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="App">
      <InputComponent
      inputValue = {inputValue}
      setInputValue = {setInputValue}   

      />
      <TextComponent
      inputValue = {inputValue}
      setInputValue = {setInputValue}  
      />

  
    </div>
  );
}

export default App;
