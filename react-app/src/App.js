// import './App.css';
import Counter from './component/Counter';
import { useState , useRef, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [toggel, setToggel] = useState(0)
  const [sign , setSign] = useState('')


 
  useEffect(()=>{
    sign === "+"  ? setCount(count+1): setCount(count-1)
  },[toggel])

  return (
    <div className="App">
      <h1>{count}</h1>
      <Counter
        // count={count}
        setSign={setSign}
        toggel = {toggel}
        setToggel = {setToggel}
      />
    </div>

  );
};
export default App;
