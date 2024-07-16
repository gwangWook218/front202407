// 이창을 떠날지 묻고, true이면 새창을 띄워서 굿바이 인사한다.
if (window.confirm('이 창을 닫으시겠습니까?')) {
    window.open("exit.html", "mozillaWindow", "popup")
    // window.open('https://www.mozilla.org/', 'mozillaTab');
    // window.open("https://www.mozilla.org/", "mozillaWindow", "popup")
}