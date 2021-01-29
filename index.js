// Javacript Object

// Super or Parent Constructor
function Shape(color) {
  this.color = color;
}

// Prototype method
Shape.prototype.move = function () {
  console.log("move");
};

// Intermediate function inheritance
function extend(Parent, Child) {
  // Inherite from Shape object
  Child.prototype = Object.create(Parent.prototype);

  // Restting contructor
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  this.radius = radius;

  // Calling super constructor arg (Shape constructor)
  Shape.call(this, color);

  let defualtLocation = { x: 0, y: 0 };

  this.getLocation = function () {
    return defualtLocation;
  };

  // Configure variable with setter and getter
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defualtLocation;
    },
    set: function (value) {
      defualtLocation = value;
    },
  });
}

function Square() {}

// Circle extend Shape object
extend(Shape, Circle);
// Prototype Method overriding
Circle.prototype.move = function () {
  console.log("move circle here");
};

// Square extend Shape object
extend(Shape, Square);
// Prototype Method overriding
Square.prototype.move = function () {
  console.log("move square here");
};

// Array of object
const shapes = [new Circle(), new Square()];

const objs = [
  {
    name: "Adesoye",
    age: 56,
    do: function () {
      console.log("My name:", this.name);
    },
  },
  {
    name: "Abeeb",
    age: 29,
    do: function () {
      console.log("My name:", this.name);
    },
  },
];

// Object itration => Object Polymorphism (Many form)
for (let shape of shapes) console.log(shape.move());
// Object itration (Array of object)
for (let obj of objs) console.log(obj);

// Object inheritance with attributes
const canEat = {
  eat: function () {
    console.log("Eating...");
  },
};

const canWalk = {
  walk: function () {
    console.log("Walking...");
  },
};

const canSwim = {
  swim: function () {
    console.log("Swimming...");
  },
};

function Mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

function Person() {}
Mixin(Person, canEat, canWalk, canSwim);

function Fish() {}
Mixin(Fish, canEat, canSwim);

const person = new Person();
const fish = new Fish();
