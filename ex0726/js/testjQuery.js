$("button").click(function () { 
    $("p").hide();
});

$("#delDiv").click(function () { 
    $("#test").hide();
});

$("#delDiv2").click(function () { 
    $(".del").hide();
});

$("#dblclick").dblclick(function () { 
    $(this).hide();
});

$("#enter").mouseenter(function () { 
    $(this).text("오버했습니다.");
});

$("#enter").mouseleave(function () { 
   $(this).text("벗어났습니다."); 
});

$("#hover").hover(function () {
        // over
        $(this).text("마우스 OVER오버");
    }, function () {
        // out
        $(this).text("마우스 오버OUT ~ 빠이~");
    }
);