const express = require('express');
const app = express();
const PORT = 3000;
const game = require('./game');

app.get('/game/', (req, res) => {
  res.json(game.board);
});

app.put('/game/', express.json(), (req, res) => {
  const board = req.body.board;
  res.json(game.checkForWinner(board));
});



app.use(express.static('public'));
app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );

