// ROULETTE!

const rouletteStartBtn = document.querySelector('.rouletteStartBtn')
const rouletteBoard = document.querySelector('.rouletteBoard')
const redBtn = document.querySelector('.red')
const blackBtn = document.querySelector('.black')
const greenBtn = document.querySelector('.green')
const rouletteInput = document.querySelector('.rouletteSettings .betAmount')
let rouletteColor;
let degree;

rouletteInput.value = 10 // Starting amount

if (rouletteStartBtn) {
    rouletteStartBtn.addEventListener('click', rouletteStart)
    redBtn.addEventListener('click', function() {colorBtn("red")})
    blackBtn.addEventListener('click', function() {colorBtn("black")})
    greenBtn.addEventListener('click', function() {colorBtn("green")})
    rouletteBoard.addEventListener('transitionend', doneSpinning)
}

// Start button

function rouletteStart() {
    if (rouletteColor && document.querySelector(".rouletteSettings .betAmount").reportValidity()) {
        betAmount = parseInt(document.querySelector('.rouletteSettings .betAmount').value)
        remBank(amount=`${betAmount}`)
        rouletteAlert("clear")
        degree = Math.round(Math.random() * 3600)
        rotateBoard(degree)
        rouletteBoard.style.transform = `rotate(${degree}deg)`
        rouletteInput.disabled = true
        redBtn.disabled = true
        blackBtn.disabled = true
        greenBtn.disabled = true
        rouletteStartBtn.disabled = true
    } else {
        rouletteAlert("You must choose a colour first!") 
    }
}

function rotateBoard(degree) {
    rouletteBoard.style.transform = `rotate(${degree}deg)`
}

// Choose the colour you're betting on

function colorBtn(color) {
    const rouletteBg = document.querySelector('.rouletteGame')
    rouletteBg.style.backgroundColor = color
    rouletteColor = color
}

// Function to show messages under roulette board

function rouletteAlert(alert) {
    if (alert == "clear") {
        document.querySelector('.rouletteMsgs').innerHTML = "&nbsp;"
    } else {
        document.querySelector('.rouletteMsgs').innerHTML = alert
    }
}

function doneSpinning() {
    rouletteAlert("Done spinning")
    rouletteInput.disabled = false
    redBtn.disabled = false
    blackBtn.disabled = false
    greenBtn.disabled = false
    rouletteStartBtn.disabled = false
    const floor = Math.floor((degree % 360 + 4.864864865) / 9.72972973)
    if (floor == 0) {
        if (rouletteColor == "green") {
            let win = betAmount * 34
            rouletteAlert(`HUGE WIN: $${win}`)
            addBank(amount=win)
        } else {
            rouletteAlert("You lost...")
        }
    } else if (floor % 2 == 0) {
        if (rouletteColor == "red") {
            let win = betAmount * 2
            rouletteAlert(`You won $${win}!`)
            addBank(amount=win)
        } else {
            rouletteAlert("You lost...")
        }
    } else {
        if (rouletteColor == "black") {
            let win = betAmount * 2
            rouletteAlert(`You won $${win}!`)
            addBank(amount=win)
        } else {
            rouletteAlert("You lost...")
        }
    }
}