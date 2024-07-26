$(document).ready(function () {
    $('.menu').hover(function () {
            // over
            $('.submenu').stop().slideDown(500);
        }, function () {
            // out
            $('.submenu').stop().slideUp(300);
        }
    );
});