var img;
var nobox; //controls visibility of selection boxes
var x=50; //x coordinate of yellow selection box
var y=250; //y coordinate of yellow selection box
var xsize=50; //x dimension of yellow selection box
var ysize=50; //y dimension of yellow selection box
var sensitivity=10; //sensitivity for scaling/moving yellow selection box
//coordinates and dimensions of red selection box
var select = {
  x: 0,
  y: 0,
  xsize: 0,
  ysize: 0
};
//coordinates and dimensions of pasted region
var paste = {
  x: 0,
  y: 0,
  xsize: 0,
  ysize: 0
};

function preload() {
  img = loadImage("images/pic0.jpg");
}

function setup() {
  canvas = createCanvas(img.width, img.height+200);
  //creates sensitivity slider
  slider = createSlider(0, 30, 10, 5);
  slider.position(30,170);
  slider.style('width','140px')

}
function draw() {

  var sensitivity = slider.value();
//controls for changing the location and size of the selection
  if (keyIsDown(LEFT_ARROW)) {
    if (keyIsDown(SHIFT)) {
      xsize-=sensitivity;
    } else {
      x-=sensitivity;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (keyIsDown(SHIFT)) {
      xsize+=sensitivity;
    } else {
      x+=sensitivity;
    }
  }
  if (keyIsDown(UP_ARROW)) {
    if (keyIsDown(SHIFT)) {
      ysize-=sensitivity;
    } else {
      y-=sensitivity;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (keyIsDown(SHIFT)) {
      ysize+=sensitivity;
    } else {
      y+=sensitivity;
    }
  }

//sets a maximum size for the instructions text
  var textsize=img.width*0.025;
  if (textsize >= 20) {
  textsize = 20
}

  clear();
  image(img, 0, 200);

//draws the selection boxes
  noFill();
  strokeWeight(4);
  stroke(255,0,0);
  if (nobox == 1) {
  noStroke();
}
  rect(select.x,select.y,select.xsize,select.ysize);
  stroke(255,255,0);
  if (nobox == 1) {
  noStroke();
}
  rect(x,y,xsize,ysize);

//copies image in the red selection box to the yellow selection box
  copy(img, select.x, select.y-200, select.xsize, select.ysize, paste.x, paste.y, paste.xsize, paste.ysize);

//draws instruction text
  noStroke();
  fill(255);
  rect(0,0,img.width,200)
  textSize(textsize);
  fill(0);
  text('arrow keys to move selection, hold SHIFT and use arrow keys to change selection size', 10, 20);
  text('SPACE to select region, ENTER to place selected region', 10, 40);
  text('R to remove boxes', 10, 60);
  text('S to save', 10, 80);
  text('sensitivity', 40, 160);
}

//takes coordinates and dimensions of red selection box so they can be used in the copy above
function keyTyped() {
  if (key === ' ') {
    select.x=x;
    select.y=y;
    select.xsize=xsize;
    select.ysize=ysize;
  }
  if (key === 'r') {
    nobox=1
  }
  if (key === 's') {
    saveCanvas(canvas, 'custom'+imageName, 'png');
  }

}

//sets coordinates and dimensions for where the selection will be pasted
function keyPressed() {
  if (keyCode === ENTER) {
    paste.x=x;
    paste.y=y;
    paste.xsize=xsize;
    paste.ysize=ysize;
  }
}
