const chatWeb = {
  chatPage: function(chat) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="/chat.css"/>
          <title>Chat</title>
        </head>
        <body>
          <div id="chat-app">
            <div class="display-panel">
              ${chatWeb.getUserList(chat)}
              ${chatWeb.getMessageList(chat)}
            </div>
            ${chatWeb.getOutgoing(chat)}
            ${chatWeb.getOtherOperations(chat)}
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function(chat) {
    return `
      <ol class="messages">` +
      chat.messages.map( message => `
        <li>
          <div class="message">
            <div class="meta-info">
              <div class="sender-info">
                <span class="username">${message.sender}</span>
              </div>
              <div class="message-info">
                <span class="timestamp">${message.timestamp}</span>
              </div>
            </div>
            <p class="message-text">${message.text}</p>
          </div>
        </li>
      `).join('') +
      `</ol>
      `;
  },
  getUserList: function(chat) {
    return `<ul class="users">` + 'Online:'+ 
    Object.values(chat.users).map( user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') +
    `</ul>`;
  },
  getOutgoing: function(chat) {
    return `
      <div class="outgoing">
        <form action="/chat" method="POST">
          <input class="to-send" name="text" value="" placeholder="Enter message to send"/>
          <input type="hidden" name="username" value=${chat.currenUser} />
          <button type="submit" class="sendButton">Send</button>
        </form>
      </div>
    `;
  },
  getOtherOperations: function(chat) {
    return `
      <div class="others">
        <form action="/logout" method="POST">
          <button type="logout" class="logoutButton">Logout</button>
        </form>
        <form action="/refresh" method="POST">
          <input type="hidden" name="username" value=${chat.currenUser} />
          <button type="refresh" class="refreshButton">Refresh</button>
        </form>
      </div>
    `;
  }

};
module.exports = chatWeb;

