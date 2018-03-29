var shape;

function setup() {

	createCanvas(windowWidth, windowHeight);
	createEllipse(300, 300, 100, 100, "rgb(255, 0, 0)");
	createRect(150, 100, 130, 130, "rgb(0, 255, 0)");
	createEllipse(400, 700, 100, 50, "rgb(23, 125, 255)");
	createTriangle(30, 75, 58, 20, 86, 75, "rgb(0, 255, 0)");
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
	shape = findShapeType(mouseX, mouseY);
}
function mouseReleased() {
	drag(shape, mouseX, mouseY);
}