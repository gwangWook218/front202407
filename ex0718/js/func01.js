var result1 = document.getElementById('func1');
var result2 = document.getElementById('func2');
var result3 = document.getElementById('func3');
var result4 = document.getElementById('func4');
var result5 = document.getElementById('func5');
var result6 = document.getElementById('func6');
var result7 = document.getElementById('func7');
var result;

// ------------------- 함수 선언 -------------------
function line() {
    // 함수 선언
    result1.innerHTML += "<p>" + "test" + "</p>";
}

line();
line();
line();

// -------------- 함수를 이용한 구구단 --------------
var dan = 2;
result = 0;

function multiply(i) {
    result2.innerHTML += dan + " * " + i + " = " + (dan * i) + "<br>";
}

for (let i = 1; i < 10; i++) {
    multiply(i);
}

// -------------- 함수를 이용한 덧셈 ---------------
function add(num01, num02) {
    var hap = num01 + num02;
    result3.innerHTML += hap + "<br>";
}

add(2, 3);
add(45, 233);
add(123685, 45690);

// -------------- 함수를 이용한 버튼 이벤트 ---------------
function flower(flowerName) {
    switch (flowerName) {
        case "무궁화":
            alert('무궁화동호회를 추천합니다.');
            break;
        case "장미":
            alert('장미동호회를 추천합니다.');
            break;
        case "국화":
            alert('국화동호회를 추천합니다.');
            break;
    }
}

// ------------------- 함수 reuturn -------------------
result = 0;
var first = 13;
var last = 7;

function all(a, b) {
    var sam = a + b;
    return sam;
}

var result = all(first, last);
result5.innerHTML += "결과값 : " + result;

// ----------------- 전역변수와 지역변수 ------------------
var num03 = 1;

function localVar() {
    var num04 = num03 + 1;
    result6.innerHTML += "a : " + num04 + "<br>";
}

localVar();
result6.innerHTML += num03;

// --------------- 함수 안에서 변수 만들기 ---------------
function love() {
    str = "산";
    var sum = '강';
    result7.innerHTML += '함수내에서 출력 : ' + str + "<br>";
    result7.innerHTML += '함수내에서 출력 : ' + sum + "<br>";
    return str;
}

var reStr = love();
result7.innerHTML += reStr  + "<br>";