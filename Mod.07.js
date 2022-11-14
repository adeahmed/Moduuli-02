let dices = parseInt(prompt("How many dices do you want to roll?"));
 function diceRoll(diceEyes) {
    return Math.floor(Math.random()* dices) ;
}
let dice = [];
while (true) {
    let roll = diceRoll();
    dice.push(roll);
    if (roll === 21 ) {
        break;
    }
}
const result = document.querySelector('#result');
result.innerHTML = dice.map(items => `<li>${items}</li>`).join(" ");










































// const people = [
//     {name: 'Kassu',},
//     {age: 44,},
//     {position : 'Developer'},


//     { name: 'Ade' },
//     { age: 16, },
//     { position: 'designer'},


//     { name: 'Wes' },
//     { age: 33,},
//     { position: 'boss'},


//     { name: 'suzy' },
//     { age: 22,},
//     { position: 'sales'},

//     ];

//     const names = people.map(person => `<h2>${person.name}</h2>`).sort( (a, b) => a > b ? 1 : -1);
//     const result = document.querySelector('#result');
//     result.innerHTML = names;



// // reduse method

// const staff = [
//     {name: 'kevin', age: 44, position: 'Developer', salary: 100},
//     {name: 'Ade', age: 16, position: 'designer', salary: 500},
//     {name: 'Wes', age: 33, position: 'boss', salary: 2000},
//     ];

// const dailyTotal = staff.reduce((total, person) => {
// console.log(total); 
// console.log(person.salary);  
// return total
// }, 0)
// console.log(dailyTotal);      

// // // const newPeople = people.map((item) => {
// // //     return{
// // //         firsName:item.name.toUpperCase(),
// // //         oldAge:item.age + 20,
// // //     }
// // // });

// // // console.log(newPeople); 



// const person = {
//     name: 'ade',

// }
// person.age = 44;
// console.log(person); 








// const getAges = (person) => person.age * 2;

// const ages = people.map(getAges);
// console.log(ages);    



// const ages = people.map((person) => person.age * 2);
// console.log(ages);    

// const ages = people.map((person) => {
//     return person.age * 2;

// }); 
// console.log(ages);


// const div = document.querySelector('#result');

// const getElements = (selector)  => {
//     const element = document.querySelector(selector);
//     if(element){
//         return element;
//     }
//     throw new Error(`Please check "${selector}" selector, no such element exist`);
// }
// console.log(getElements('#result'));

