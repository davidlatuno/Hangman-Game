var letter = "abcdefghijklmnopqrstuvwxyz";

var colors = ["red", "blue", "black", "pink", "white"];


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
    document.getElementById("lettersGuessed").innerHTML = wrongLetters;
    document.getElementById("computerWord").innerHTML = correctWord.join(" ");

}

wordGenerate();

updateStats();

document.onkeydown = key;


function key() {

    if (letter.includes(event.key)) {

        var halt = wrongLetters.includes(event.key);

        if (halt) {
            return;
        }


        var compare = correctWord.join("")

        if (compare === "") {

            wordGenerate();

        }

        // user letter input
        var userLetter = event.key;


        // Find index of userletter in generated word
        var correctIndex = computerGenerate.indexOf(userLetter);


        // Splice letter into correctWord array or into the wrong letter array
        if (computerGenerate.includes(userLetter)) {

            correctWord.splice(correctIndex, 1, userLetter);

        } else {
            wrongLetters.push(userLetter);
            guessLeft--;
        }

        if (guessLeft === 0) {
            guessLeft += 10;
            losses++;
            wrongLetters.splice(0, wrongLetters.length);
            correctWord.splice(0, correctWord.length);
            computerGenerate.splice(0, computerGenerate.length);
        }

        var compareNew = computerGenerate.join("");


        if (compareNew === compare) {
            guessLeft = 10;
            wins++;

            wrongLetters.splice(0, wrongLetters.length);

            correctWord.splice(0, correctWord.length);

            computerGenerate.splice(0, computerGenerate.length);


        }

        updateStats();
    }

}