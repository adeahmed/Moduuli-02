
let dogs = [];
for (let i = 0; i < 6; i++) {
    const dogNames = prompt("Enter name of dog: ");
    dogs.push(dogNames);
    const nr = dogs.sort( (a, b) => a - b).map(items => `<li>${items}</li>`)
    const result = document.querySelector('ul');
    result.innerHTML = nr.join(" ");
}


