let clickMenu = false;
document.getElementById("menuButton").addEventListener('click', () => {
    for (let i = 1; i <= 3; i++) {
        clickMenu ? document.querySelector(`.menu-bar-${i}`).classList.remove(`menu-bar-anim-${i}`) : document.querySelector(`.menu-bar-${i}`).classList.add(`menu-bar-anim-${i}`);
    };
    clickMenu = clickMenu ? false : true;
});