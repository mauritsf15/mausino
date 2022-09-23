// nothing

const devAddBank = document.querySelector('.bank')

if (devAddBank) {
    devAddBank.addEventListener('click', function() {
        addBank(amount=prompt("How much would you like to add?", "50"))
    })
}