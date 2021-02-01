class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {
      console.log("move");
    };
  }

  draw() {
    console.log("draw");
  }

  //Static function
  static log(value) {
    console.log(value);
  }
}

//Object of a class
const c = new Circle(2);

//Calling static function
Circle.log("Circle");
