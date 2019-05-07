const express = require('express');
const app = express();
const game = require('./game');
const PORT = 4000;

app.use(express.static('public'));

app.post('/game', (req, res) => {
  const id = game.startNew();
  res.json({ id });
  // start new game
  // returns an id
});
app.get('/game/:id/guess', (req, res) => {
  // make a guess
  // passes in a guess word
  // gets matching letter count and if exact and if invalid word
  const id = req.params.id;
  const guess = req.query.guess;
  const result = game.guess({ id, guess });
  res.json({ result });
  //
});
app.get('/words', (req, res) => {
  // get list of possible
  // words
  res.json(game.getValidWords());
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );


//  in word-game/: npm start
//  in word-game/server/: nodemon server.js
