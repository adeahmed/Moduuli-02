function diceRoll() {
 return Math.ceil(Math.random() * 6);
}

let dice = [];
while (true) {
    let roll = diceRoll();
    dice.push(roll);
    if (roll === 6){
        break;
    }
}
const result = document.querySelector('ul');
result.innerHTML = dice.map(items => `<li>${items}</li>`).join(" ");