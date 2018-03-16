var letter = "abcdefghijklmnopqrstuvwxyz";

var colors = ["yellow"];


var correctWord = [];

var wrongLetters = [];

var computerGenerate = [];

var guessLeft = 10;

var wins = 0;

var losses = 0;


function wordGenerate() {

    // Word Generator
    var randColor = colors[Math.floor(Math.random() * (colors.length))];

    // Split generated word into own array
    var computerWord = randColor.split("");

    // push empty space into correctWord to match array length of generated word
    for (var i = 0; i < computerWord.length; i++) {
        correctWord.push("_");
        computerGenerate.push(computerWord[i]);
    }


}


function updateStats() {

    document.getElementById("win").innerHTML = wins;
    document.getElementById("lose").innerHTML = losses;
    document.getElementById("guessLeft").innerHTML = guessLeft;
    document.getElementById("lettersGuessed").innerHTML = wrongLetters.join(" ");
    document.getElementById("computerWord").innerHTML = correctWord.join(" ");

}

wordGenerate();

updateStats();

document.onkeydown = key;

document.onkeyup = win;


function key() {

    // Linked to forEach method to handle words with multiple letters
    function handleUser(x, y) {

        if (userLetter === x) {

            correctWord.splice(y, 1, userLetter);
        }

    }

    // Only alphabet keys
    if (letter.includes(event.key)) {

        var halt = wrongLetters.includes(event.key);

        // Prevent multiple entries
        if (halt) {
            return;
        }

        // user letter input
        var userLetter = event.key;

        // Handle user input to run forEach function if user letter is included in generated word or to be pushed to wrong letters
        if (computerGenerate.includes(userLetter)) {

            computerGenerate.forEach(handleUser);

        } else {

            wrongLetters.push(userLetter);
            guessLeft--;
        }


        // Reset if Guess = 0
        if (guessLeft === 0) {
            guessLeft += 10;
            losses++;
            wrongLetters.splice(0, wrongLetters.length);
            correctWord.splice(0, correctWord.length);
            computerGenerate.splice(0, computerGenerate.length);

            wordGenerate();
        }


        updateStats();
    }

}

function win() {

    var compare = correctWord.join("")

    var compareNew = computerGenerate.join("");


    // Reset if Win
    if (compareNew === compare) {

        guessLeft = 10;

        wins++;


        wrongLetters.splice(0, wrongLetters.length);

        correctWord.splice(0, correctWord.length);

        computerGenerate.splice(0, computerGenerate.length);

        wordGenerate();

        updateStats();

        alert("YOU WIN!");


    }

}