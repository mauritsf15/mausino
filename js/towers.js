// Defining tower buttons

const btn1s = document.querySelectorAll('.btn1')
const btn2s = document.querySelectorAll('.btn2')
const btn3s = document.querySelectorAll('.btn3')

let whileNo = 0; // Number to use with the while loop

// adding an eventlistener which uses the element when clicked on it

function qs(classname) {
    return document.querySelector(`.${classname}`)
}

while (whileNo < 7) {
    let localBtnVar1 = btn1s[whileNo].addEventListener('click', towerButton);
    let localBtnVar2 = btn2s[whileNo].addEventListener('click', towerButton);
    let localBtnVar3 = btn3s[whileNo].addEventListener('click', towerButton);
    whileNo += 1;
}
// towerButton function is in line 113

qs('betAmount').value = 10 // Starting amount

const input = qs('betAmount')

if (input) {
    input.addEventListener('change', updateTowers)
}

// Defining game mode as easy + creating gamemode buttons that work
let gamemode = "easy"

const easyBtn = qs('easy')
const hardBtn = qs('hard')

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
        qs('rowOne .btn1').innerHTML = `$${Math.round(input.value * 1.4)}`
        qs('rowOne .btn2').innerHTML = `$${Math.round(input.value * 1.4)}`
        qs('rowOne .btn3').innerHTML = `$${Math.round(input.value * 1.4)}`
        qs('rowTwo .btn1').innerHTML = `$${Math.round(input.value * 2)}`
        qs('rowTwo .btn2').innerHTML = `$${Math.round(input.value * 2)}`
        qs('rowTwo .btn3').innerHTML = `$${Math.round(input.value * 2)}`
        qs('rowThree .btn1').innerHTML = `$${Math.round(input.value * 2.8)}`
        qs('rowThree .btn2').innerHTML = `$${Math.round(input.value * 2.8)}`
        qs('rowThree .btn3').innerHTML = `$${Math.round(input.value * 2.8)}`
        qs('rowFour .btn1').innerHTML = `$${Math.round(input.value * 4)}`
        qs('rowFour .btn2').innerHTML = `$${Math.round(input.value * 4)}`
        qs('rowFour .btn3').innerHTML = `$${Math.round(input.value * 4)}`
        qs('rowFive .btn1').innerHTML = `$${Math.round(input.value * 5.6)}`
        qs('rowFive .btn2').innerHTML = `$${Math.round(input.value * 5.6)}`
        qs('rowFive .btn3').innerHTML = `$${Math.round(input.value * 5.6)}`
        qs('rowSix .btn1').innerHTML = `$${Math.round(input.value * 8)}`
        qs('rowSix .btn2').innerHTML = `$${Math.round(input.value * 8)}`
        qs('rowSix .btn3').innerHTML = `$${Math.round(input.value * 8)}`
        qs('rowSeven .btn1').innerHTML = `$${Math.round(input.value * 11.1)}`
        qs('rowSeven .btn2').innerHTML = `$${Math.round(input.value * 11.1)}`
        qs('rowSeven .btn3').innerHTML = `$${Math.round(input.value * 11.1)}`
    } else {
        qs('rowOne .btn1').innerHTML = `$${Math.round(input.value * 2.8)}`
        qs('rowOne .btn2').innerHTML = `$${Math.round(input.value * 2.8)}`
        qs('rowOne .btn3').innerHTML = `$${Math.round(input.value * 2.8)}`
        qs('rowTwo .btn1').innerHTML = `$${Math.round(input.value * 8.1)}`
        qs('rowTwo .btn2').innerHTML = `$${Math.round(input.value * 8.1)}`
        qs('rowTwo .btn3').innerHTML = `$${Math.round(input.value * 8.1)}`
        qs('rowThree .btn1').innerHTML = `$${Math.round(input.value * 22.9)}`
        qs('rowThree .btn2').innerHTML = `$${Math.round(input.value * 22.9)}`
        qs('rowThree .btn3').innerHTML = `$${Math.round(input.value * 22.9)}`
        qs('rowFour .btn1').innerHTML = `$${Math.round(input.value * 64.8)}`
        qs('rowFour .btn2').innerHTML = `$${Math.round(input.value * 64.8)}`
        qs('rowFour .btn3').innerHTML = `$${Math.round(input.value * 64.8)}`
        qs('rowFive .btn1').innerHTML = `$${Math.round(input.value * 182.2)}`
        qs('rowFive .btn2').innerHTML = `$${Math.round(input.value * 182.2)}`
        qs('rowFive .btn3').innerHTML = `$${Math.round(input.value * 182.2)}`
        qs('rowSix .btn1').innerHTML = `$${Math.round(input.value * 510.3)}`
        qs('rowSix .btn2').innerHTML = `$${Math.round(input.value * 510.3)}`
        qs('rowSix .btn3').innerHTML = `$${Math.round(input.value * 510.3)}`
        qs('rowSeven .btn1').innerHTML = `$${Math.round(input.value * 1421.5)}`
        qs('rowSeven .btn2').innerHTML = `$${Math.round(input.value * 1421.5)}`
        qs('rowSeven .btn3').innerHTML = `$${Math.round(input.value * 1421.5)}`
    }
}

