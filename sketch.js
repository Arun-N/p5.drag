var shape;

function setup() {

	createCanvas(windowWidth, windowHeight);
	createEllipse(300, 300, 100, 100, "rgb(255, 0, 0)");
	createRect(150, 100, 130, 130, "rgb(0, 255, 0)");
}

function draw() {
	background("rgb(255, 255, 255)");
	display();
	if(isDragging){
		shadow(shape);
	}
}

function mousePressed() {
	isDragging = true;
	shape = recognizeShape(mouseX, mouseY);
	//console.log(shape);
}
function mouseReleased() {
	drag(shape, mouseX, mouseY);
}