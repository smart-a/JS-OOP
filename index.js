function Shape(color) {
  this.color = color;
}

function Circle(radius, color) {
  this.radius = radius;
  Shape.call(this, color);

  let defualtLocation = { x: 0, y: 0 };

  this.getLocation = function () {
    return defualtLocation;
  };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defualtLocation;
    },
    set: function (value) {
      defualtLocation = value;
    },
  });
}

Shape.prototype.move = function () {
  console.log("move");
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const c = new Circle(1, "blue");
c.draw();
c.move();
