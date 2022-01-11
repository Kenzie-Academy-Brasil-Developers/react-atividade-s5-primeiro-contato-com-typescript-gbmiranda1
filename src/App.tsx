import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';


interface infoPeople {
  name: string,
  age: string,
  hobby: string
}

function App() {
  const [list, setList] = useState<infoPeople[]>([])

  return (
    <div className="App">
      <header className="App-header">
        <Form list={list} setList={setList}></Form>
        <ul>
          {list && list.map((item, index) => (
            <Card name={item.name} age={item.age} hobby={item.hobby}/>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
