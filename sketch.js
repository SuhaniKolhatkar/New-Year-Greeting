var on = false;
let button ;
// Create an array for the firework objects
let fireworks = [];

// Create a variable for gravity
var gravity;

// Create a variable for the color of fireworks after the explosion
var sparkColor;
let tree;
// In the beginning..
function preload() {
  soundFormats("mp3");
  song = loadSound("techno_new_year_song.mp3");
  night = loadImage("1.png");
}
function setup() {
    // Create a drawing area for the fireworks
  createCanvas(windowWidth, windowHeight);
  button = createButton("Play")
  button.position(50, height-50);
  button.mousePressed(togglePlaying);
  colorMode(RGB)
  song.setVolume(1);
  //mySound.play();
  // Set the framerate to 60fps
  frameRate(60);
  // Gravity is a vector pointing straight down
  gravity = createVector(0, 0.08);
}

// Repeat over and over..
function draw() {
  image(night, 0, 0, windowWidth, windowHeight);
  noStroke();
  textFont("Georgia");
    fill(255, 215, 0);
  textSize(80);
  s = "2022";
  text(s, windowWidth / 4 -70, 100);
  textSize(50);
  s1 = "Happy New Year !!"
  text(s1, windowWidth / 4 -88, 200);
  
  textFont("Georgia");
  textSize(20);
  fill(255, 255, 244);
  s2 = "The bad news is time flies.  ";
  text(s2, windowWidth / 4 -100, 300);
  s3 = "The good news is you’re the pilot.";
  text(s3, windowWidth / 4-100, 325);
  s4 = "No matter how hard the past, you can always begin again.";
  text(s4, windowWidth / 4-100 , 350);
  s5 = "You can get excited about the future. The past won’t mind.";
  text(s5, windowWidth / 4-100 , 375)
  s6 = "Hey dear , It's New Start, New Begining!! ";
  text(s6, windowWidth / 4-100 , 400);
     s7 = "Happy New Year !! ";
  text(s7, windowWidth / 4-100 , 425);
  textSize(20)
  //fill(192,192,192)
  s8 = " By Suhani Kolhatkar .";
  text(s8, windowWidth / 4 -50,500);
  
  if (on){// Create a black background with 40% transparency
  background(0, 40);
    // Set the color of fireworks after the explosion
  sparkColor = pickColor();

  // Set the "launch" position of all fireworks to a random
  // number between 40 pixels from the left side of the canvas
  // to 40 pixels from the right side of the canvas
  xPosition = random(0, width/2+60);

  // In every new frame, there is a 1% chance that a new firework is launched
  if (random(1) < 0.1) {
    fireworks.push(new Firework(sparkColor, xPosition));
  }

  // Repeat for every existing firework
  for (i = fireworks.length - 1; i >= 0; i--) {
    // Update their values
    fireworks[i].update();

    // Show their new positions
    fireworks[i].show();

    // If the firework is no longer visible, delete it from the
    // fireworks array to free some memory.
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
    
  
 // else{
  // image(night, 0, 0, windowWidth, windowHeight);
 // noStroke();
  //}
}
  }
}
  
  function mousePressed(){
    if(mouseIsPressed)
    {on=!on}}

  
function pickColor() {
  // All fireworks get a random color
  c = color(random(50, 255), random(50, 255), random(50, 255));
  return c;
  
}

function togglePlaying (){
  //use the isPlaying to determine whether the sound is playing or not
  // if the sound is not playing
  if (!song.isPlaying()){
    // make it play
    song.play();
    // define the sound level
    song.setVolume(0.5);
    button.html("pause")
  }
  // else pause it
  else {
    song.pause();
    button.html("play")
  }
  
}




