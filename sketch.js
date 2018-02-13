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

var bgimg;
// var pos={
//   x:0,
//   y:0,
//   xs:0,
//   xy:0
// };

function preload() {
  img = loadImage("images/pic2.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
  bgimg=createGraphics(img.width, img.height);
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


  bgimg.updatePixels();
  bgimg.noFill();
  bgimg.strokeWeight(4);
  bgimg.stroke(255,0,0);
  bgimg.rect(dx,dy,dxs,dys);
  bgimg.stroke(255,255,0);
  bgimg.rect(x,y,xs,ys);
  bgimg.clear();

  image(bgimg, 0, 0);
  //image(img, ex, ey, exs, eys, dx, dy, dxs, dys);
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
