import React from 'react';
import './App.css';
import { connect, sendMsg } from './api';
import Header from './components/header';
import ChatHistory from './components/chat-history';
import ChatInput from './components/chat-input';

function App() {

  const [chatHistory, onChatHistory] = React.useState([]);
  connect((msg) => {
    console.log("NEW MESSAGE");
    onChatHistory([...chatHistory, msg]);
    console.log(chatHistory);
  });

  const send = (event) => {
    if(event.keyCode === 13) {
      console.log("Hello");
      sendMsg(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
}

export default App;
