//Super/ Base class
class Shape {
  constructor(color) {
    this.color = color;
  }
  moveByShape() {
    console.log("move shape");
  }
}

// Circle class inherit from Shape class
class Circle extends Shape {
  constructor(radius, color) {
    //Passing argument to the super class constructor
    super(color);

    this.radius = radius;
    this.move = function () {
      console.log("move circle");
    };
  }

  draw() {
    //calling a method in from the base class
    super.moveByShape();
    console.log("draw");
  }

  //Static function
  static log(value) {
    console.log(value);
  }
}

//Object of a class
const c = new Circle(2, "red");

//Calling static function
Circle.log("Circle");

// Exercise
// Stack and operations (Push, Peek and Pop)
let stackArray = new WeakMap();
class Stack {
  constructor() {
    stackArray = [];
  }

  get count() {
    return stackArray.length;
  }

  push(value) {
    stackArray.push(value);
  }

  peek() {
    if (stackArray.length < 1) throw new Error("Stack is empty");
    return stackArray[stackArray.length - 1];
  }

  pop() {
    if (stackArray.length < 1) throw new Error("Stack is empty");
    return stackArray.pop();
  }
}

const s = new Stack();
