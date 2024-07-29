var result = document.getElementById('result');

$("p").on("click", function () {
    result.innerHTML = $(this).attr("id");
    $(this).hide();
});

$("#muti_on").on({
    mouseenter: function () {
        $(this).css("background-color", "lightgray");
    },
    mouseleave: function () { 
        $(this).css("background-color", "lightblue");   
    },
    mousedown: function () { 
        $(this).css("background-color", "yellow");   
    },
    dblclick: function () { 
        $(this).css("background-color", "orange");   
    }
});