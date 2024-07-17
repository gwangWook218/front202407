var i = 30;
var j = 15;
// var d1 = document.getElementById('cal1');

window.onload = function(){
    // 삼항연산자
    // (조건) ? '참일 때 실행값' : '거짓일 때 실행값';
    var result = (i < j) ? 'i가 j보다 작다' : 'i가 j보다 크다';
    // var result2 = (i < j) ? d1.innerHTML='i가 j보다 작다' : d1.innerHTML='i가 j보다 크다';
    console.log(result);

    var num = 5;
    var sum = 15;

    var result3 = ++num <= sum * 5;
    console.log(result3);
}