$("#btn1").click(function (e) { 
    $("#h1, #h2, #p1, #p2").addClass("blue");
    $("#div1").addClass("important");
});

$("#btn2").click(function (e) { 
    $("#div2").addClass("blue important");
});

$("#btn3").click(function (e) { 
    $("#div2").removeClass("blue");
});

$("#btn4").click(function () { 
    $("#h1, #h2, #p1, #p2").toggleClass("blue");
});