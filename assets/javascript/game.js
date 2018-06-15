// Create an array of words 
var words = ["tupac","biggie","eminem","nas"];

// Choose a word randomly from array of words
var randNum = [Math.floor(Math.random() * words.length)];
var chosenWord = words[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];

// Testing the word 
console.log(chosenWord);

//Dom Manipulation
var docUnderScore = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");

//Create underscores based on length of word 
var generateUnderscore = function () {
    for (var i = 0; i<chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}

document.addEventListener("keypress", function(event) {
    var keyword = String.fromCharCode(event.keyCode);

//if users guess is right 
    if (chosenWord.indexOf(keyword) > -1) {
// add to right word array 
        rightWord.push(keyword);
// replace underscore with right letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(" ");
        docRightGuess[0].innerHTML = rightWord;
// Checks to see if user guesses match guesses
        if (underScore.join(" ") == chosenWord) {
            alert ("You win");
        }
    }
    else {
            wrongWord.push(keyword);
            docWrongGuess[0].innerHTML = wrongWord;
    }
});

underScore[0].innerHTML= generateUnderscore().join(" ");



// Get users guess

// Check if guess is right
    
    // if right push to right array 
    
    // if wrong push to wrong array 
