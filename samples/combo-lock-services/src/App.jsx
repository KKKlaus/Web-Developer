import React, { Component } from 'react';
import './App.css';
import Lock from './Lock';
import { isCodeGood, generateNewSecret } from './services';

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: 'Locked',
      secretLength: null,
      sequence: []
    };
    this.addToSequence = this.addToSequence.bind(this);
    this.resetSequence = this.resetSequence.bind(this);
  }

  componentDidMount() {
    generateNewSecret()
    .then( ({ id, length }) =>{
      this.setState({
        secretLength: length,
        secretId: id
      });
    });
  }

  resetSequence() {
    this.setState({
      sequence: [],
      status: 'Locked',
    });
  }

  addToSequence(number) {
    if(this.state.sequence.length < this.state.secretLength ) {
      this.setState({
        sequence: [...this.state.sequence, number],
        status: 'Pending',
      }, () => {
        isCodeGood(this.state.secretId, this.state.sequence)
        .then( isCodeGood => {
          if(isCodeGood) {
            this.setState({
              status: 'Unlocked'
            });
          } else {
            this.setState({
              status: 'Locked'
            });
          }
        });
      });
    }
  }

  render() {
    return (
      <div className="combo-lock">
        <Lock
          status={this.state.status}
          sequence={this.state.sequence}
          add={this.addToSequence}
          reset={this.resetSequence}
        />
      </div>
    );
  }
}

export default App;
