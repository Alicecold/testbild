var canvas = document.getElementById("myCanvas");
canvas.style.width = (canvas.width = 500) + "px";
canvas.style.height = (canvas.height = 500) + "px";
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "#FFFFFF";
ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2, 0, 2 * Math.PI, false);
ctx.fill();