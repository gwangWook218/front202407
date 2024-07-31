$("button").click(function (e) { 
    let w = $("#div1").width();
    let h = $("#div1").height();
    let iw = $("#div1").innerWidth();
    let ih = $("#div1").innerHeight();
    let ow = $("#div1").outerWidth();
    let oh = $("#div1").outerHeight();
    let print1 = "Width of div: " + w + "<br>" + "Height of div: " + h + "<hr>";
    let print2 = "Inner width of div: " + iw + "<br>" + "Outer height of div: " + ih + "<hr>";
    let print3 = "Inner height of div: " + ow + "<br>" + "Outer height of div: " + oh + "<hr>";
    $("#div1").html(print1 + print2 + print3);
});