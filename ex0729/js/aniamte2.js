$(document).ready(function () {
    $("button").click(function () { 
        var d = $("div");
        d.animate({left: '100px'}, 'slow');
        d.animate({fontSize: '3em'}, 'slow');
    });
});
