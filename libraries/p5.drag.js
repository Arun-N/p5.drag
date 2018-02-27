//TODO: add support for other shapes --> rectangle
//TODO: make it possible to call createDraggable functions inside draw() --> prevent duplicates in object_list[]
//TODO: find a better way to handle undefined objects (i.e when user clicks outside the shapes)

var _id=0;
var object_list = [];    //Contains all the objects of draggable shapes currently in canvas 
var current_obj;         //Currently selected object (while dragging)
var Isdragging = false;  //Flag for checking if mouse is currently being dragged

//Generates javascript object for circle
p5.prototype.createDraggableCircle = function(x, y, rad, color) {
    
    this.id = _id++;
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.col = color;
    var obj = {
        type: "circle",
        id: this.id,
        x: this.x,
        y:this.y,
        rad: this.rad,
        col: this.col
    };
    object_list.push(obj);
}

//Generates javascript object for square
p5.prototype.createDraggableSquare = function(x, y, side, color) {
    
    this.id = _id++;
    this.x = x;
    this.y = y;
    this.side = side;
    this.col = color;
    var obj = {
        type: "square",
        id: this.id,
        x: this.x,
        y: this.y,
        side: this.side,
        col: this.col
    };
    object_list.push(obj);
}

//Generates javascript object for ellipse
p5.prototype.createDraggableEllipse = function(x, y, width, height, color) {
    
    this.id = _id++
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.col = color;
    var obj = {
        type: "ellipse",
        id: this.id,
        x: this.x,
        y: this.y,
        w: this.w,
        h: this.h,
        col: this.col
    };
    object_list.push(obj);
}

//Renders all the shapes currently in the object_list array
//Needs to be called in draw()
p5.prototype.display = function () {

    object_list.forEach(shape => {
        if(shape.type == "circle"){
            fill(shape.col);
            ellipse(shape.x, shape.y, shape.rad, shape.rad);
        }
        else if(shape.type == "square"){
            fill(shape.col);
            rect(shape.x, shape.y, shape.side, shape.side);
        }
        else if(shape.type == "ellipse"){
            fill(shape.col);
            ellipse(shape.x, shape.y, shape.w, shape.h);
        }
    });
}

//Retrieves the object of the current shape on which mouse was clicked
//Gets called when mouse is clicked OR at start of dragging
p5.prototype.getCurrentObj = function() {

    for(let i=0; i<object_list.length; i++){
        
        if(object_list[i].type == "circle"){
            var d = dist(object_list[i].x, object_list[i].y, mouseX, mouseY);
            if(d <= object_list[i].rad){
                Isdragging = true;
                return object_list[i];
            }
        }
        else if(object_list[i].type == "square"){
            var d = dist(object_list[i].x + (object_list[i].side/2), object_list[i].y + (object_list[i].side/2), mouseX, mouseY);
            if(d <= object_list[i].side/2){
                Isdragging = true;
                return object_list[i];
            }
        }
        else if(object_list[i].type == "ellipse"){
            var d = dist(object_list[i].x, object_list[i].y, mouseX, mouseY);
            if(d <= object_list[i].h/2){
                Isdragging = true;
                return object_list[i];
            }
        }
        else return "NaN";
    }
}

//Calculates the new position for the shape which is being dragged
//Gets called when mouse is released OR at end of dragging
p5.prototype.drag = function(current_obj) {

    Isdragging = false;

    this.current_obj = current_obj;
    var index = object_list.indexOf(current_obj);
    if(index > -1){
        object_list.splice(index, 1);
    }

    if(this.current_obj.type == "circle"){
        var repositioned_obj = {
            type: this.current_obj.type,
            id: this.current_obj.id,
            x: mouseX,
            y: mouseY,
            rad: this.current_obj.rad,
            col: this.current_obj.col
        };
        object_list.push(repositioned_obj);
    }
    else if(this.current_obj.type == "square"){
        var repositioned_obj = {
            type: this.current_obj.type,
            id: this.current_obj.id,
            x: mouseX - this.current_obj.side/2,    //TODO: check if object goes out of canvas bounds
            y: mouseY - this.current_obj.side/2,
            side: this.current_obj.side,
            col: this.current_obj.col
        };
        object_list.push(repositioned_obj);
    }
    else if(this.current_obj.type == "ellipse"){
        var repositioned_obj = {
            type: this.current_obj.type,
            id: this.current_obj.id,
            x: mouseX,
            y:mouseY,
            w: this.current_obj.w,
            h: this.current_obj.h,
            col: this.current_obj.col
        };
        object_list.push(repositioned_obj);
    }
}

//Creates a shadow of the object (currently being dragged) under the cursor
//Needs to be called in draw() after display()
p5.prototype.drawShadow = function(current_obj) {
    this.current_obj = current_obj;
    push();
    fill('rgba(220, 222, 226, 0.30)');
    if(this.current_obj.type == "circle"){
        ellipse(mouseX, mouseY, this.current_obj.rad, this.current_obj.rad);
    }
    if(this.current_obj.type == "square"){
        rect(mouseX-this.current_obj.side/2, mouseY-this.current_obj.side/2, this.current_obj.side, this.current_obj.side);
    }
    if(this.current_obj.type == "ellipse"){
        ellipse(mouseX, mouseY, this.current_obj.w, this.current_obj.h);
    }
    pop();
}