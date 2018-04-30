var barColor = ['#00C800','#FFD3D8', '#79D3C8', '#D2DCDC', '#641E78', '#FF4B7D'];
var numberOfVariants = 1;

for (var i = 0; i < barColor.length; i++){
    var color = document.createElement('div');
    color.id = 'x' + i;
    color.className = 'hue';
    document.getElementById('swatch'). appendChild(color);
    var varyBy = 1/(numberOfVariants * 2 +1);
    var currentVariance = 0;
    for (var v = 0; v < numberOfVariants * 2 + 1; v++){
        currentVariance += varyBy;
        var hue = document.createElement('div');
        hue.id = 'color' + i + 'var' + v;
        hue.className = 'colorSwatch';
        if(v > numberOfVariants)
            hue.style.background = blendColors(barColor[i], '#FFFFFF', currentVariance);
        else if(v < numberOfVariants){
            hue.style.background = blendColors('#0000FF', barColor[i], currentVariance);
        }
        else{
            hue.style.background = barColor[i];
            varyBy *= -1;
        }
        document.getElementById(color.id).appendChild(hue);
    }
}

function blendColors(c0, c1, p) {
    var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
    return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
}


/*var canvas = document.getElementById("myCanvas");
canvas.style.width = (canvas.width = 500) + "px";
canvas.style.height = (canvas.height = 500) + "px";
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "#FFFFFF";
ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2, 0, 2 * Math.PI, false);
ctx.fill();*/