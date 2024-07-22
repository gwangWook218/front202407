// 오브젝트 생성
var picture = new Object();

// 속성 생성 및 초기화
picture.title = "에펠탑의 신랑신부";
picture.artist = "마르크 샤갈";
picture.type = "유화";

// 행위 Method
picture.art = function () {
    document.write(`제목: ${picture.title} <br> 화가: ${picture.artist}`);
}
picture.art();

// ================================================================
var pic = {
    title: '에펠탑의 신랑신부',
    artist: '마르크 샤갈',
    year: '1965'
}
document.write('<br>제목은:' + pic.title + "<br>작가는: " + pic.artist + '<br>년도는: ' + pic.year);