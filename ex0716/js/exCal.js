var num01 = 10;
var num02 = 20;
var num03 = 3;

document.getElementById("cal01").innerHTML = num01 + num02 + "<br>";
document.getElementById("cal02").innerHTML = num01 - num02 + "<br>";
document.getElementById("cal03").innerHTML = num01 * num02 + "<br>";
document.getElementById("cal04").innerHTML = num02 / num03 + "<br>";
document.getElementById("cal05").innerHTML = num01 % num03 + "<br>";

var result = 0;
document.getElementById("cal2_01").innerHTML = (result += num01) + "<br>";

var result = 0;
document.getElementById("cal2_02").innerHTML = (result -= num01) + "<br>";

var result = 30;
document.getElementById("cal2_03").innerHTML = (result *= num03) + "<br>";

var result = 30;
document.getElementById("cal2_04").innerHTML = (result /= num03) + "<br>";

var result = 32;
document.getElementById("cal2_05").innerHTML = (result %= num03) + "<br>";

var num = 5;
document.getElementById('cal3_01').innerHTML = ++num;
document.getElementById('cal3_02').innerHTML = num;
document.getElementById('cal3_03').innerHTML = num++;
document.getElementById('cal3_04').innerHTML = num;
document.getElementById('cal3_05').innerHTML = --num;
document.getElementById('cal3_06').innerHTML = num;
document.getElementById('cal3_07').innerHTML = num--;
document.getElementById('cal3_08').innerHTML = num;

var a = 5, b = 6;
console.log('1번 문항의 답은 ', a + b, "입니다.");
console.log('1번 문항의 답은 ' + (a + b) + "입니다.");

document.getElementById('cal4_01').innerHTML = '1번 문항의 답은 ' + (a + b) + "입니다.";

// 백틱 사용법
var num1 = 5, num2 = 6;
var result2 = '1번 문항의 답은 ' + (num1 + num2) + "입니다.";
document.getElementById('cal5_01').innerHTML = result2;

var comA = 20, comB = 10, comC = "10";
var result3;

result3 = `1. 크다: comA가 comB보다 크다 ${comA > comB}`
document.getElementById('cal6_01').innerHTML = result3
result3 = `1. 작다: comA가 comB보다 작다 ${comA < comB}`
document.getElementById('cal6_02').innerHTML = result3
result3 = `1. 같다: comA가 comB와 같다 ${comB == comC}`
document.getElementById('cal6_03').innerHTML = result3
result3 = `1. 다르다: comA가 comB와 다르다 ${comB != comC}`
document.getElementById('cal6_04').innerHTML = result3
result3 = `1. 완전히 일치한다: comA가 comB와 완전히 일치한다 ${comB === comC}`
document.getElementById('cal6_05').innerHTML = result3