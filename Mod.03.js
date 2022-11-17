// Write a program that asks for the names of six dogs. The program prints dog names to unordered list <ul> in reverse alphabetical order.

const dogs = [];
for (let i = 0; i < 6; i++) {
    let dog = prompt("Enter dog name:");
    dogs.push(dog);
}
const result = document.querySelector('ul');
result.innerHTML = dogs.sort((a,b) => a > b ? 1: -1).map(items => `<li>${items}</li>`).join(" ");



