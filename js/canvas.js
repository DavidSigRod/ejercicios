var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Líneas

ctx.moveTo(200,30);
ctx.lineTo(800,250);
ctx.lineWidth = 9;
ctx.stroke();

// Círculos

ctx.beginPath();
ctx.arc(400,400,40,0,2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.arc(420,420,50,0,2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.arc(450,450,80,0,2*Math.PI);
ctx.stroke(); 

// Create gradient
var grd=ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle=grd;
ctx.fillRect(10,10,150,300); 

//Rectángulo

ctx.moveTo(230,45);
ctx.lineTo(600,45);
ctx.moveTo(600,45);
ctx.lineTo(600,250);
ctx.moveTo(600,250);
ctx.lineTo(230,250);
ctx.moveTo(230,250);
ctx.lineTo(230,45);
ctx.stroke();

ctx.moveTo(240,50);
ctx.lineTo(610,50);
ctx.moveTo(610,50);
ctx.lineTo(610,260);
ctx.moveTo(610,260);
ctx.lineTo(240,260);
ctx.moveTo(240,260);
ctx.lineTo(240,50);
ctx.stroke();


ctx.lineTo(590,40);

ctx.lineTo(590,240);

ctx.lineTo(220,240);
ctx.moveTo(220,240);
ctx.lineTo(220,40);
ctx.fillStyle="#FF0000";
ctx.fillRect(220,40,370,200); 
ctx.stroke();



//triángulo

ctx.beginPath();
ctx.moveTo(350, 35);
ctx.lineTo(500,35);

ctx.lineTo(400,350);

ctx.lineTo(350,35);
ctx.fillStyle = "#AAFFCC";
 ctx.fill();


ctx.beginPath();
    ctx.moveTo(28, 400);
    ctx.lineTo(78, 400); 
    ctx.lineTo(28, 450); 
    ctx.lineTo(28, 400); 
    ctx.fillStyle = "#996633";
     ctx.fill();


context.beginPath();
context.moveTo(75,25);
context.quadraticCurveTo(10, 80, 40, 130);
context.quadraticCurveTo(30, 90, 50, 130);
context.quadraticCurveTo(50, 100, 70, 130);
context.quadraticCurveTo(80, 110, 100, 130);
context.quadraticCurveTo(120, 120, 140, 130);
context.fillStyle = "rgb(100, 200, 50)";
context.fill();
