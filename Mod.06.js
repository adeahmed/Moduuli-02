function diceRoll() {
        return Math.floor(Math.random() * 6) + 1;
    }
    let dice = [];
    while (true) {
        let roll = diceRoll();
        dice.push(roll);
        if (roll === 6) {
            break;
        }
    }
    const result = document.querySelector('#result');
    result.innerHTML = dice.map(items => `<li>${items}</li>`).join(" ");
