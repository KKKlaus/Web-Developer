const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./chat');
const chatWeb = require('./chat-web');
const loginWeb = require('./login-web');
//var islogged = false; //true for logged, false for not. Default is not loggoed(false)
// let username = "";

app.use(express.static('./public'));


app.get('/', (req, res) => {
	// if(chat.contains(chat.currenUser) && chat.currenUser != ""){
	// 	res.send(chatWeb.chatPage(chat));
	// }
	// else{
	// 	res.send(loginWeb.loginPage());
	// 	chat.currenUser = "";
	// }
	if(chat.currenUser == ""){
		res.send(loginWeb.loginPage());
	}
	else{
		res.send(chatWeb.chatPage(chat));
		chat.currenUser = "";
	}
});

app.get('/login', (req, res) => {
	chat.currenUser = "";
	res.send(loginWeb.loginPage());
	
});

app.post('/login',express.urlencoded({ extended: false}), (req, res) => {
	chat.currenUser = req.body.username;
	chat.addUsers(chat.currenUser);
	res.redirect('/');
});

app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
  chat.currenUser = req.body.username;  
  const sender = chat.currenUser;
  const { text } = req.body;
  chat.addMessage({ sender, text, timestamp: new Date() });
  res.redirect('/');
});

app.post('/logout', express.urlencoded({ extended: false }), (req, res) => {
  chat.deleteUser(chat.currenUser);
  res.send(loginWeb.loginPage());
  //res.redirect('/login');     ???????
});

app.post('/refresh', express.urlencoded({ extended: false }), (req, res) => {
  // console.log(req.body);
  const username = req.body.username;
  // console.log("chat-cur: "+ chat.currenUser);
  chat.currenUser = username;
  res.redirect('/');
});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
