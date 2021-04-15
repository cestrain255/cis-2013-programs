//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount, i, j, k, stringOutput
    
    i=0;  // sets the first number in the Fibonacci series to 0
	j=1;  //sets the second number in the Fibonacci series to 1
	k;    //k is calculated by adding i+j and represents the next Fibonacci number
	stringOutput = i + " " + j;//initialize the Fibonacci series output to include the first two numbers
    intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
    // write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 
	if (isNaN(intCount) || intCount<1|| intCount>100)
    {
        $("total_fib").value = "";
        $("output").value = "Enter a valid input";
        alert ("Sorry, enter a number between 1 and 100");
    }
    else
    {
        while (intCount >2)
        {
            k=i+j;
            i=j;
            j=k;
            intCount--;
            stringOutput = stringOutput + " " + k;
        }
        $("output").value = stringOutput;
    }
} 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}