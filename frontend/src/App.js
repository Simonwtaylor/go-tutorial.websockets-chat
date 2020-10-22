import React from 'react';
import './App.css';
import { connect, sendMsg } from './api';
import Header from './components/header';
import ChatHistory from './components/chat-history';

function App() {

  const [chatHistory, onChatHistory] = React.useState([]);
  connect((msg) => {
    console.log("NEW MESSAGE");
    onChatHistory([...chatHistory, msg]);
    console.log(chatHistory);
  });

  const send = () => {
    console.log("Hello");
    sendMsg("Hello!");
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}>
        HIT ME
      </button>
    </div>
  );
}

export default App;
