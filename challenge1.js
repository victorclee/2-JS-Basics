/* JavaScript coding challenge 1

The person with the highest value of his height in centimeters plus five times his age wins

1. Create variables for the heights and ages of two friends and assign them some values 
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw 
4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision.

*/ 


var victorHeight = 175;
var victorAge = 33;

var gregoryHeight = 170;
var gregoryAge = 28;

var michaelHeight = 168;
var michaelAge = 38;

var vScore = victorHeight + victorAge * 5
var gScore = gregoryHeight + gregoryAge * 5
var mScore = michaelHeight + michaelAge * 5

if (vScore > gScore && vScore > mScore) {
  console.log('Victor is the winner, with the score of ' + vScore);
} else if (gScore > vScore && gScore > mScore) {
  console.log('Gregory is the winner, with the score of ' + gScore);
} else {
  console.log('Michael is the winner, with the score of ' + mScore);
}




















