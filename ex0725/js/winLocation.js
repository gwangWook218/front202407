// 변수 선언
var demo = document.getElementById('demo');
var demo2 = document.getElementById('demo2');
var demo3 = document.getElementById('demo3');
var demo4 = document.getElementById('demo4');
var demo5 = document.getElementById('demo5');

// 속성 스타일 정의
function funcStyle(obj, c) {
    obj.style.backgroundColor = c;
    obj.style.fontSize = "1.5em";
}

funcStyle(demo, "yellow");
funcStyle(demo2, "yellowgreen");
funcStyle(demo3, "lightpink");
funcStyle(demo4, "yellow");
funcStyle(demo5, "yellowgreen");

// 값 정의
var locHref = window.location.href;
var locHostName = window.location.hostname;
var locPathName = window.location.pathname;
var locProtocol = window.location.protocol;
var locPort = window.location.port;

function funcInnerHTML(obj, loc) {
    obj.innerHTML = `${loc}`;
}

funcInnerHTML(demo, locHref);
funcInnerHTML(demo2, locHostName);
funcInnerHTML(demo3, locPathName);
funcInnerHTML(demo4, locProtocol);
funcInnerHTML(demo5, locPort);

var locAssign = document.getElementById("locAssign");
locAssign.style.fontSize = "1.5em";

// 버튼 이벤트 구현
function newDoc() {
    const aUrl = "https://www.w3schools.com/";
    window.location.assign(aUrl);
}