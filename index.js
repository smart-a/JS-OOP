function Shape() {}

function Circle(radius) {
  this.radius = radius;

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

const c = new Circle(10);
c.draw();
c.move();
