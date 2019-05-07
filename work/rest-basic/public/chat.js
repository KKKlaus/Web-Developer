(function() {
  const sendButton = document.querySelector('.send button');
  const toSend = document.querySelector('.to-send');
  if(toSend && sendButton) {
    sendButton.disabled = !toSend.value;
    toSend.addEventListener('input', (e) => {
      if(e.target.value) {
        sendButton.disabled = false;
      } else {
        sendButton.disabled = true;
      }
    });
  }

  const loginButton = document.querySelector('.login button');
  const tologin = document.querySelector('.login input');
  if(loginButton && tologin) {
  	loginButton.disabled = !tologin.value;
    tologin.addEventListener('input', (e) => {
      if(e.target.value) {
        loginButton.disabled = false;
      } else {
        loginButton.disabled = true;
      }
    });
  }



  if(document.querySelector('.refresh') != null){
  	document.querySelector(".refresh").style.display = "none";

    const refresh = () => {
	  formatUser = function(user) {
		return `
		  <li>
		  	<div class="user">
		          <span class="username">${user}</span>
		        </div>
		      </li>
		    `;
	  };
	  formatMessage = function(message) {
	    return `
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
	    `;
  	   };
  	   formatErrorMessage = function(error) {
  	   	return `
	        <div class="message">
	          <div class="meta-info">
	            <div class="sender-info">
	              <span class="username">Error</span>
	            </div>
	            <div class="message-info">
	              <span class="timestamp"></span>
	            </div>
	          </div>
	          	<p class="message-text">${error}</p>
	         </div>
  	   	`;
  	   }
	  fetch('/messages/')
	    .then( response => {
	      if( response.ok ) {
	        return response.json();
	      }
	      throw Error(response.statusText);
	    })
	    .then( info => {
	      const users = Object.values(info.users).map( this.formatUser).join('');
	      document.querySelector('.users').innerHTML = users;
	      const mes = info.messages.map( this.formatMessage ).join('');
	      document.querySelector('.messages').innerHTML = mes;

		  const errorMes = document.querySelector('.error');
		  if(errorMes != null) {
		  	errorMes.parentElement.removeChild(errorMes);
		  }
		  setTimeout(refresh, 5000);
	    });
	  }

	  const resetSendForm = () => {
	    const messages = document.querySelector('.to-send').value = '';
	  };

	  document.querySelector(".send button").addEventListener('click',() => {
	  	event.preventDefault();
	  	const messages = document.querySelector('.to-send').value;
	  	const user = document.querySelector('.logout input').value;
	  	resetSendForm();
	  	fetch('/messages/', {
		  method: 'POST',
		  headers: new Headers({
		    'content-type': 'application/json'
		  }),
		  body: JSON.stringify( { user, messages } )
	  	})
	  	.then(response => {
		   if( response.ok ) {
	         refresh();
	       } else {
	         throw new Error(" post error" );
	       }
	  	})
	    .catch(function(error){
	    	const errorElement = document.createElement('li');
	    	error = error + " and there maybe NETWORK Errors reaching the service";
	    	errorElement.innerHTML = formatErrorMessage(error);
	    	errorElement.className = "error";
	    	document.querySelector('.messages').appendChild(errorElement);
	    });


	  });
	  
	  refresh();
}

})();