// START GAME

const startBtn = qs('towersStartBtn')

if (startBtn) {
    startBtn.addEventListener('click', startTowers)
}

let gameRow = null

function startTowers() {
    if (gameRow == null && document.querySelector(".betAmount").reportValidity()) {
        gameRow = "One"
        betAmount = parseInt(qs('betAmount').value)
        remBank(amount=`${betAmount}`)
        input.disabled = true
        easyBtn.disabled = true
        hardBtn.disabled = true
        let localWhileNo = 1
        while (localWhileNo < 4) {
            const localBtn = document.querySelector(`.rowOne .btn${localWhileNo}`)
            localBtn.style.backgroundColor = "var(--colour4)"
            localWhileNo += 1
        }
        qs('towersStartBtn').innerHTML = "CASHOUT"
    } else if (gameRow == "One") {
        qs('towerMsgs').innerHTML = "You haven't played!"
    } else {
        if (gamemode == "easy") {
            if (gameRow == "Two") {
                addBank(amount=`${betAmount * 1.4}`)
                qs('towerMsgs').innerHTML = `You won $${betAmount * 1.4}!`
            } else if (gameRow == "Three") {
                addBank(amount=`${betAmount * 2}`)
                qs('towerMsgs').innerHTML = `You won $${betAmount * 2}!`
            } else if (gameRow == "Four") {
                addBank(amount=`${betAmount * 2.8}`)
                qs('towerMsgs').innerHTML = `You won $${betAmount * 2.8}!`
            } else if (gameRow == "Five") {
                addBank(amount=`${betAmount * 4}`)
                qs('towerMsgs').innerHTML = `You won $${betAmount * 4}!`
            } else if (gameRow == "Six") {
                addBank(amount=`${betAmount * 5.6}`)
                qs('towerMsgs').innerHTML = `You won $${betAmount * 5.6}!`
            } else if (gameRow == "Seven") {
                addBank(amount=`${betAmount * 8}`)
                qs('towerMsgs').innerHTML = `You won $${betAmount * 8}!`
            }
            resetTowers()
        } else if (gamemode == "hard") {
            if (gameRow == "Two") {
                addBank(amount=`${betAmount * 2.8}`)
                qs('towerMsgs').innerHTML = `You won $${betAmount * 2.8}!`
            } else if (gameRow == "Three") {
                addBank(amount=`${betAmount * 8.1}`)
                qs('towerMsgs').innerHTML = `You won $${betAmount * 8.1}!`
            } else if (gameRow == "Four") {
                addBank(amount=`${betAmount * 22.9}`)
                qs('towerMsgs').innerHTML = `You won $${betAmount * 22.9}!`
            } else if (gameRow == "Five") {
                addBank(amount=`${betAmount * 64.8}`)
                qs('towerMsgs').innerHTML = `You won $${betAmount * 64.8}!`
            } else if (gameRow == "Six") {
                addBank(amount=`${betAmount * 182.2}`)
                qs('towerMsgs').innerHTML = `You won $${betAmount * 182.2}!`
            } else if (gameRow == "Seven") {
                addBank(amount=`${betAmount * 510.3}`)
                qs('towerMsgs').innerHTML = `You won $${betAmount * 510.3}!`
            }
            resetTowers()
        }
    }
        
}

