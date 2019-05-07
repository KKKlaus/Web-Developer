import React from 'react';
import UsersList from './UsersList';
import MessagesList from './MessagesList';


const Chat = ({ usersList, messagesList, keyPress}) => {
  return (
    <div className="chat-app">
      <div className="dispaly-panel">
        <UsersList users={usersList}/>
        <MessagesList messages={messagesList}/>
      </div>
      <div className="outgoing">
        <input onKeyDown={keyPress} placeholder="Enter message to send" className="to-send"/>
      </div>
    </div>
  );
};

export default Chat;

