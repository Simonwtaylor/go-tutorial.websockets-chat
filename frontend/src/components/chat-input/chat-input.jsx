import React from 'react';
import './chat-input.scss';

const ChatInput = ({ send }) => {
  return (
    <div className="chat-input">
      <input onKeyDown={send} />
    </div>
  );
}
 
export default ChatInput;