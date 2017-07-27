var x = 100;
var easing = 0.01;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
    var targetX = mouseX;
    x += (targetX - x) * easing;
    fill(100);
    ellipse(x, height / 2, 50, 50);
    if(x > width - 50 || x < 50){
        easing *= -1;
    }
    print(targetX + " : " + x);
}