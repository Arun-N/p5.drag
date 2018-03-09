var shapes = [];

p5.prototype.createEllipse = function (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    var ellipse_obj = {
        type: width==height ? "circle" : "ellipse",
        x: this.x,
        y: this.y,
        w: width,
        h: height,
        center: [this.x, this.y],
        col: color
    };
    shapes.push(ellipse_obj);
}

p5.prototype.createRect = function (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    var rect_obj = {
        type : width==height ? "square" : "rectangle",
        x: this.x,
        y: this.y,
        w: width,
        h: height,
        center: [this.x+width/2, this.y+height/2],
        col: color
    };
    shapes.push(rect_obj);
}

p5.prototype.display = function () {
    for(var i=0; i<shapes.length; i++){
        if(shapes[i].type == "circle" || shapes[i].type == "ellipse"){
            fill(shapes[i].col);
            ellipse(shapes[i].x, shapes[i].y, shapes[i].w, shapes[i].h);
        }
        else if(shapes[i].type == "square" || shapes[i].type == "rectangle"){
            fill(shapes[i].col);
            rect(shapes[i].x, shapes[i].y, shapes[i].w, shapes[i].h);
        }
    }
}

p5.prototype.recognizeShape = function(mx, my) {
    var mini = Infinity;
    var mini_dist_obj;
    for(var i=0; i<shapes.length; i++){
        var d = dist(shapes[i].center[0], shapes[i].center[1], mx, my);
        if(d <= mini){
            mini = d;
            mini_dist_obj = shapes[i];
        }
    }

    if(mini_dist_obj != undefined){
        if(mini_dist_obj.type == "circle"){
            var radius = mini_dist_obj.w/2;
            if(dist(mx, my, mini_dist_obj.x, mini_dist_obj.y) <= radius){
                return ["circle", mini_dist_obj];
            }
            else{
                return "background";
            }
        }
        else if(mini_dist_obj.type == "ellipse"){
            if((abs(mx - mini_dist_obj.x) <= mini_dist_obj.w/2) && (abs(my - mini_dist_obj.y) <= mini_dist_obj.h/2)){
                return ["ellipse", mini_dist_obj];
            }
            else{
                return "background";
            }
        }
        else if(mini_dist_obj.type == "rectangle"){
            if((abs(mx - mini_dist_obj.center[0]) <= mini_dist_obj.w/2) && (abs(my - mini_dist_obj.center[1]) <= mini_dist_obj.h/2)){
                return ["rectangle", mini_dist_obj];
            }
            else{
                return "background";
            }
        }
        else if(mini_dist_obj.type == "square"){
            if((abs(mx - mini_dist_obj.center[0]) <= mini_dist_obj.w/2) && (abs(my - mini_dist_obj.center[1]) <= mini_dist_obj.h/2)){
                return ["square", mini_dist_obj];
            }
            else{
                return "background";
            }
        }
    }
    else return "background";
}