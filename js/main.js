let betAmount;

// COOKIES! nom nom

function getBank() {
    if (document.cookie) {
        let startFrom = 5
        let localBank = ""
        while (startFrom < document.cookie.length) {
            if (document.cookie[startFrom] == ";") {
                startFrom = 9999999
            } else {
                localBank += document.cookie[startFrom]
                startFrom += 1
            }
        }
        return localBank
    } else {
        document.cookie = "bank=100; SameSite=Lax"
        updateBank()
    }
}

function addBank(amount=text) {
    let localBank = parseInt(getBank())
    localBank += parseInt(amount)
    document.cookie = `bank=${localBank}; SameSite=Lax`
    updateBank()
}

function remBank(amount=text) {
    let localBank = parseInt(getBank())
    localBank -= parseInt(amount)
    document.cookie = `bank=${localBank}; SameSite=Lax`
    updateBank()
}

updateBank()

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
    document.querySelector(".bank").innerHTML = `$${getBank()}`
    input.max = getBank()
}

updateBank()