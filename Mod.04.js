//Write a program that asks the user for numbers until he gives zero. 
//The given numbers are printed in the console from the largest to the smallest

let numbers = [];   
while (true) {
    number = parseInt(prompt("Enter number: "));
    if (number === 0) break;
    numbers.push(number);
}   
numbers.sort((a, b) => b - a);
console.log(numbers);





