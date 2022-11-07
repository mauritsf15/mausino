// MINES!

const minesStartBtn = qs('minesStartButton')
const btn3 = qs('three')
const btn5 = qs('five')
const btn10 = qs('ten')
const minesInput = qs('minesSettings .betAmount')
const minesAmountText = qs('minesAmount')
let minesAmount;
let gameActive = false;
let mines = []

for (let i = 1; i < 26; i++) {
    mines.push(document.querySelector(`.mine-${i}`))
}

for (let i = 0; i < mines.length; i ++) {
    mines[i].addEventListener('click', testFn)
}

minesInput.value = 10 // Starting amount

btn3.addEventListener('click', function() {setMines(3)})
btn5.addEventListener('click', function() {setMines(5)})
btn10.addEventListener('click', function() {setMines(10)})

function setMines(amount) {
    minesAmount = amount
    minesAmountText.innerHTML = amount
}

function testFn(data) {
    //fagjahfjas
}