$(document).ready(function () {
    $('.mainmenu').hover(function () {
            // over
            $(this).child('.submenu').stop().slideDown(500);
        }, function () {
            // out
            $(this).child('.submenu').stop().slideUp(500);
        }
    );
});