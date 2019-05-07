const users = {
    'Brett Ritter':'Brett Ritter',
    'Me':'Me'
};

const messages = [
    {
      sender: 'Brett Ritter',
      timestamp: new Date("2019-03-22 17:09:00"),
      text: "I posted lots of assignments, enjoy it :)",
    },
];

function addMessage({ sender, timestamp, text }) {
  messages.push({ sender, timestamp, text });
}

function addUser({ username }) {
  users[username] = username;
}

function removeUser({ username }) {
  delete users[username];
}

const chat = {
  users,
  messages,
  addMessage,
  addUser,
  removeUser
};

module.exports = chat;