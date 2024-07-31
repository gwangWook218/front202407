$(document).ready(function () {
    $(".tabMenu li").click(function(){
        var tabIdx = $(this).index();
        
        $(".tabItem>*").hide().removeClass("on");
        $(".tabItem>*").eq(tabIdx).show().addClass("on");
        
        $("#tabMenu li").removeClass("on");
        $(this).addClass("on");
    })
});