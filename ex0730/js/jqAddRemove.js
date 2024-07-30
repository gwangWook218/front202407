$("button").css("font-size", "20px");
$("p").css("background-color", "aquamarine");
$("ol").css("border", "1px solid blue");

$("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
});

$("#btn2").click(function(){
    $("ol").append("<li>Appended item</li>");
});

$("#btn3").click(function(){
    $("p").prepend(" <b>Preppended text</b>.");
});

$("#btn4").click(function(){
    $("ol").prepend("<li>Preppended item</li>");
});

$("#btn5").click(function(){
    $("img").before("<b>Before</b>");
});

$("#btn6").click(function(){
    $("img").after("<i>After</i>");
});

$("#btn7").click(function () { 
    $("#remove").remove();
});

$("#btn8").click(function () { 
    $("#remove").empty();
});

$("#btn9").click(function (e) { 
    $("p").remove(".del1, .del3");
});