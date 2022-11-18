let numbers = [];
 while (true) {
     let number = parseInt(prompt("Enter number: "));
     if (numbers.includes(number)) {
         alert("Number already given");
         break;
     }
     numbers.push(number);
 }
const nr = numbers.sort( (a, b) => a - b).map(items => `<li>${items}</li>`)
console.log(numbers);
const result = document.querySelector('ul');
result.innerHTML = nr.join(" ");



