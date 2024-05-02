import './App.css';
import CountComponent from './component/CountComponent';
import Button from './component/Button';
import { useState } from 'react';


function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CountComponent
        count={count}
        setCount={setCount}
      />
      <Button
      count={count}
      setCount={setCount}
      />
    </div>
  );
}

export default App;
