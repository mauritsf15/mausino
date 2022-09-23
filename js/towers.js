// Defining tower buttons

const btn1s = document.querySelectorAll('.btn1')
const btn2s = document.querySelectorAll('.btn2')
const btn3s = document.querySelectorAll('.btn3')

let whileNo = 0; // Number to use with the while loop

// adding an eventlistener which uses the element when clicked on it

while (whileNo < 7) {
    let localBtnVar1 = btn1s[whileNo].addEventListener('click', towerButton);
    let localBtnVar2 = btn2s[whileNo].addEventListener('click', towerButton);
    let localBtnVar3 = btn3s[whileNo].addEventListener('click', towerButton);
    whileNo += 1;
}
// towerButton function is in line 113

document.querySelector('.betAmount').value = 10 // Starting amount

const input = document.querySelector('.betAmount')

if (input) {
    input.addEventListener('change', updateTowers)
}

// Defining game mode as easy + creating gamemode buttons that work
let gamemode = "easy"

const easyBtn = document.querySelector('.easy')
const hardBtn = document.querySelector('.hard')

if (easyBtn && hardBtn) {
    easyBtn.addEventListener('click', function() {
        gamemode = "easy"
        updateTowers()
    })
    hardBtn.addEventListener('click', function() {
        gamemode = "hard"
        updateTowers()
    })
}

updateTowers()

function updateTowers() {
    if (gamemode == "easy") {
        document.querySelector('.rowOne .btn1').innerHTML = `$${Math.round(input.value * 1.4)}`
        document.querySelector('.rowOne .btn2').innerHTML = `$${Math.round(input.value * 1.4)}`
        document.querySelector('.rowOne .btn3').innerHTML = `$${Math.round(input.value * 1.4)}`
        document.querySelector('.rowTwo .btn1').innerHTML = `$${Math.round(input.value * 2)}`
        document.querySelector('.rowTwo .btn2').innerHTML = `$${Math.round(input.value * 2)}`
        document.querySelector('.rowTwo .btn3').innerHTML = `$${Math.round(input.value * 2)}`
        document.querySelector('.rowThree .btn1').innerHTML = `$${Math.round(input.value * 2.8)}`
        document.querySelector('.rowThree .btn2').innerHTML = `$${Math.round(input.value * 2.8)}`
        document.querySelector('.rowThree .btn3').innerHTML = `$${Math.round(input.value * 2.8)}`
        document.querySelector('.rowFour .btn1').innerHTML = `$${Math.round(input.value * 4)}`
        document.querySelector('.rowFour .btn2').innerHTML = `$${Math.round(input.value * 4)}`
        document.querySelector('.rowFour .btn3').innerHTML = `$${Math.round(input.value * 4)}`
        document.querySelector('.rowFive .btn1').innerHTML = `$${Math.round(input.value * 5.6)}`
        document.querySelector('.rowFive .btn2').innerHTML = `$${Math.round(input.value * 5.6)}`
        document.querySelector('.rowFive .btn3').innerHTML = `$${Math.round(input.value * 5.6)}`
        document.querySelector('.rowSix .btn1').innerHTML = `$${Math.round(input.value * 8)}`
        document.querySelector('.rowSix .btn2').innerHTML = `$${Math.round(input.value * 8)}`
        document.querySelector('.rowSix .btn3').innerHTML = `$${Math.round(input.value * 8)}`
        document.querySelector('.rowSeven .btn1').innerHTML = `$${Math.round(input.value * 11.1)}`
        document.querySelector('.rowSeven .btn2').innerHTML = `$${Math.round(input.value * 11.1)}`
        document.querySelector('.rowSeven .btn3').innerHTML = `$${Math.round(input.value * 11.1)}`
    } else {
        document.querySelector('.rowOne .btn1').innerHTML = `$${Math.round(input.value * 2.8)}`
        document.querySelector('.rowOne .btn2').innerHTML = `$${Math.round(input.value * 2.8)}`
        document.querySelector('.rowOne .btn3').innerHTML = `$${Math.round(input.value * 2.8)}`
        document.querySelector('.rowTwo .btn1').innerHTML = `$${Math.round(input.value * 8.1)}`
        document.querySelector('.rowTwo .btn2').innerHTML = `$${Math.round(input.value * 8.1)}`
        document.querySelector('.rowTwo .btn3').innerHTML = `$${Math.round(input.value * 8.1)}`
        document.querySelector('.rowThree .btn1').innerHTML = `$${Math.round(input.value * 22.9)}`
        document.querySelector('.rowThree .btn2').innerHTML = `$${Math.round(input.value * 22.9)}`
        document.querySelector('.rowThree .btn3').innerHTML = `$${Math.round(input.value * 22.9)}`
        document.querySelector('.rowFour .btn1').innerHTML = `$${Math.round(input.value * 64.8)}`
        document.querySelector('.rowFour .btn2').innerHTML = `$${Math.round(input.value * 64.8)}`
        document.querySelector('.rowFour .btn3').innerHTML = `$${Math.round(input.value * 64.8)}`
        document.querySelector('.rowFive .btn1').innerHTML = `$${Math.round(input.value * 182.2)}`
        document.querySelector('.rowFive .btn2').innerHTML = `$${Math.round(input.value * 182.2)}`
        document.querySelector('.rowFive .btn3').innerHTML = `$${Math.round(input.value * 182.2)}`
        document.querySelector('.rowSix .btn1').innerHTML = `$${Math.round(input.value * 510.3)}`
        document.querySelector('.rowSix .btn2').innerHTML = `$${Math.round(input.value * 510.3)}`
        document.querySelector('.rowSix .btn3').innerHTML = `$${Math.round(input.value * 510.3)}`
        document.querySelector('.rowSeven .btn1').innerHTML = `$${Math.round(input.value * 1421.5)}`
        document.querySelector('.rowSeven .btn2').innerHTML = `$${Math.round(input.value * 1421.5)}`
        document.querySelector('.rowSeven .btn3').innerHTML = `$${Math.round(input.value * 1421.5)}`
    }
}

// START GAME

const startBtn = document.querySelector('.towersStartBtn')

if (startBtn) {
    startBtn.addEventListener('click', startTowers)
}

let gameRow = "One"

function startTowers() {
    let localWhileNo = 1
    while (localWhileNo < 4) {
        const localBtn = document.querySelector(`.rowOne .btn${localWhileNo}`)
        localBtn.style.backgroundColor = "var(--colour4)"
        localWhileNo += 1
    }
}

// Finds parent class on button click so it knows what row it's on

function towerButton(element=text) {
    if (`row${gameRow}` == element.target.parentElement.className) {
        alert('ok')
    } else {
        // do nothing
    }
}