var img;
var x=50;
var y=50;
var xs=50;
var ys=50;
var d=10;

var dx;
var dy;
var dxs;
var dys;

var ex;
var ey;
var exs;
var eys;


function preload() {
  img = loadImage("images/pic2.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
}
function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    if (keyIsDown(SHIFT)) {
      xs-=d;
    } else {
      x-=d;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (keyIsDown(SHIFT)) {
      xs+=d;
    } else {
      x+=d;
    }
  }
  if (keyIsDown(UP_ARROW)) {
    if (keyIsDown(SHIFT)) {
      ys-=d;
    } else {
      y-=d;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (keyIsDown(SHIFT)) {
      ys+=d;
    } else {
      y+=d;
    }
  }

  clear();

  image(img, 0, 0);

  noFill();
  strokeWeight(4);
  stroke(255,0,0);
  rect(dx,dy,dxs,dys);
  stroke(255,255,0);
  rect(x,y,xs,ys);

  copy(img, dx, dy, dxs, dys, ex, ey, exs, eys);

}

function keyTyped() {
  if (key === ' ') {
  dx=x;
  dy=y;
  dxs=xs;
  dys=ys;
  }
}


function keyPressed() {
  if (keyCode === ENTER) {
  ex=x;
  ey=y;
  exs=xs;
  eys=ys;
  }
}
