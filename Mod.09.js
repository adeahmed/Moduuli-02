let nr = [2,7,4];
function even(nr) {     
    return nr.filter(item => item % 2 === 0);
    console.log(nr);
}
const result = document.querySelector('#result');
result.innerHTML = even(nr).map(items => `<li>${items}</li>`).join(" ");


