class gameClass {
	
	constructor() {
		this.wordsList = ["TEA", "EAT", "TEE", "PEA", "PET", "APE"];
		this.messages = [];
		this.count = 0;
		this.curSecretWord = "";
	}

	addwordsList(word) {
		this.wordsList.push(word);
	}

	getwordList() {
		return this.wordsList;
	}

	setwordList(newList) {
		this.wordsList = newList; 
	}


	addmessages(mes) {
		this.messages.push(mes);
	}

	getmessages() {
		return this.messages;
	}

	setmessages(newList) {
		this.messages = newList; 
	}

	setcount(count) {
		this.count = count;
	}

	getcount() {
		return this.count;
	}

	setcurSecretWord(word) {
		this.curSecretWord = word;
	}

	getcurSecretWord() {
		return this.curSecretWord;
	}


	generateSecretWordRandomly() {
		const randomIndex = Math.floor(Math.random() * this.wordsList.length);
		this.curSecretWord =  this.wordsList[randomIndex];
	}

	isValid(word) {
		for (let wordInList of this.wordsList) {
			wordInList = wordInList.toLowerCase();
			word = word.toLowerCase();
			if(wordInList === word){
				return true;
			}
		}
		return false;
	}

	countMatches(wordInList, word) {
		wordInList = wordInList.toLowerCase();
		word = word.toLowerCase();
		let number = 0;
		const wordInListArray = wordInList.split("");
		const wordArray = word.split("");
		
		for (let i = 0; i < wordArray.length; i++) {
			const index = wordInListArray.indexOf(wordArray[i]);
			if(index !== -1) {
				number += 1;
				wordInListArray.splice(index, 1);
			}
		}

		return number;
	}

	processInput(word) {
		let outputMessage = "";
		if(word.toLowerCase() === this.curSecretWord.toLowerCase()) {
			this.count += 1;
			outputMessage = "You have won the game in " + this.count + " times, click replay button to start a new game!";
		}
		else{
			if(this.isValid(word)) {
				const matchesNumber = this.countMatches(this.curSecretWord,word);
				outputMessage = word + "  :  " + matchesNumber + " matches!";
				this.count += 1;
			}
			else {
				outputMessage = word + " :  Invalid word!";
			}
		}

		this.messages.push(outputMessage);
	}

	initMessages() {
		this.messages.splice(0, this.messages.length);
	}
}

const users = [];

function setUserClass(index) {
	users[index] = new gameClass();
}

function getUserClass(index) {
	return users[index];
}


let userPort = 0;

function setuserPort(port) {
	userPort = port;
}

function getuserPort() {
	return userPort;
}


const words = {
	users,
	setUserClass,
	getUserClass,
	setuserPort,
	getuserPort,
};

module.exports = words;


