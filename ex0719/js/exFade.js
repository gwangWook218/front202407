// FadeIn -------------------------------
// $(document).ready(function () {
//     $("button").click(function () { 
//         $("#div1").fadeIn();
//         $("#div2").fadeIn("slow");
//         $("#div3").fadeIn(3000);
//     });
// });

// FadeOut ------------------------------
// $(document).ready(function () {
//     $("button").click(function () { 
//         $("#div1").fadeOut();
//         $("#div2").fadeOut("slow");
//         $("#div3").fadeOut(3000);
//     });
// });

// FadeToggle ----------------------------
$(document).ready(function () {
    $("button").click(function () { 
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});