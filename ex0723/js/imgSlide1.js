// let slideIndex=0;
// let slideHeight=0;

// $(document).ready(function () {
//   init();
//   slide();
// });

// function init() {
//     slideIndex = 1;
//     slideHeight = 300;
// }
  
// function slide() {
//     setInterval(slide_move, 3000);
// }
  
// function slide_move() {
//     let newTop = -slideHeight * slideIndex;
//     $(".slideContent").animate({top: newTop}, 400, "swing");
//     if (slideIndex == 2) {
//       slideIndex = 0;
//     } else {
//       slideIndex++;
//     }
// }

var slide = $(".slideContent>img");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval(autoslide, 3000);

function autoslide() {
    $(slide[sno]).stop().animate({
        left: "100%"
    }, 1000, function () {
        $(this).css({left: "-100%"});
    });
    if (sno > eno) {
        sno = 0;
    } else {
        sno++;
    }
    $(slide[sno]).stop().animate({
        left: "0"
    }, 1000);
}