function myFunction(e) {
    e.innerHTML = "I'm h2 tag";
}
function myFun() {
    myH1.innerHTML = Date();
}

var myH1 = document.getElementById('myH1');
myH1.onclick = myFun;