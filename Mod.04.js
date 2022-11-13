//Write a program that asks the user for numbers until he gives zero. 
//The given numbers are printed in the console from the largest to the smallest

let numbers = [];   
let number = 1;     

while (number != 0) {
    number = parseInt(prompt("Enter number: "));
    numbers.push(number);
}   
  (document.body.textContent = ( numbers.sort( (a, b) => a > b ? 1 : -1) ));




