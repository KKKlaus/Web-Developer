window.name = 'Mypage';

( function sendLimit() { 
  const sendButton = document.querySelector(".send button");
  const toSend = document.querySelector(".to-send");
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
})(); 


( function loginLimit() {
  const loginButton = document.querySelector('.login button');
  const username = document.querySelector('.login input');
  if(loginButton && username) {
    loginButton.disabled = !username.value;
    username.addEventListener('input', (e) =>{
      if(e.target.value) {
        loginButton.disabled = false;
      } else {
        loginButton.disabled = true;
      }
    });
  } 
})();

( function usersListExpansion() {
  const usersDOM = document.querySelectorAll('.user');
  const users = initArray(usersDOM);
  const states = [];
  init(states,users);
  const unSelectAll = addButton();
  addButtonEvent(states,unSelectAll,users);
  for(let everyUser of users){
    everyUser.addEventListener('click', () => {
      allEvents(users,states,everyUser,unSelectAll);
    });
  }
})();


function allEvents(users,states,everyUser,unSelectAll){
  setState(states,everyUser,users);
  changecolor(everyUser);
  setOrHideButton(states,users,unSelectAll);
  removeCreateElement();
  messagesLayout(states);

}



function initArray(usersDOM){
  const usersArray = [];
  for(let i = 0; i < usersDOM.length; i++){
    usersArray[i] = usersDOM[i];
  }
  return usersArray;
}


function init(states,users){
  for(let i = 0; i < users.length; i++){
    states[i] = false;
    users[i].style.color = "";
  }
}

function addButton(){
  const unSelectAll = document.createElement('button'); 
  unSelectAll.textContent = "Unselect All";
  unSelectAll.style.backgroundColor = "#17B7EE";
  unSelectAll.style.color = "white";
  unSelectAll.style.fontSize = "13px";
  const usersList = document.getElementsByClassName('users');
  if(usersList.length > 0){
    usersList[usersList.length - 1].appendChild(unSelectAll);
  }
  unSelectAll.style.display = "none";
  return unSelectAll;
}





function setState(states,everyUser,users){
  const index = users.indexOf(everyUser);
  if(states[index]){
    states[index] = false;
  }else{
    states[index] = true;
  }
}

function setOrHideButton(states,users,unSelectAll){
  for(let everyState of states){
    if(everyState){
      unSelectAll.style.display = "block";
      return;
    }
  }
  unSelectAll.style.display = "none";
}

function changecolor(everyUser){
    if(everyUser.style.color === ""){
      everyUser.style.color = "red";
    }else{
      everyUser.style.color = "";
    }
}


function randomColor(){
   const r = Math.floor(Math.random()*255);
   const g = Math.floor(Math.random()*255);
   const b = Math.floor(Math.random()*255);
   const color = 'rgba('+ r +','+ g +','+ b +',0.8)';
   return color;
}

function addButtonEvent(states,unSelectAll,users){
  unSelectAll.addEventListener('click', () => {
      init(states,users);
      unSelectAll.style.display = "none";
      removeCreateElement()
      messagesLayout(states);
    });
}

function removeCreateElement(){
  const creates = document.querySelectorAll('.createElement');
  for(let everyElement of creates){
    everyElement.parentElement.removeChild(everyElement);
  }
}

function messagesLayout(states){
  const senderNames = initArray(document.querySelectorAll('.sender-info span'));
  const usersList = initArray(document.querySelectorAll('.user span'));
  const message = document.querySelectorAll('.message');

  initInfo(message);

  let start = -1;
  let end = -1;
  let hideSenderName = "";

  for(let i = 0; i < senderNames.length; i++){
    if(isSelected(senderNames[i].textContent,usersList,states)){
      hideInfo(start,end,message);
      addIndicator(start,end,message,hideSenderName);
      hideSenderName = "";
      start = i;
    }
    else{
      const temp = senderNames[i].textContent + " ";
      if(hideSenderName === "" || hideSenderName.indexOf(temp) === -1){
        hideSenderName = hideSenderName + senderNames[i].textContent + " ";
      }
      end = i;
    }
  }
  if(end - start < message.length){
    addIndicator(start,end,message,hideSenderName);
  }
  if(end - start === message.length){
    for(let state of states){
      if(state){
        addIndicator(start,end,message,hideSenderName);
      }
    }
  }

  hideInfo(start,end,message);
  checkAll(states,message);
}





function isSelected(ithUserName,usersList,states){
  for(let i = 0; i < usersList.length; i++){
    if(usersList[i].textContent === ithUserName){
      return states[i];
    }
  }
}

function initInfo(message){
  for(let i = 0; i < message.length; i++){
    message[i].style.visibility = "visible";
    message[i].style.height = "";
  }
}

function hideInfo(start,end,message){
  for(let i = start + 1; i <= end; i++){
    message[i].style.visibility = "hidden";
  }
}

function checkAll(states,message){
  let haveSelected = false;
  for(let state of states){
    if(state){
      haveSelected = true;
    }
  }
  if(!haveSelected){
    for(let mes of message){
      mes.style.visibility = "visible";
    }
  }
}


function addIndicator(start,end,message,hideSenderName){
  for(let i = start + 1; i <= end; i++){
    message[i].style.height = 0;
  }
  const x = document.createElement('span');
  x.innerText = hideSenderName + " : infomation is hidden here.";
  x.className = "createElement";
  x.style.fontSize = "18px";
  x.style.paddingLeft = "10px";
  x.style.fontStyle = "italic"
  if(end - start === message.length){
    const parent = document.querySelector('ol.messages');
    if(parent.childElementCount === message.length){
      parent.appendChild(x);
    }
  }else{
    if(end > start){
      if(end == message.length - 1){
        const parent = message[start].parentElement;
        parent.appendChild(x);
    }
    else{
      const parent = message[end + 1].parentElement;
      parent.insertBefore(x,message[end + 1]);
    }
  }
  }
  
}




