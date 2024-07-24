var d = document;
var btn = d.getElementById('btn');
var date = d.getElementById('date');

function displayDate() {
    date.innerHTML = Date();
}
btn.addEventListener('click', displayDate);

// -----------------------------------------
var btnOverOut = d.getElementById('btnOverOut');
var viewOverOut = d.getElementById('viewOverOut');

function myText(e) {
    let myEvent = e.type;
    viewOverOut.innerHTML = `마우스 ${myEvent} 이벤트가 발생하였습니다.`
}

btnOverOut.addEventListener('click', myText);
btnOverOut.addEventListener('dblclick', myText);
btnOverOut.addEventListener('mousedown', myText);
btnOverOut.addEventListener('mouseup', myText);
btnOverOut.addEventListener('mouseover', myText);
btnOverOut.addEventListener('mouseout', myText);