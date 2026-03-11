var number=12; // declared the number to be guessed by user

alert("Welcome to the Number Guessing Game!");

var guessedCorrectly = false; 

while (!guessedCorrectly) {

	var guess = prompt('Enter your guess?');
		
		if(guess == number)
		{

		alert("You guessed correctly!");
        
		guessedCorrectly = true; // Exit the loop

		}
		
		else 
        {
       
        alert("Oops!!Incorrect");
        
        }

}