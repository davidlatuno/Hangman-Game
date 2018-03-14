
var colors = ["red", "blue", "yellow"];


var correctWord = [];

var wrongLetters = [];

var guessLeft = 10;


document.onkeyup = key;



function key () {

    
    if (guessLeft = 0 || guessLeft = 10) {

        // Word Generator
            var randColor = colors[Math.floor(Math.random() * (colors.length))];

        // Split generated word into own array
            var computerWord = randColor.split(""); 

        // push empty space into correctWord to match array length of generated word
            for (var i = 0; i < computerWord.length; i++) {
                correctWord.push(" ");
            }
    }

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

    console.log(guessLeft);
}