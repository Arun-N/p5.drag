//var c, s;
var currObj;

function setup() {

	createCanvas(windowWidth, windowHeight);
	createEllipse(300, 300, 100, 100, "rgb(255, 0, 0)");
	createRect(150, 100, 130, 130, "rgb(0, 255, 0)");
}

function draw() {
	display()
}

function mousePressed() {
	var shape = findShapeType(mouseX, mouseY);
	console.log(shape);
}
// function mouseReleased() {

// 	//console.log(mouseX + "  " + mouseY);
// 	if(currObj != undefined){
// 		drag(currObj);
// 	}
// }