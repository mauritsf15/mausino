const root = document.querySelector(':root');

let theme = "light";

function changeTheme() {
    if (theme == "light") {
        root.style.setProperty('--colour1', '#EDF6F9')
        root.style.setProperty('--colour2', '#54c7e3')
        root.style.setProperty('--colour3', '#545775')
        root.style.setProperty('--colour4', '#D72638')
        root.style.setProperty('--colour5', '#D81159')
        root.style.setProperty('--colour6', 'rgba(0,0,0,0.4)')
        theme = "dark"
    } else if (theme == "dark") {
        root.style.setProperty('--colour1', '#342E37')
        root.style.setProperty('--colour2', '#777DA7')
        root.style.setProperty('--colour3', '#EDF6F9')
        root.style.setProperty('--colour4', '#F56476')
        root.style.setProperty('--colour5', '#DBB957')
        root.style.setProperty('--colour6', 'rgba(255,255,255,0.4)')
        theme = "light"
    }
}

const changeThemeBtn = document.querySelector('.changeThemeBtn')

changeThemeBtn.addEventListener('click', changeTheme)