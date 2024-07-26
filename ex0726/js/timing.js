function myFun() {
    alert('3초가 지났습니다');
}

let myVar = setInterval(myInterval, 1000);
function myInterval() {
    const d = new Date();
    document.getElementById("dat").innerHTML = d.toLocaleTimeString();
}