import { getRandomThrow, checkResult } from './utils.js';

const playButton = document.getElementById('play');
const resetButton = document.getElementById('reset');

const winSpan = document.getElementById('wins');
const drawSpan = document.getElementById('draws');
const lossSpan = document.getElementById('losses');

let wins = 0;
let draws = 0;
let losses = 0;

playButton.addEventListener('click', () => {
    const radioCheck = document.querySelector('input:checked');
    const userThrow = radioCheck.value;
    const computerThrow = getRandomThrow();
    console.log(userThrow);

    switch (checkResult(userThrow, computerThrow)) {
        case 0:
            draws++;
            drawSpan.textContent = draws;
            break;

        case 1:
            wins++;
            winSpan.textContent = wins;
            break;
        
        case 2:
            losses++;
            lossSpan.textContent = losses;
            break;
        default:
            alert('404 not found');
    }
});

resetButton.addEventListener('click', () => {
    return window.location.reload();
});
