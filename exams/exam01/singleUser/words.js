const wordsList = [
	"TEA", 
	"EAT", 
	"TEE", 
	"PEA", 
	"PET", 
	"APE",
];

const messages = [

];

const wordsMatches = [

];

let count = 0;
let curSecretWord = "";


function generateSecretWordRandomly() {
	const randomIndex = Math.floor(Math.random() * wordsList.length);
	curSecretWord =  wordsList[randomIndex];
}

function getSecretWord() {
	return curSecretWord;
}

function setSecretWord(word) {
	curSecretWord = word;
}

function getCount() {
	return count;
}

function setCount(number) {
	count = number;
}

function isValid(word) {
	for (let wordInList of wordsList) {
		wordInList = wordInList.toLowerCase();
		word = word.toLowerCase();
		if(wordInList === word){
			return true;
		}
	}
	return false;
}

function findIndex(word) {
	for (let i = 0; i < wordsList.length; i++) {
		const wordInList = wordsList[i].toLowerCase();
		word = word.toLowerCase();
		if(wordInList === word){
			return i;
		}
	}
	return -1;
}

function countMatches(wordInList, word) {
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
 
function processInput(word) {
	let outputMessage = "";
	if(word.toLowerCase() === curSecretWord.toLowerCase()) {
		count += 1;
		outputMessage = "You have won the game in " + count + " times, click replay button to start a new game!";
	}
	else{
		if(isValid(word)) {
			const matchesNumber = countMatches(curSecretWord,word);
			outputMessage = word + "  :  " + matchesNumber + " matches!";
			count += 1;
		}
		else {
			outputMessage = word + " :  Invalid word!";
		}
	}

	messages.push(outputMessage);
}

function initMessages() {
	messages.splice(0, messages.length);
}


const words = {
	wordsList,
	messages,
	wordsMatches,
	generateSecretWordRandomly,
	isValid,
	findIndex,
	countMatches,
	processInput,
	initMessages,
	getSecretWord,
	setSecretWord,
	getCount,
	setCount,
};

module.exports = words;