// Finds parent class on button click so it knows what row it's on

function towerButton(element=text) {
    if (gameRow) {
        if (`row${gameRow}` == element.target.parentElement.className) {
            const chosenBtn = document.querySelector(`.row${gameRow} .btn${Math.floor(Math.random() * 3 + 1)}`).className
            if (gamemode == "easy") {
                if (chosenBtn == element.target.className) {
                    element.target.style.backgroundColor = 'red'
                    qs('towerMsgs').innerHTML = "YOU LOST!"
                    resetTowers()
                } else {
                    element.target.style.backgroundColor = 'green'
                    if (gameRow == "One") {
                        gameRow = "Two"
                    } else if (gameRow == "Two") {
                        gameRow = "Three"
                    } else if (gameRow == "Three") {
                        gameRow = "Four"
                    } else if (gameRow == "Four") {
                        gameRow = "Five"
                    } else if (gameRow == "Five") {
                        gameRow = "Six"
                    } else if (gameRow == "Six") {
                        gameRow = "Seven"
                    } else if (gameRow == "Seven") {
                        addBank(amount=`${betAmount * 11.1}`)
                        qs('towerMsgs').innerHTML = `You won $${betAmount * 11.1}!`
                        resetTowers()
                    }
                    if (gameRow) {
                        let localWhileNo = 1
                        while (localWhileNo < 4) {
                            const localBtn = document.querySelector(`.row${gameRow} .btn${localWhileNo}`)
                            localBtn.style.backgroundColor = "var(--colour4)"
                            localWhileNo += 1
                        }
                    }
                }
            } else if (gamemode == "hard") {
                if (chosenBtn != element.target.className) {
                    element.target.style.backgroundColor = 'red'
                    qs('towerMsgs').innerHTML = "YOU LOST!"
                    resetTowers()
                } else {
                    element.target.style.backgroundColor = 'green'
                    if (gameRow == "One") {
                        gameRow = "Two"
                    } else if (gameRow == "Two") {
                        gameRow = "Three"
                    } else if (gameRow == "Three") {
                        gameRow = "Four"
                    } else if (gameRow == "Four") {
                        gameRow = "Five"
                    } else if (gameRow == "Five") {
                        gameRow = "Six"
                    } else if (gameRow == "Six") {
                        gameRow = "Seven"
                    } else if (gameRow == "Seven") {
                        addBank(amount=`${betAmount * 1421.5}`)
                        qs('towerMsgs').innerHTML = `You won $${betAmount * 1421.5}!`
                    }
                    let localWhileNo = 1
                    while (localWhileNo < 4) {
                        const localBtn = document.querySelector(`.row${gameRow} .btn${localWhileNo}`)
                        localBtn.style.backgroundColor = "var(--colour4)"
                        localWhileNo += 1
                    }
                }
            }
        } else {
            // do nothing
        }
    } else {
        qs('towerMsgs').innerHTML = "Start the game first!"
    }
}

function resetTowers() {
    let localWhileNo = 0
    while (localWhileNo < 7) {
        btn1s[localWhileNo].style.backgroundColor = '#cacaca'
        btn2s[localWhileNo].style.backgroundColor = '#cacaca'
        btn3s[localWhileNo].style.backgroundColor = '#cacaca'
        localWhileNo += 1
    }
    qs('towersStartBtn').innerHTML = "Start game!"
    gameRow = null
    updateBank()
    input.disabled = false
    easyBtn.disabled = false
    hardBtn.disabled = false
}