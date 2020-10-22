import React from 'react';
import './message.scss';

const Message = ({ message }) => {
  const [content, onContent] = React.useState(JSON.parse(message));
  return (
    <div className="message">
      {content.body}
    </div>
  );
}
 
export default Message;