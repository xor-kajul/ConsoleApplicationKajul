var number=12; // declared the number to be guessed by user 
var myName = "Kajul";

alert("Welcome to the Number Guessing Game :"+" "+myName);

var guessedCorrectly = false; 

while (!guessedCorrectly) 
	{
	
	var guess = parseInt(prompt('Enter your guess?')); // Prompt the user to enter their guess and convert it to an integer
	
	if(guess === number)
		{
			
			alert("You guessed correctly!");
			
			guessedCorrectly = true; // Exit the loop
			
		}
		
		else 
			{
				validation1(guess);
				continue; // Continue to the next iteration of the loop without executing the rest of the code
				
				alert("Oops!!Incorrect");
				
			}
			
		function validation1(guess){

			if(typeof guess !== 'number' || isNaN(guess)) // Check if the input is not a number
				{
					alert("Its not an Integer,Please enter valid number!!!.");
				}
		}	
	}
