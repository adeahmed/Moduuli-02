let numbers = [];   
while (true) {
    number = parseInt(prompt("Enter number: "));
    if (number === 0) break;
    numbers.push(number);
}   
numbers.sort((a, b) => b - a);
console.log(numbers);





