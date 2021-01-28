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

Circle.prototype.move = function () {
  console.log("move");
};

const circle = new Circle(10);
circle.draw();
circle.move();
