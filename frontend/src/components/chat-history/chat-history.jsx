import React from 'react';
import './chat-history.scss';
import Message from '../message';

const ChatHistory = ({ chatHistory }) => {
  const messages = chatHistory.map((msg, index) => (
    <Message key={index} message={msg.data} />
  ));

  return (
    <div className={'chat-history'}>
      <h2>Chat History</h2>
      {messages}
    </div>
  );
}
 
export default ChatHistory;