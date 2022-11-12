const root = document.querySelector(':root');

let theme = "light";

function changeTheme() {
    if (theme == "light") {
        root.style.setProperty('--colour1', '#adadad');
        root.style.setProperty('--colour2', '#342E37');
        root.style.setProperty('--colour3', '#EDF6F9');
        root.style.setProperty('--colour4', '#725AC1');
        root.style.setProperty('--colour5', '#FFE74C');
        root.style.setProperty('--colour6', 'rgba(0,0,0,0.4)');
        theme = "dark"
    } else if (theme == "dark") {
        root.style.setProperty('--colour1', '#342E37');
        root.style.setProperty('--colour2', '#777DA7');
        root.style.setProperty('--colour3', '#EDF6F9');
        root.style.setProperty('--colour4', '#F56476');
        root.style.setProperty('--colour5', '#DBB957');
        root.style.setProperty('--colour6', 'rgba(255,255,255,0.4)');
        theme = "light"
    }
}

const changeThemeBtn = qs('changeThemeBtn');

changeThemeBtn.addEventListener('click', changeTheme);