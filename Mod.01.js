
const numbers = [];
for (let i = 0; i < 5; i++) {
    let number = +prompt("Enter number:");
    numbers.push(number);
}
const result = document.querySelector('ul');
result.innerHTML = numbers.sort((a,b) => a > b ? 1: -1).map(items => `<li>${items}</li>`).join(" ");
console.log(numbers);


