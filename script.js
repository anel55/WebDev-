document.getElementById('rollButton').addEventListener('click', rollDice);

let rollCount = 0;

function rollDice() {
    const dice1 = getRandomNumber();
    const dice2 = getRandomNumber();

    // Update dice images
    document.getElementById('dice1').src = `images/dice${dice1}.png`;
    document.getElementById('dice2').src = `images/dice${dice2}.png`;

    // Update sum
    const sum = dice1 + dice2;
    document.getElementById('sum').innerText = `Sum: ${sum}`;

    // Update roll counter
    rollCount++;
    document.getElementById('counter').innerText = `Rolls: ${rollCount}`;

    // Check for winning condition (doubles)
    const message = dice1 === dice2 ? 'You rolled a double!' : '';
    document.getElementById('message').innerText = message;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
