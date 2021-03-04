// IMPORT MODULES under test here:
import { getRandomThrow, checkResult } from '../get.random.throw.js';

const test = QUnit.test;

test('This will test if function randomThrow returns random string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'string';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = typeof(getRandomThrow());

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('This will test if function checkResult returns a result using RPS logic for ROCK', (expect) => {
    //Arrange
    // Expect the function to return correct values
    const expected0 = 0;
    const expected1 = 1;
    const expected2 = 2;
    
    //Act 
    // Calls the function to see if the expected values are correct
    const actual0 = checkResult('rock', 'rock');
    const actual1 = checkResult('rock', 'scissors');
    const actual2 = checkResult('rock', 'paper');

    //Expect
    // Checks if actual and expected are equal
    expect.equal(actual0, expected0);
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});

test('This will test if function checkResult returns a result using RPS logic for PAPER', (expect) => {
    //Arrange
    // Expect the function to return correct values
    const expected0 = 0;
    const expected1 = 1;
    const expected2 = 2;
    
    //Act 
    // Calls the function to see if the expected values are correct
    const actual0 = checkResult('paper', 'paper');
    const actual1 = checkResult('paper', 'rock');
    const actual2 = checkResult('paper', 'scissors');

    //Expect
    // Checks if actual and expected are equal
    expect.equal(actual0, expected0);
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});

test('This will test if function checkResult returns a result using RPS logic for SCISSORS', (expect) => {
    //Arrange
    // Expect the function to return correct values
    const expected0 = 0;
    const expected1 = 1;
    const expected2 = 2;
    
    //Act 
    // Calls the function to see if the expected values are correct
    const actual0 = checkResult('scissors', 'scissors');
    const actual1 = checkResult('scissors', 'paper');
    const actual2 = checkResult('scissors', 'rock');

    //Expect
    // Checks if actual and expected are equal
    expect.equal(actual0, expected0);
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});
