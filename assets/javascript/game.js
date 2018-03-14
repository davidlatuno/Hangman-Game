
var colors = ["red", "blue", "yellow"];


var correctWord = [];

var wrongLetters = [];


document.onkeyup = key

function key () {
    var randColor = colors[Math.floor(Math.random() * (colors.length))];

    var computerWord = randColor.split("");

    var userLetter = event.key;

    var correctIndex = computerWord.indexOf(userLetter);

    

    if (computerWord.includes(userLetter)) {

        correctWord.splice(correctIndex, 1, userLetter);
        
    }

    

    console.log(correctIndex);

    console.log(computerWord);

}