var barColor = ['#FFF','#CCC',
                '#00C800','#32A532', '#FFD3D8', '#FF4B7D', '#FE9326',
                '#641E78','#79D3C8', '#0F418C', '#465055', '#0F1112', '#647378',
                '#7D9196','#D2DCDC', '#0F418C', '#E6EBEB', '#E13241'
            ];
var numberOfVariants = 1;

for (var i = 0; i < barColor.length; i++){
    var color = document.createElement('div');
    color.id = 'x' + i;
    color.className = 'hue';
    document.getElementById('swatch'). appendChild(color);
    var hue = document.createElement('div');
    var text = document.createElement('p');
    var textNode = document.createTextNode(barColor[i]); 
    text.appendChild(textNode);
    text.style.margin = '0';
    hue.id = 'color' + i;
    hue.className = 'colorSwatch';
    hue.style.background = barColor[i];
    document.getElementById(color.id).appendChild(hue);
    document.getElementById(hue.id).appendChild(text);
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