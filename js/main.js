let bank = 100
let betAmount;

const btnHome = document.querySelector('.btnHome');
const btnTowers = document.querySelector('.btnTowers')
const btnRoulette = document.querySelector('.btnRoulette');
const btnMines = document.querySelector('.btnMines')
const btnTowers2 = document.querySelector('.towersImg')
const btnRoulette2 = document.querySelector('.rouletteImg');
const btnMines2 = document.querySelector('.minesImg')

if (btnHome && btnTowers && btnRoulette && btnMines) {
    btnHome.addEventListener('click', goToHome);
    btnTowers.addEventListener('click', goToTowers);
    btnRoulette.addEventListener('click', goToRoulette);
    btnMines.addEventListener('click', goToMines);
    btnTowers2.addEventListener('click', goToTowers);
    btnRoulette2.addEventListener('click', goToRoulette);
    btnMines2.addEventListener('click', goToMines);
}

const homeDiv = document.querySelector('.homeDiv');
const towerDiv = document.querySelector('.towerDiv');
const rouletteDiv = document.querySelector('.rouletteDiv');
const minesDiv = document.querySelector('.minesDiv')

towerDiv.style.display = "none"
rouletteDiv.style.display = "none"
minesDiv.style.display = "none"

function goToHome() {
    homeDiv.style.display = "grid"
    towerDiv.style.display = "none"
    rouletteDiv.style.display = "none"
    minesDiv.style.display = "none"
}

function goToTowers() {
    homeDiv.style.display = "none"
    towerDiv.style.display = "grid"
    rouletteDiv.style.display = "none"
    minesDiv.style.display = "none"
}

function goToRoulette() {
    homeDiv.style.display = "none"
    towerDiv.style.display = "none"
    rouletteDiv.style.display = "grid"
    minesDiv.style.display = "none"
}

function goToMines() {
    homeDiv.style.display = "none"
    towerDiv.style.display = "none"
    rouletteDiv.style.display = "none"
    minesDiv.style.display = "grid"
}

function updateBank() {
    document.querySelector(".bank").innerHTML = `$${bank}`
    input.max = bank
}