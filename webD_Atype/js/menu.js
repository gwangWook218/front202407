$(document).ready(function () {
    $(".menu").hover(function () {
            // over
            $(".submenu, .subback").stop().slideDown(500);
        }, function () {
            // out
            $(".submenu, .subback").stop().slideUp(500);
        }
    );
});