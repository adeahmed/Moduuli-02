const names = [];
const numberOfNames = +prompt("How many names do you want to enter?");
for (let i = 0; i < numberOfNames; i++) {
    let name = prompt("Enter name:");
    names.push(name);
}
const result = document.querySelector('ol');
result.innerHTML = names.sort((a,b) => a > b ? 1: -1).map(items => `<li>${items}</li>`).join(" ");
