// document.getElementById('btnTrue').onclick = function () {
//     document.getElementById('v').style.display = 'block';
// }

// document.getElementById('btnFalse').onclick = function () {
//     document.getElementById('v').style.display = 'none';
// }

// ---------------------------------------------------------------
$("#btnFalse").click(function (e) { 
    $("p").hide();
});

$("#btnTrue").click(function (e) { 
    $("p").show();
});