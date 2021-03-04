export function getRandomThrow() {
    const randomThrow = Math.ceil(Math.random() * 3);
    if (randomThrow === 1) {
        return 'rock';
    } else if (randomThrow === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

export function checkResult(userInput, computerInput) {
    if (userInput === computerInput) {
        return 0;
    } else if (userInput === 'rock' && computerInput === 'scissors') {
        return 1;
    } else if (userInput === 'rock' && computerInput === 'paper') {
        return 2;
    } else if (userInput === 'paper' && computerInput === 'rock') {
        return 1;
    } else if (userInput === 'paper' && computerInput === 'scissors') {
        return 2;
    } else if (userInput === 'scissors' && computerInput === 'paper') {
        return 1;
    } else if (userInput === 'scissors' && computerInput === 'rock') {
        return 2;
    }
}
