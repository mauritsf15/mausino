// nothing

const devAddBank = qs('bank');

if (devAddBank) {
    devAddBank.addEventListener('click', function() {
        localAmount = prompt("How much would you like to add?", "50");
        if (localAmount != null) {
            addBank(amount=localAmount);
        }
    })
}

goToMines();