let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");


/* //DRAW LINES
context.strokeStyle = "purple"; //determine color of drawn line
context.lineWidth = 5; //Determine the thickness of the drawn lines
context.beginPath();
context.moveTo(250,0);
context.lineTo(250,250);
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250);
context.stroke(); */

/* //DRAW TRIANGLE
context.strokeStyle = 'blue'; //determine color of drawn line
context.fillStyle = 'pink'; //determine what color to fill shape
context.lineWidth = 5; //Determine the thickness of the drawn lines
context.beginPath();
context.moveTo(10,490);
context.lineTo(250,10);
context.lineTo(490,490);
context.lineTo(10,490);
context.stroke();
context.fill(); */

/* //DRAW RECTANGLE
context.fillStyle = 'pink'; 
context.fillRect(0,0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "blue";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 0, 250, 250); */

/* //DRAW CIRCLE
//(x, y, r, sAngle, eAngle, counterclockwise)
context.fillStyle = "lightblue";
context.strokeStyle = "darkred";
context.lineWidth = 5;
context.beginPath();
context.arc(0, 0, 100, 5 / 3 * Math.PI, 11 / 6 * Math.PI, true );
context.stroke();
context.fill(); */

//DRAW TEXT
context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);