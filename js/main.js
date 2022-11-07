let betAmount;

// (fake) COOKIES! nom nom
function getBank() {
    if (localStorage.getItem("bank")) {
        return localStorage.getItem("bank")
    } else {
        localStorage.setItem("bank", "100")
    }
}

function addBank(amount=text) {
    let localBank = parseInt(getBank())
    localBank += parseInt(amount)
    localStorage.setItem("bank", localBank)
    updateBank()
}

function remBank(amount=text) {
    let localBank = parseInt(getBank())
    localBank -= parseInt(amount)
    localStorage.setItem("bank", localBank)
    updateBank()
}

updateBank()

const btnHome = qs('btnHome');
const btnTowers = qs('btnTowers')
const btnRoulette = qs('btnRoulette');
const btnMines = qs('btnMines')
const btnTowers2 = qs('towersImg')
const btnRoulette2 = qs('rouletteImg');
const btnMines2 = qs('minesImg')

if (btnHome && btnTowers && btnRoulette && btnMines) {
    btnHome.addEventListener('click', goToHome);
    btnTowers.addEventListener('click', goToTowers);
    btnRoulette.addEventListener('click', goToRoulette);
    btnMines.addEventListener('click', goToMines);
    btnTowers2.addEventListener('click', goToTowers);
    btnRoulette2.addEventListener('click', goToRoulette);
    btnMines2.addEventListener('click', goToMines);
}

const homeDiv = qs('homeDiv');
const towerDiv = qs('towerDiv');
const rouletteDiv = qs('rouletteDiv');
const minesDiv = qs('minesDiv');

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
    document.querySelector(".bank").innerHTML = `$${getBank()}`
    input.max = getBank()
}

updateBank()

// Quicker way to use querySelector (no more dots or typing long functions!)