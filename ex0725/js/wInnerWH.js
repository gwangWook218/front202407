var demo = document.getElementById('demo');
demo.style.backgroundColor = "yellow";
demo.style.fontSize = "1.5em";

var winInnerWidth = window.innerWidth;
var winInnerHeight = window.innerHeight;

demo.innerHTML = `Browser inner window width: ${winInnerWidth}px<br> Browser inner window height: ${winInnerHeight}px`;