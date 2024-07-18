// 기본함수--------------------------------------
function func(paramas) {
    // test
}

// 익명함수--------------------------------------
var all = function(a, b) {
    var result;
    
    // 둘 중에 더 큰 값을 찾기.
    a > b ? result = 'a' : result = 'b';
    
    return result;
}

console.log(all(7, 10));

// 함수의 화살표 문법 (매개변수 x) ----------------
const main1 = () => {
    console.log('main1');
}

main1();

// 함수의 화살표 문법 (매개변수 1개) --------------
const main2 = a => {
    console.log(a);
}

main2('welcome');

// 함수의 화살표 문법 (매개변수 여러 개) ----------
const main3 = (a, b) => {
    console.log(a, b);
}

main3('welcome,', 'Korea!');

// 화살표 함수 단축형4 ({} 생략) --------------------------
const main4 = (a, b) => console.log(a + b);
main4(3, 5);

// 화살표 함수 단축형5 ({}, return 생략) --------------------------
const main5 = a => console.log(a * 2);
main5(5);

// 화살표 함수 단축형6 ('()'로 객체 표현) --------------------------
const main6 = a => ({b : a})
console.log(main6(25));