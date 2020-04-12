
var r = 0;
var g = 150;
var b=20;

function setup(){
  createCanvas(255,255);
  background(r,g,b);  
}


function draw(){     
    background(mouseX,mouseX+50,mouseX+200);
    fill("red");
    ellipse(mouseX,mouseY,15,15);
    drawSprites();
}

