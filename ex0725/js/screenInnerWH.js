var demo = document.getElementById('demo');
var demo2 = document.getElementById('demo2');
var demo3 = document.getElementById('demo3');
demo.style.backgroundColor = "yellow";
demo.style.fontSize = "1.5em";
demo2.style.backgroundColor = "yellowgreen";
demo2.style.fontSize = "1.5em";
demo3.style.backgroundColor = "lightpink";
demo3.style.fontSize = "1.5em";

var screenWidth = screen.width;
var screenHeight = screen.height;
var availScreenWidth = screen.availWidth;
var availScreenHeight = screen.availHeight;
var screenColorDep = screen.colorDepth;
var screenPixDep = screen.pixelDepth;

demo.innerHTML = `Screen width is ${screenWidth}<br> Screen height is ${screenHeight}`;
demo2.innerHTML = `Available screen width is ${availScreenWidth}<br> Available Screen height is ${availScreenHeight}`;
demo3.innerHTML = `Screen color depth is ${screenColorDep}<br> Screen pixel depth is ${screenPixDep}`;