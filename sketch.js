//var c, s;
var currObj;

function setup() {

	createCanvas(windowWidth, windowHeight);
	createDraggableCircle(100, 100, 180, 'rgb(0, 85, 255)');
	createDraggableSquare(300, 300, 100, 'rgb(0, 255, 187)');
	createDraggableSquare(250, 350, 50, 'rgb(255, 229, 0)');
	createDraggableEllipse(600, 600, 150, 80, 'rgb(255, 0, 38)');
	createDraggableRect(400, 400, 160, 80, 'rgb(140, 0, 255)');
	createDraggableTriangle(30, 75, 58, 20, 86, 75, 'rgb(140, 0, 255)');
}

function draw() {

	background("#ffffff");
	stroke(255);
	display();
	//fill('rgb(66, 66, 63)');
	if(Isdragging && (currObj != undefined)){
		drawShadow(currObj);
	}
}

function mousePressed() {

	currObj = getCurrentObj();
}
function mouseReleased() {

	//console.log(mouseX + "  " + mouseY);
	if(currObj != undefined){
		drag(currObj);
	}
}