import React from 'react';

const formatMessage = function(mes, index) {
    return (
      <li key={index}>
        <div className="message">
          <div className="meta-info">
            <div className="sender-info">
              <span className="username">{mes.sender}</span>
            </div>
            <div className="message-info">
              <span className="timestamp">{mes.timestamp.toString()}</span>
            </div>
          </div>
          <p className="message-text">{mes.text}</p>
        </div>
      </li>
    );
};

const MessagesList = ({ messages }) => {
  return(
    <ol className="messages">
      { messages.map( mes => { return formatMessage(mes, messages.indexOf(mes))})}
    </ol>
  )
};

export default MessagesList;