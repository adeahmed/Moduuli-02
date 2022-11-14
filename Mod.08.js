let list = ["Johnny", "DeeDee", "Joey", "Marky"];  

function concatNames(list) {
    let names = "";
    for (let i = 0; i < list.length; i++) {
        names += list[i];
        if (i < list.length - 1) {
            names += ", ";
        }
    }
    return names;
}

const ls = list.concat().join(" ");
const result = document.querySelector('#result').innerHTML = ls; 

