console.log('-----------------------')
// forEach 함수
let valForEach = ['people', 'dog', 'cat', 'bunny'];

valForEach.forEach(function(item, index, array) {
    document.write(`<p>${index} : ${item}입니다.</p>`);
});

// map 함수
let myNum = [1, 2, 3, 4, 5];

let myResult = myNum.map(function(item, index, array) {
    document.write(
        `<p>${item}</p>`
    );
    return item * 3;
})
console.log(myResult);

// filter 함수
let myNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let myResult2 = myNum2.filter(function(item, index) {
    return index % 2 === 0;
})
console.log(myResult2);
myResult2.forEach(function(item) {
    document.write(`<p>${item}입니다.</p>`);
});

let myNum3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myResult3 = myNum3.reduce(
    (hap, item, index) => {
    return hap + (item*2);
}, 0);
console.log(myResult3);

// for...in 문
let cars1 = ['red', 'blue', 'green', 'violet'];
for (let s in cars1) {
    document.write(`<p>${cars1[s]}입니다.</p>`)
}

// for...of 문
let cars2 = ['red', 'blue', 'green', 'violet'];
for (let s of cars2) {
    document.write(`<p>${s}입니다.</p>`)
}