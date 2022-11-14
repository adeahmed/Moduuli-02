
 let numbers = [];
 while (true) {
     let number = parseInt(prompt("Enter number: "));
     if (numbers.includes(number)) {
         alert("Number already given");
         break;
     }
     numbers.push(number);
 }
const nr = numbers.sort( (a, b) => a - b).map(items => `<h2>${items}</h2>`)
const result = document.querySelector('#result');
result.innerHTML = nr.join(" "); 

