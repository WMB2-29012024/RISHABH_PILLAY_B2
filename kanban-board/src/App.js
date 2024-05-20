import './App.css';
import AddList from './component/AddList/AddList';
import ListContainer from './component/ListCantainer/ListContainer';
import { useState } from 'react';


function App() {

  const [list, setList] = useState([])

   console.log(list);

  return (
    <div className="App">

      {
        list.map(()=><ListContainer/>)
      }

      

      <AddList
        list={list}
        setList={setList}
      />

    </div>
  );
}



export default App;
