const BOX = document.querySelector('#box');

function box() {
    bLeft = Math.ceil(Math.random()*650);
    bTop = Math.ceil(Math.random()*450);
    BOX.style.left = bLeft, "px";
    BOX.style.top = bTop, "px";
}
BOX.addEventListener('click', box);