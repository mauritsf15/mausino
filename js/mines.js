// MINES!

// Declaring variables
const minesStartBtn = qs('minesStartBtn');
const minesStartText = qs('minesStartText');
const minesCashoutText = qs('cashout-text');
const btn3 = qs('three');
const btn5 = qs('five');
const btn10 = qs('ten');
const minesInput = qs('minesSettings .betAmount');
const minesAmountText = qs('minesAmountText');
const minesHint = qs('mines-msgs');
let mines = [];
let minesAmount = 3;
let gameActive = false;
let bombs = [];
let minesClicked = [];
let minesMulti = 1;

minesCashoutText.style.display = 'none';

// Giving all the mines a click event
for (let i = 1; i < 26; i++) {
    mines.push(qs(`mine-${i}`));
}

for (let i = 0; i < mines.length; i ++) {
    mines[i].addEventListener('click', clickMine);
}

// Player sets the amount of mines they want to play with
function setMines(amount) {
    minesAmount = amount;
    minesAmountText.innerHTML = amount;
}

// Executed when player clicks on a mine. 
// $data gives information about the clicked element
function clickMine(data) {
    if (gameActive == false) {
        minesHint.innerHTML = 'Start the game first!';
    } else {
        let mine = parseInt(data.target.className.charAt(5)+data.target.className.charAt(6));
        if (minesClicked.includes(mine) == false) {
            minesClicked.push(mine)
            if (bombs.includes(mine)) {
                data.target.style.backgroundColor = 'red'
                dieMines();
            } else {
                if (minesAmount == 3) {
                    minesMulti *= 1.11;
                } else if (minesAmount == 5) {
                    minesMulti *= 1.18;
                } else if (minesAmount == 10) {
                    minesMulti *= 1.37;
                }
                minesMulti = minesMulti.toFixed(2);
                minesHint.innerHTML = `Current multiplier: ${minesMulti}`;
                data.target.style.backgroundColor = 'green'
            }
        }
    }
}

function startMines() {
    if (gameActive == false) {
        gameActive = true;
        minesMulti = 1;
        minesClicked = [];
        bombs = [];
        minesInput.disabled = true;
        btn3.disabled = true;
        btn5.disabled = true;
        btn10.disabled = true;
        minesCashoutText.style.display = 'block';
        minesStartText.style.display = 'none';
        betAmount = parseInt(minesInput.value)
        remBank(betAmount)
        for (let i = 0; i < mines.length; i++) {
            mines[i].style.backgroundColor = '#cacaca';
        }
        for (let i = 0; i < minesAmount; i++) {
            let bomb = Math.floor(Math.random() * 25 + 1);
            while (bombs.includes(bomb)) {
                bomb = Math.floor(Math.random() * 25 + 1);
            }
            bombs.push(bomb);
        }
    } else {
        win = Math.round(betAmount * minesMulti);
        addBank(win);
        minesHint.innerHTML = `You won $${win}!`;
        dieMines();
    }
}

function dieMines() {
    gameActive = false;
    minesInput.disabled = false;
    btn3.disabled = false;
    btn5.disabled = false;
    btn10.disabled = false;
    minesCashoutText.style.display = 'none';
    minesStartText.style.display = 'block';
    for (i = 0; i < minesAmount; i++) {
        mines[bombs[i] - 1].style.backgroundColor = 'red';
    }
}

btn3.addEventListener('click', function() {setMines(3)});
btn5.addEventListener('click', function() {setMines(5)});
btn10.addEventListener('click', function() {setMines(10)});
minesStartBtn.addEventListener('click', startMines);

minesInput.value = 10; // Starting amount