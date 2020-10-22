import React from 'react';
import './App.css';
import { connect, sendMsg } from './api';

function App() {
  connect();

  const send = () => {
    console.log("Hello");
    sendMsg("Hello!");
  };

  return (
    <div className="App">
      <button onClick={send}>
        HIT ME
      </button>
    </div>
  );
}

export default App;
