const express = require('express');
const app = express();
const PORT = 4000;
const chat = require('./chat');

app.post('/add', express.json(), (req, res) => {
  const { mes } = req.body;
  chat.addMessage({ sender: 'Me', text : mes, timestamp: new Date() });
  res.json(chat.messages);
});

app.get('/update', (req, res) => {
  res.json({ usersList:chat.users, messagesList:chat.messages});
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );
