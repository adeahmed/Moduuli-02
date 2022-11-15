let dices = parseInt(prompt("How many dices do you want to roll?"));
 function diceRoll(diceEyes) {
    return Math.floor(Math.random()* dices) + 1 ;
}
let dice = [];
while (true) {
    let roll = diceRoll();
    dice.push(roll);
    if (roll === dices){
        break;
    }
}
const result = document.querySelector('ul');
result.innerHTML = dice.map(items => `<li>${items}</li>`).join(" ");

