import logo from './logo.svg';
import './App.css';
import crud from './config/crud';
import { useState } from 'react';


function App() {
  const [id, setId] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const addRegister = () => {
    crud.save("users", mountUser)
      .then(user => {
        console.log('USER:', user);
      }).catch(console.error)
  }
  const changeRegister = (id) => {
    crud.save("users", mountUser)
      .then(user => {
        console.log('USER:', user);
      }).catch(console.error)
  }

  const mountUser = () => {
    return { first, last }
  }
  return (
    <div className="App">
      ID: <input value={id} onChange={e => { setId(e.target.value) }}></input><br/>
      FIRST: <input value={id} onChange={e => { setFirst(e.target.value) }}></input><br/>
      LAST: <input value={id} onChange={e => { setLast(e.target.value) }}></input><br/>
      <button onClick={addRegister}>Adicionar</button><br/>
      <button onClick={changeRegister}>Alterar</button><br/>
    </div>
  );
}

export default App;
