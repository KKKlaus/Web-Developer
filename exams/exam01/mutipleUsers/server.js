const express = require('express');
const app = express();
const PORT = 3000;

const words = require('./words');
const game = require('./game');

app.use(express.static('./public'));


let userNumber = 0;

app.get('/', (req, res) => {
   userNumber += 1;
   words.setuserPort(userNumber);
   const userPort = words.getuserPort();
   words.setUserClass(userPort);
   res.redirect('/:' + userPort);
});

app.get('/:' + words.getuserPort(), (req, res) => {
   let userPort = 0;
   userPort = parseInt(req.path.substring(2));
   const userclass =  words.getUserClass(userPort);
   words.setuserPort(userPort);
   if(userclass.getcurSecretWord() === "") {
      userclass.generateSecretWordRandomly();
      console.log("Secret word of user " + userPort + " is : " + userclass.getcurSecretWord());
   }
   res.send(game.gamePage(words));
});


app.post('/play', express.urlencoded({ extended: false }), (req, res) => {
   userPort = req.body.userPort;
   const guessWord = req.body.text;
   words.getUserClass(userPort).processInput(guessWord);
   res.redirect('/:' + userPort);
});

app.post('/replay', express.urlencoded({ extended: false }), (req, res) => {
   userPort = req.body.userPort;
   const userclass = words.getUserClass(userPort);
   userclass.setcurSecretWord("");
   userclass.setcount(0);
   userclass.initMessages();
   res.redirect('/:' + userPort);
});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
