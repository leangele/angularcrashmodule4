var Point = (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //. more and more
    };
    return Point;
}());
var point = new Point();
point.x = 5;
point.y = 100;
point.draw();
