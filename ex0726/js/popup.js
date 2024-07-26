function myAlert() {
    alert("I am an alert box!")
}

function myConfirm() {
    var re = document.getElementById("re");
    var result = confirm("버튼을 눌러주세요.");
    if (result) {
        re.innerHTML = "확인";
    } else {
        re.innerHTML = "취소";
    }
}

function myPrompt() {
    var reProm = document.getElementById("reProm");
    var person = prompt("이름을 입력해주세요.");
    
    if (person == null || person == "") {
        reProm.innerHTML = "사용자가 프롬프트 입력을 거부했습니다."
    } else {
        reProm.innerHTML = "안녕하세요 " + person + " 님, 만나서 반가워요.";
    }
}