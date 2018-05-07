var barColor = ['#FFF','#CCC',
                '#00C800','#32A532', '#FFD3D8', '#FF4B7D', '#FE9326',
                '#641E78','#79D3C8', '#465055', '#0F1112', '#647378',
                '#7D9196','#D2DCDC', '#0F418C', '#E6EBEB', '#E13241'
            ];

for (var i = 0; i < barColor.length; i++){
    /* Color */
    var color = document.createElement('div');
    color.id = 'color' + i;
    color.className = 'colorSwatch';
    color.style.background = barColor[i];
    document.getElementById('swatch'). appendChild(color);


    /* Label */ 
    var text = document.createElement('p');
    var textNode = document.createTextNode(barColor[i]); 
    text.appendChild(textNode);
    text.className = 'label';
    document.getElementById(color.id).appendChild(text);
}