var letter = "abcdefghijklmnopqrstuvwxyz";

var colors = ["red", "blue", "yellow"];


var correctWord = [];

var wrongLetters = [];

var guessLeft = 10;

var wins = 0;

var losses = 0;

// Word Generator
var randColor = colors[Math.floor(Math.random() * (colors.length))];

// Split generated word into own array
var computerWord = randColor.split("");

// push empty space into correctWord to match array length of generated word
for (var i = 0; i < computerWord.length; i++) {
    correctWord.push(" ");
}

document.onkeyup = key;



function key() {

    var start = true;

    if (letter.includes(event.key)) {


        

        console.log('hi');


        // user letter input
        var userLetter = event.key;


        // Find index of userletter in generated word
        var correctIndex = computerWord.indexOf(userLetter);


        // Splice letter into correctWord array or into the wrong letter array
        if (computerWord.includes(userLetter)) {

            correctWord.splice(correctIndex, 1, userLetter);

        } else {
            wrongLetters.push(userLetter);
            guessLeft--;
        }

        if (guessLeft === 0) {
            guessLeft += 10;
            losses++;
        }

        document.getElementById("lose").innerHTML = losses;
        document.getElementById("guessLeft").innerHTML = guessLeft;
        document.getElementById("lettersGuessed").innerHTML = wrongLetters;
        document.getElementById("computerWord").innerHTML = correctWord;
    }

}