var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var output = document.getElementById('output');
btn.style.fontSize = "1.6em"
btn2.style.fontSize = "1.6em"
output.style.fontSize = "30px"

function goHistory2() {
    location.assign("./bomHistory2.html");
}

function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}

function enCookie() {
    let naviA = navigator.cookieEnabled;
    let naviB = navigator.appCodeName;
    let naviC = navigator.platform;
    let naviD = navigator.appVersion;
    let naviE = navigator.userAgent;

    output.innerHTML = `A:${naviA}<br> B:${naviB}<br> C:${naviC}<br> D:${naviD}<br> E:${naviE}`;
}