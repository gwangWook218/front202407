$(document).ready(function () {
    $(".tabMenu li").click(function () { 
        var idx = $(this).index();

        $(".tabMenu li").css({"background-color": "#fff", "z-index": "0"})
        $(this).css({"background-color": "#8ad4bc", "z-index": "2"});
        $(".tabItem>*").hide().removeClass(".on");
        $(".tabItem>*").eq(idx).show().addClass(".on");

        $(".tabItem li").removeClass(".on");
        $(this).addClass(".on");
    });
});