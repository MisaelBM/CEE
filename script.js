let clickMenu = false;
document.getElementById("menuButton").addEventListener('click', () => {
    for (let i = 1; i <= 3; i++) {
        clickMenu ? document.querySelector(`.menu-bar-${i}`).classList.remove(`menu-bar-anim-${i}`) : document.querySelector(`.menu-bar-${i}`).classList.add(`menu-bar-anim-${i}`);
    };
    clickMenu ? document.querySelector(".menu-display-content").classList.remove("menu-display-anim") : document.querySelector(".menu-display-content").classList.add("menu-display-anim"); 
    clickMenu = clickMenu ? false : true;
});
setTimeout (
    function () {
        document.getElementById("mainHome").style.display = "flex";
        document.getElementById("screenStart").style.display = "none";
    }
, 1000);
