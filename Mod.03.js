//Write a program that asks for the names of six dogs. The program prints dog names to unordered list <ul> in reverse alphabetical order. 


let dogs = [];
for (let i = 0; i < 6; i++) {
    dogs[i] = prompt("Enter name of dog: ");
    dogs.push(i)
    
}
console.log(dogs.sort( (a, b) => a > b ? 1 : -1) );





// // (document.textContent = ( dogs.sort( (a, b) => a > b ? 1 : -1) ));

