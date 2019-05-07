const currenUser = "";


const users = [
    
];

const messages = [
  // {
  //   sender: "Amit",
  //   timestamp: new Date("2019-01-01 19:20:00"),
  //   text: "You up?",
  // },
  // {
  //   sender: "Bao",
  //   timestamp: new Date("2019-01-01 19:21:00"),
  //   text: "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
  // }
];

function addMessage({ sender, timestamp, text }) {
  messages.push({ sender, timestamp, text });
}

function addUsers(user){
  users.push(user);
}

function deleteUser(user){
  let index = users.indexOf(user);
  users.splice(index,1);
}

function contains(user){
  for (var i = users.length - 1; i >= 0; i--) {
    if(users[i] == user){
      return true;
    }
  }
}

const chat = {
  currenUser,
  users,
  messages,
  addMessage,
  addUsers,
  deleteUser,
  contains,
};

module.exports = chat;

