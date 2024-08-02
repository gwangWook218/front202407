$(document).ready(function () {
    $(".menu").hover(function () {
            // over
            $(this).find(".submenu").stop().slideDown();
        }, function () {
            // out
            $(".submenu").stop().slideUp();
        }
    );
});