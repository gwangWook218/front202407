// 저장되어 있는 곳
var id = "main";
var pw = "A0123";

// 사용자가 입력한 값
var userId = "main";
var userPw = "A0123";

// var userProm = prompt('아이디를 입력하세요.');
// var userPromPw = prompt('비밀번호를 입력하세요.');

// var classA = prompt('A과목 점수를 입력하세요.');
// var classB = prompt('B과목 점수를 입력하세요.');

var numNot = 3 > 2;

// 전체 페이지를 읽고 난 후에 실행한다.
window.onload = function(){

    // AND 조건 &&, OR 조건 ||, NOT 조건 !
    var result = (id === userId) && (pw === userPw);
    console.log(result);

    // result = (id === userProm) && (pw === userPromPw);
    // console.log(result);

    // result = (classA > 70) || (classB >70);
    // console.log(result);

    result = !numNot;
    console.log(result);
}