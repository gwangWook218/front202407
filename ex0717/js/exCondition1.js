var result1 = document.getElementById('result1');
var result2 = document.getElementById('result2');
var result3 = document.getElementById('result3');
var result4 = document.getElementById('result4');
var result5 = document.getElementById('result5');
var result6 = document.getElementById('result6');
var result7 = document.getElementById('result7');
var result8 = document.getElementById('result8');
var result9 = document.getElementById('result9');
var result10 = document.getElementById('result10');
var result11 = document.getElementById('result11');

// 1. if -------------------------------------
var num = 5;

if(num < 10){
    // 조건의 값이 참일 때 수행된다.
    result1.innerHTML = ('num은 10보다 작아요');
}

// 2. if~else -------------------------------------
// var age = prompt('나이를 입력하세요.', '숫자만 입력해주세요.');

// if (age > 20 && age < 40) {
//     result2.innerHTML = ('최종 입사에 합격하셨습니다');
// } else {
//     result2.innerHTML = ('최종 입사에 불합격하셨습니다.');
// }
// // 삼항연산자
// (age > 20 && age < 40) ? "" : "";

// // 3. if~else if -------------------------------------
// if (age < 20) {
//     result3.innerHTML = ('더 공부하고 오세요~');
// } else if (age > 40) {
//     result3.innerHTML = ('불합격입니다.');
// } else {
//     result3.innerHTML = ('합격하셨습니다.')
// }

// 4. switch -------------------------------------
var str1 = '학년을 입력하세요';
var str2 = '1학년:1, 2학년:2, 3학년:3, 기타:4';
var classRoom = '1';
// var classRoom = prompt(str1, str2);

switch (classRoom) {
    case '1': {result4.innerHTML = '2층으로 가세요.';}
        break;
    case '2': {result4.innerHTML = '3층으로 가세요.';}
        break;
    case '3': {result4.innerHTML = '별관으로 가세요.';}
        break;
    case '4': {result4.innerHTML = '본관으로 가세요.';}
        break;
    default: {result4.innerHTML = '1층 안내실로 가세요.';}
        break;
}

// 5. for -----------------------------------------------
var resultStr = "";
for (let i = 1; i <= 10; i++) {
    resultStr += (i + ', ');
}
result5.innerHTML = resultStr + " end";

// 5. for -----------------------------------------------
var resultStr = "";
var dan = 2;
for (let i = 1; i <= 10; i++) {
    resultStr += (dan + " * " + i + ' = ' + dan*i + "<br>");
}
result6.innerHTML = resultStr + " end";

// 2~9단 ---------------------------------------
var resultStr = "";
for (let i = 2; i < 10; i++){
    for (let j = 1; j < 10; j++){
        resultStr += (i + " * " + j + " = " + (i*j) + "<br>");
    }
}
result7.innerHTML = resultStr + " end";

// 8.while ----------------------------------------------
resultStr = "";
var numWhile = 10;

while (numWhile >= 0) {
    // 조건에 성립할 경우 실행
    resultStr += (numWhile + '<br>');

    // 반드시 *stop조건*을 넣어줘야 한다.
    numWhile--;
}
result8.innerHTML = resultStr;

// 9. d0~while --------------------------------------------
resultStr = "";
var numDo = -10;

// do의 특징: 일단 먼저 한 번 수행해요.
do {
    resultStr += (numDo + '<br>');
    numDo--;
} while (numDo >= 0);
result9.innerHTML = resultStr;
// while문은 최소 0번 수행(조건 안 맞으면 바로 종료)하고, do~while문은 최소 1번 수행(일단 do 한 번 실행)한다.

// 10. continue문 -------------------------------------
resultStr = "";
let numCnt;

for (numCnt = 1; numCnt <= 10; numCnt++) {
    if (numCnt == 3) {
        continue;
    }
    resultStr += (numCnt + "<br>");
}
result10.innerHTML = resultStr;

// 11. break문 ----------------------------------------
resultStr = "";
let numCnt2;

for (numCnt2 = 1; numCnt2 <= 10; numCnt2++) {
    if (numCnt2 == 4) {
        break;
    }
    resultStr += (numCnt2 + "<br>");
}
result11.innerHTML = resultStr;