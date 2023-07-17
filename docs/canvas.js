let landing_gear_down = true;
let background_x =-710;
let background_speed = 0;

let x = 700;
let y = 465;
let size = 50;
let speed = 5;
let angle = 0;
let angleSpeed = 0.01;
let maxthrottle = 100; 

function keyReleased() {
  if (key === 'g') {
    landing_gear_down = !landing_gear_down; // toggle the state of the landing gear
  }
}

function setup() {
    createCanvas(1430, 630);
    frameRate(100); // Set the frame rate to 60 frames per second
    let planeAltitude = 0;
  }

  function calculateAltitude() {
    return 100 - 10 / 63 * y;
  }
  
  function draw() {
    var planeAltitude = calculateAltitude();

    background(152, 234, 250);

    fill(0);
    noStroke(); // remove the stroke
    rect(0, 600,1430,30); // the runway

    fill(255);
    rect(background_x,610,70,10);
  
    stroke(0);
    push();
    translate(x + size / 2, y + size / 2);
    rotate(angle);
    fill(0);
    if (landing_gear_down) {
      ellipse(-201, 100, 20);
      rect(-205, 50, 7, 50)
      ellipse(-100, 100, 20);
      ellipse(-80, 100, 20);
      rect(-110, 85, 40, 7);
      rect(-95, 60, 7, 30);
  }
  fill(255);
    triangle(-300, 50, -230, -5, -230, 50);
    rect(-230, 50, 300, -55);
    triangle(70, 50, 70, -5, 140, -5);
    triangle(20, -5, 140, -5, 140, -80);
    triangle(20, -5, 140, -80, 90, -80);
    triangle(-100, -5, -20, -5, 20, -80);
    triangle(-100, 50, -20, 50, 20, 150);

    fill(0);

    triangle(-275, 30, -250, 10, -200, 25);
    triangle(-250, 10, -200, 25, -200, 10);
    fill(255);
    triangle()
    pop();
    beginShape();
    fill(245, 129, 66);
    rect(1300, 530, 100, 25);
    triangle(1330, 530, 1400, 500, 1360, 530);
    triangle(1330, 555, 1360, 555, 1400, 590);
    triangle(1300, 530, 1300, 555, 1270, 555);
    endShape(CLOSE);
    fill(0);
    textSize(20);
    text('Pitch', 1300, 520);
    text('Throttle: ' + '(' + background_speed + ')', 20, 250);
    pop()
    fill(0)
    textSize(20);
    text('Altitude (feet)', 1300, 20);
    rect(1400, Math.floor(planeAltitude), 10, 60);
    fill(3, 255, 28);
    rect(20, 250, 30, background_speed);

    background_x += background_speed;
  if (background_x > 1350) {
    background_x = -710;
  }
  if (keyIsDown(UP_ARROW)) {
    y += speed; // Move the square down
    angle -= angleSpeed;
  } else if (keyIsDown(DOWN_ARROW)) {
    y -= speed; // Move the square up
    angle += angleSpeed;
  }
if (angle > 90) {
  y += speed; // Move the square down
}
  if (keyIsDown(LEFT_ARROW)) {
    angle -= angleSpeed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    angle += angleSpeed;
  }
  if (angle > 90) {
    y += speed;
  }
  if (y > 465 && angle < 0 || y > 465 && angle > 0 || y > 465 && angle == 0) {
    y = 465;
    angle = 0;
  }
  if (y < 465 && angle < -1) {
    fill(0);
    textSize(32);
    text('NOSEDIVE', 550, 300);
    y += speed;
    background_speed = 0;
  } else if (y < 465 && angle > 1) {
    fill(0);
    textSize(32);
    text('STALL', 550, 300);
    y += speed;
    background_speed = 0;
  }
  fill(0);
  textSize(32);
  text('Pitch: ' + angle, 0, 590)
  text('Speed (KNOTS): ' + background_speed*1.625, 0, 550);
  text('Altitude: ' + Math.floor(planeAltitude), 0, 510);
  textSize(20);
  text('Keypresses:\nw = throttle up by 10\ns = throttle down by 10\ng = gear toggle\ndown arrow = pitch up\nup arrow = pitch down\nspace = brakes', 0, 20);
  textSize(32);
  text("Albert Kemp's JavaScript Flight Simulator ⭐⭐⭐⭐⭐", 450, 40);
  }

  function maxThrottle() {
    if (background_speed == maxthrottle) {
      background_speed = maxthrottle;
    }
  }

  function keyPressed() {
    if (key === 'w') {
      background_speed += 10;
    } else if (key === 's') {
      background_speed -= 10;
    } else if (background_speed > maxthrottle) {
      background_speed = maxthrottle;
    } else if (key === ' ') {
      background_speed = 0;
    }
  }
  
  
    
  
  

  