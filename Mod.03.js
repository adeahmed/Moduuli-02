//Write a program that asks for the names of six dogs. The program prints dog names to unordered list <ul> in reverse alphabetical order. 


let dogs = [];
for (let i = 0; i < 6; i++) {
    dogs[i] = prompt("Enter name of dog: ");
    (document.textContent = ( dogs.sort( (a, b) => a > b ? 1 : -1) ));
    let ele = document.createElement("ul")
        ele.textContent = dogs[i];
        document.querySelector("#velo").append(ele)
}

// (document.textContent = ( dogs.sort( (a, b) => a > b ? 1 : -1) ));

