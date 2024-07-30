// text(): 태그 안에 있는 값을 text로 분석하여 가져오기
$("#btn1").click(function () { 
    document.querySelector("#result").innerHTML = $("#test").text();
});

// html(): 태그 안에 있는 값을 html로 분석하여 가져오기
$("#btn2").click(function () { 
    document.querySelector("#result").innerHTML = $("#test").html();
});

// val(): input박스 안에 사용자가 입력한 값을 가져오기
$("#btn3").click(function () { 
    document.querySelector("#result").innerHTML = $("#myVal").val();
});

$("#btn4").click(function () { 
    document.querySelector("#result").innerHTML = $("#result").attr("style");
});

$("#btn5").click(function () { 
    $("#result").attr("style", "border: 1px solid red;");
});