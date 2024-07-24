var mOverOut = document.getElementById('mOverOut');
var mDownUp = document.getElementById('mDownUp');

function mOver() {
    this.innerHTML = "Thank You";
    this.style.backgroundColor = 'yellow';
    this.style.width = "160px";
    this.style.height = "30px";
    this.style.border = "1px solid red";
    this.style.boxShadow = "20px -6px lightgray";
}

function mOut() {
    this.innerHTML = "Mouse Over Me";
    this.style.fontWeight = '100';
    this.style.backgroundColor = 'lightgreen';
    this.style.width = "120px";
    this.style.height = "20px";
    this.style.border = "1px solid red";
    this.style.boxShadow = "none";
}

mOverOut.onmouseover = mOver;
mOverOut.onmouseout = mOut;

// mouseDown and Up
function mDown() {
    this.innerHTML = "Release Me";
    this.style.backgroundColor = "#1ec5e5";
    this.style.border = "inset";
}
function mUp() {
    this.innerHTML = "Thank You";
    this.style.backgroundColor = "#d94a38";
    this.style.border = "outset";
}

mDownUp.onmousedown = mDown;
mDownUp.onmouseup = mUp;