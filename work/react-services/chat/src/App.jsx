import React, { Component } from 'react';
import './App.css';
import Chat from './Chat';
import { getNewMessage, updateMessage } from './services';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: {
      },
      messages: [

      ],
    };
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount(){
    updateMessage()
      .then( ({usersList, messagesList}) => {
        this.setState({
          users: usersList,
          messages : messagesList,
        })
    });
    this.myInterval = setInterval(() => {
      updateMessage()
      .then( ({usersList, messagesList}) => {
        this.setState({
          users: usersList,
          messages : messagesList,
        })
      });
    }, 5000)
  }

  addMessage(e){
    if(e.keyCode === 13 && e.target.value){
      getNewMessage(e.target.value)
      .then( newMessage => {
         this.setState({
            messages : newMessage
         })
      }); 
      e.target.value = "";
    }
  }

  render() {
    return (
      <Chat
        usersList={this.state.users}
        messagesList={this.state.messages}
        keyPress={this.addMessage}
      />
    );
  }
}

export default App;
