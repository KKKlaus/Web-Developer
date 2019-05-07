const express = require('express');
const app = express();
const PORT = 3000;

const words = require('./words');
const game = require('./game');

app.use(express.static('./public'));


app.get('/', (req, res) => {
	if(words.getSecretWord() === "") {
		words.generateSecretWordRandomly();
		console.log("Secret word is : " + words.getSecretWord());
	}
	res.send(game.gamePage(words));
});

app.post('/play', express.urlencoded({ extended: false }), (req, res) => {
  	const guessWord = req.body.text;
  	words.processInput(guessWord);
  	res.redirect('/');
});

app.get('/replay', express.urlencoded({ extended: false }), (req, res) => {
  	words.setSecretWord("");
  	words.setCount(0);
  	words.initMessages();
  	res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
