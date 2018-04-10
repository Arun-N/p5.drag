
# p5.drag

p5.drag.js is a p5.js library that allows user to drag and move the primitive p5 shapes. It uses p5.recognize.js for detecting the shapes and thus has to be used alongside this library.


## Getting Started

### Dependencies

* <b>p5.recognize.js library</b> --> can be obtained from here : <a href="https://github.com/Arun-N/p5.recognize">https://github.com/Arun-N/p5.recognize</a>

### Installing

* Get both p5.drag.js and p5.recognize.js and add them to your library folder
* Link both the libraries in your HTML file as shown in this <a href="https://p5js.org/libraries/">page</a>

### Functions

* <b>drag ( object, mouseX, mouseY )</b> --> Main function that enables drag and move. Should be called inside mouseReleased() function.
* <b>shadow ( object )</b> --> Optional. Call this function inside draw() if you want a shadow image of the shape under your cursor while dragging.

### Flags
* <b>isDragging</b> --> A boolean variable used to check if the shape is currently being dragged

### Example
* The createEllipse(), createRect(), createTriangle() and findShapeType() functions belong to <b>p5.recognize.js</b>. Information about them can be found <a href="https://github.com/Arun-N/p5.recognize">here</a>
<br>

Live Example on <a href="http://plnkr.co/edit/6qwPge?p=info">Plunker</a>

<b>sketch.js :</b>
```javascript
var  shape;
function  setup() {
	createCanvas(windowWidth, windowHeight);
	createEllipse(300, 300, 100, 100, "rgb(255, 0, 0)");
	createRect(150, 100, 130, 130, "rgb(0, 255, 0)");
	createEllipse(400, 700, 100, 50, "rgb(23, 125, 255)");
	createTriangle(30, 75, 58, 20, 86, 75, "rgb(0, 255, 0)");
}
function  draw() {
	background("rgb(255, 255, 255)");
	display();
	if(isDragging){
		shadow(shape);
	}
}
function  mousePressed() {
	isDragging  =  true;
	shape  =  findShapeType(mouseX, mouseY);
}
function  mouseReleased() {
	drag(shape, mouseX, mouseY);
}
```

## License

This project is licensed under the MIT License - see the LICENSE.md file for details