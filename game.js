
let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;
let won = false;

while (attempts > 0) {
    let guess = Number(prompt("Guess a number between 1 and 10:"));

    if (guess === secretNumber) {
        console.log("🎉 You won!");
        won = true;
        break;
    } else if (guess < secretNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }

    attempts--;
}

if (!won) {
    console.log("Game over! The number was " + secretNumber)
}

console.log("Thanks for playing!");