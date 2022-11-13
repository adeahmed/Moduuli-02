//Write a program that asks the user for numbers until he gives zero. 
//The given numbers are printed in the console from the largest to the smallest

var numbers = [];   //array for numbers
var number = 1;     //variable for number

while (number != 0) {
    number = parseInt(prompt("Enter number: "));
    numbers.push(number);
}   //end of while

numbers.sort(function (a, b) { return b - a }); //sort array from largest to smallest
    




