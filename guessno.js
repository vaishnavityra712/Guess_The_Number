var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var ans = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessedNos = [];

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please enter a number between 1 & 100");
    }
    else {
        guessedNos.push(user_guess);
        no_of_guesses += 1;

        if (user_guess < ans) {
            msg1.textContent = "your guess is too low";
            msg2.textContent = "total no.of guesses: " + no_of_guesses;
            msg3.textContent = "guessed numbers are: " + guessedNos;
        }
        else if (user_guess > ans) {
            msg1.textContent = "your guess is too high";
            msg2.textContent = "total no.of guesses: " + no_of_guesses;
            msg3.textContent = "guessed numbers are: " + guessedNos;
        }
        else if (user_guess == ans) {
            msg1.textContent = "Yippie you guessed it right";
            msg2.textContent = "The answer was: " + ans;
            msg3.textContent = "You guessed it in " + no_of_guesses + " guesses";
        }
    }
}