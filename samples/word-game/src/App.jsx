import React, { Component } from 'react';
import './App.css';
import Controls from './Controls';
import WordList from './WordList';
import GuessList from './GuessList';
import MakeGuess from './MakeGuess';

import { startGame, validWords } from './services';


class App extends Component {
  constructor() {
    super();
    this.state = {
      game: null,
      guesses: [],
      valid: [],
      guess: '',
    };

    this.startGame = this.startGame.bind(this);
    this.updateGuess = this.updateGuess.bind(this);
  }

  startGame() {
    startGame()
    .then( id => {
      this.setState({ game: id });
    });
    validWords()
    .then( words => {
      this.setState({ valid: words });
    });
  }

  updateGuess(guess) {
    console.log({guess});
    this.setState({
      guess
    });
  }

  render() {
    // Disable guessing if there is no current game
    // When Start New is clicked, call the services to populate the valid words and start a new game (record the id)
    return (
      <div className="App">
        <Controls startGame={this.startGame}/>
        <WordList words={this.state.valid}/>
        <GuessList/>
        { this.state.game && <MakeGuess updateGuess={this.updateGuess} disabled={!this.state.game} guess={this.state.guess}/> }
      </div>
    );
  }
}

export default App;
