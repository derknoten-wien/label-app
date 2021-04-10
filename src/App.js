import './App.css';
import React, {useState} from 'react';
import Content from "./Content";


export default function App() {
const [mode, setMode] = useState(false);

const changeMode = (event)=>{
  setMode(event.target.checked);  
}

  return (
    <div className="App">
      <label>Kisten Schild drucken?</label>
      <input type="checkbox" onChange={changeMode} checked={mode}/>
      <Content mode={mode}></Content>
    </div>
  );
}