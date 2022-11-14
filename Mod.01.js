
let numbers = [];   
for (let i = 0; i < 5; i++) {
    numbers[i] = prompt("Enter number: ");
    console.log(numbers[i]);
}
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
