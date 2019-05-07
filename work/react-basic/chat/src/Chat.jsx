import React from 'react';
import UsersList from './UsersList';
import MessagesList from './MessagesList';


class Chat extends React.Component{
  constructor() {
    super();
    this.state = {
      value:'',
      users: { 
      	'Brett Ritter':'Brett Ritter',
      	'Me':'Me'
      },
      messages: [
      	{
      		sender: 'Brett Ritter',
      		timestamp: new Date("2019-03-22 17:09:00"),
      		text: "I posted lots of assignments, enjoy it :)",
      	},
      ],
    };
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(e){
  	if(e.keyCode === 13 && e.target.value){
  		const newMessage = {sender:'Me', timestamp:new Date(), text:e.target.value };
  		this.setState({
  			messages : [...this.state.messages, newMessage]
  		})
  		e.target.value = "";
  	}
  }

  render() {
  	return (
  		<div className="chat-app">
	  	  <div className="dispaly-panel">
		    <UsersList users={this.state.users}/>
		  	<MessagesList messages={this.state.messages}/>
		  </div>
		  <div className="outgoing">
		  	<input onKeyDown={this.keyPress} placeholder="Enter message to send" className="to-send"/>
		  </div>
	    </div>
  	);
  }
}

export default Chat;