$(function () {
    $('.menu').hover(function () {
            // over
            $(this).find('.submenu').stop().slideDown(500);
        }, function () {
            // out
            $('.submenu').stop().slideUp(500);
        }
    );
});