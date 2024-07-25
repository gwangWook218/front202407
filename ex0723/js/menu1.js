$(document).ready(function () {
    $('.mainmenu').hover(function () {
            // over
            $('.submenu').stop().slideDown(500);
        }, function () {
            // out
            $('.submenu').stop().slideUp(500);
        }
    );
});