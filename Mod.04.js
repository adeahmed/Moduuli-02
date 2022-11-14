//Write a program that asks the user for numbers until he gives zero. 
//The given numbers are printed in the console from the largest to the smallest

let numbers = [];   
let number = 1;     

while (number != 0) {
    number = parseInt(prompt("Enter number: "));
    numbers.push(number);
}   
const nr = numbers.sort( (a, b) => a - b).map(items => `<h2>${items}</h2>`)
const result = document.querySelector('#result');
result.innerHTML = nr.join(""); 




