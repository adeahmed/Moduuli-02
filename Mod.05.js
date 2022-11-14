// // Write a program that prompts the user for numbers. 
// When the user enters one of the numbers he previously entered, the program will announce that the number has already been given and stops its operation and then prints all the given numbers to the console in ascending order. 

 let numbers = [];
 while (true) {
     let number = parseInt(prompt("Enter number: "));
     if (numbers.includes(number)) {
         alert("Number already given");
         break;
     }
     numbers.push(number);
 }
console.log(numbers.sort((a, b) => a > b ? 1 : -1));
const nr = numbers.map(items => `<h2>${numbers}</h2>`).sort( (a, b) => a > b ? 1 : -1);
const result = document.querySelector('#result');
result.innerHTML = nr.join(" "); 

