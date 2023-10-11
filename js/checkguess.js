// Get references to buttons and user input for number
const enterButton = document.getElementById("enterButton");
const againButton = document.getElementById("againButton");
const guessStatus = document.getElementById("guessStatus");

// Generate a random number between 1 and 100
const randomNumber = Math.ceil(Math.random() * 100);

// Function to check user's guess and provide feedback
const checkNumber = () => {
  const userGuess = parseInt(document.getElementById("userGuess").value);
  if (userGuess == randomNumber) {
    // If the user guess is correct, display a success message and update UI elements
    guessStatus.innerHTML = "<strong>You are the one</strong>, your guess of  " + randomNumber + " is the mystery number.<br />Take the red pill and let's see how deep the rabbit goes...";
    document.getElementById("morpheus").src = "../img/morph2.png";
    document.getElementById("guessStatus").className = "correct";
    document.getElementById("oneStatus").innerHTML = "You are the one.";
    document.getElementById("oneStatusRule").innerHTML = "Let's save Zion.";
    document.getElementById("oneStatusRule").style.textAlign = "center";
  } else if (userGuess > randomNumber && userGuess < 100) {
    // If the guess is too high, display a message suggesting a lower guess
    guessStatus.innerHTML = "You guessed " + userGuess + " - which is too high. <strong>Take the blue pill</strong>. Ignorance is bliss.<br />Try again if you still believe you could be the one.";
    document.getElementById("morpheus").src = "../img/morph1.png";
    document.getElementById("guessStatus").className = "tooHigh";
  } else if (userGuess < 1 || userGuess > 100) {
    // If the guess is out of the valid range, display an error message
    guessStatus.innerHTML = "Your guess was " + userGuess + " - it has to be between 1 and 100, try again. Are you sure you are in the right place? Are you a human or an AI?";
    document.getElementById("guessStatus").className = "error";
  } else if (isNaN(userGuess)) {
    // If the user input is not a number, display an error message
    guessStatus.innerHTML = "No number entered.<br />I am pretty sure you are not the one But try again if you still believe you could be.";
    document.getElementById("guessStatus").className = "error";
  } else {
    // If the guess is too low, display a message suggesting a higher guess
    guessStatus.innerHTML = "You guessed " + userGuess + " - which is too low. <strong>Take the blue pill</strong>. Ignorance is bliss.<br />Try again if you still believe you could be the one.";
    document.getElementById("morpheus").src = "../img/morph1.png";
    document.getElementById("guessStatus").className = "tooLow";
  }
};

// Event listener for the enter button, calls the checkNumber function when clicked
enterButton.addEventListener("click", checkNumber);

// Event listener for the "Play Again" button, reloads the page to start a new game
againButton.addEventListener("click", function () {
  location.reload();
});
