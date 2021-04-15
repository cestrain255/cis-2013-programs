/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

intMin = parseInt(prompt("Choose the lower number in the range. It must be at least zero."));
while (intMin < 0 || isNaN(intMin))
    {
        intMin = parseInt(prompt("I'm sorry. You entered an invalid number. Try again."));
    }






/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
intMax = parseInt(prompt("Choose the upper number in the range. It must be at least " + (intMin+2)));
while (intMax < (intMin +2) || isNaN(intMax))
       {
            intMax = parseInt(prompt("I'm sorry. You entered an invalid number. Try again."));
        }








/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter

intCount = 1;

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/
// between minimum and maximum, not a number, not between 
intGuess = parseInt(prompt("Enter your guess. It must between " + intMin + " and " + intMax));
while (intGuess < intMin || intGuess > intMax || isNaN(intGuess))
{
    intGuess = parseInt(prompt("I'm sorry. You entered an invalid guess. Try again."));
}




/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
//when number doesn't match, is guess less than random number
// validate new guesses
//loop alerts user when guesses are too high or too low. Also makes sure guesses are in the correct range. 

while (intGuess != intRandom)
{
    if (intGuess < intRandom)
    {
        intGuess = parseInt(prompt("Your guess of " + intGuess + " is too low. Please guess again."));
        while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax)
        {
            intGuess = parseInt(prompt("Sorry, you need to choose a number between " + intMin + " and " + intMax));
        }
    }
    else {
        intGuess = parseInt(prompt("Your guess of " + intGuess + " is too high. Guess again."));
        while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax)
        {
            intGuess = parseInt(prompt("Sorry, you need to choose a number between " + intMin + " and " + intMax));
        }
    }
    intCount++;
}
 
  
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts! You receive " + intCount + " points.");
