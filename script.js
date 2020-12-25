var positionX;
var positionY;
var velocityY;
var diameter = 100;
var interval = 200;
var t = 0.15;
var g = 9.8;
var e = -0.8;

function setup() {
    createCanvas(windowWidth, windowHeight);
    positionX = width / 2;
    positionY = 100;
    velocityY = 0;
}

function draw() {
    
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    background(255, 80);
    noStroke();

    fill(103, 182, 45);
    ellipse(positionX, positionY, diameter);

    fill(250, 199, 0);
    ellipse(positionX - (diameter + interval), positionY, diameter);
    fill(230, 60, 53);
    ellipse(positionX - (diameter + interval) * 2, positionY, diameter);
    fill(0, 155, 219);
    ellipse(positionX + (diameter + interval), positionY, diameter);
    fill(187, 57, 255);
    ellipse(positionX + (diameter + interval) * 2, positionY, diameter);

    velocityY += g * t;
    positionY += velocityY * t;

    if (positionY > height - 50) {
        velocityY *= e;
        velocityY += g * t;
        positionY += velocityY * t;
    }

}
