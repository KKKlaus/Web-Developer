const words = require('./words');

const game = {
	gamePage: function(words) {
		return `		
			<!DOCTYPE html>
			<html>
			<head>
				<link rel="icon" href="https://img.icons8.com/ios/50/000000/indiana-jones-filled.png">
				<link rel="stylesheet" type="text/css" href="./game.css">
				<title>Guess A Word</title>
			</head>
			<body>
				<img src="./header.png" alt="" class="guessImage">
				<div class="guess-app">
					<div class="display-panel">
						${game.getWordsList(words)}
						${game.getGuessedList(words)}
					</div>
					<div class="outgoing">
						${game.getPlay(words)}
						${game.getCount(words)}
						${game.getReplay(words)}
					</div>
				</div>
			</body>
			</html>
		`;
	},

	getWordsList: function(words) {
		return `
			<ul class="wordslist"> ` + 'WordsList: ' +
			Object.values(words.getUserClass(words.getuserPort()).getwordList()).map( list => `
				<li>
					<div class="words">
						<span class="word">${list}</span>
					</div>
				</li>
			`).join('') +
			`</ul>
		`;
	},

	getGuessedList: function(words) {
		return `
			<ol class="guessedList">` + 'You have guessed: ' + 
			Object.values(words.getUserClass(words.getuserPort()).getmessages()).map( message => `
				<div class="guess">
					<span class="times">${message}</span>
				</div>
			`).join('') +
			`</ol>
		`;
	},
	getPlay: function(words) {
		return `
			<form action="/play" method="POST">
				<input class="to-guess" name="text" value="" placeholder="Make A Guess!">
				<input type="hidden" name="userPort" value=${words.getuserPort()} />
				<button class="guessButton">Guess</button>
			</form>
		`;
	},
	getCount: function(words) {
		return `
			<div class="count">
				<span class="introTimes">Times you have Guessed(accepted):</span>
				<span class="count">${words.getUserClass(words.getuserPort()).getcount()}</span>	
			</div>
		`;
	},
	getReplay: function(words) {
		return `
			<form action="/replay" method="POST">
				<input type="hidden" name="userPort" value=${words.getuserPort()} />
				<button type="replay" class="replayButton">Replay</button>
			</form>
		`;
	}
};

module.exports = game;
