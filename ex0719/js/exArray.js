// 객체 생성방식으로 배열 정의하기
var pen = new Array(4);
// var pen = [];
console.log(pen);

pen[0] = 'red';
console.log(pen);

pen[1] = 'green';
console.log(pen);

pen[2] = 'blue';
console.log(pen);

pen[3] = 'orange';
console.log(pen);

console.log(pen[2]);

// 배열의 또 다른 사용
var room = new Array(4);
room = ['red', 'green', 'blue', 'orange'];
console.log(room);

var str = ['red', 'green', 'blue', 'orange'];
console.log(str);

// reverse
pen.reverse();
console.log('reverse: ', pen);

// shift
pen.shift();
console.log('shift: ', pen);
// unshift
pen.unshift('pink', 'brown');
console.log('unshift: ', pen);

// push
pen.push('pink', 'sky');
console.log('push: ', pen);
// pop
pen.pop();
console.log('pop: ', pen);

// splice
pen.splice(1, 2, 'apple', 'grape');
console.log("splice(1, 2, 'apple', 'grape')", pen);

// 값으로 인덱스 찾기
var myVal = pen.indexOf('grape');
console.log(myVal);

// join
console.log("pen.join: " + pen.join());
console.log("pen.join('/'): " + pen.join('/'));

// sort
let pens = ['red', 'green', 'blue', 'orange'];
console.log(pens.sort());

// 내림차순
pens.sort();
pens.reverse();
console.log(pens);

// 