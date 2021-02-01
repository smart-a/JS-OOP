function HtmlElement() {
  this.click = function () {
    console.log("Clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  };

  this.render = function () {
    return `
<select>${this.items
      .map(
        (item) => ` 
    <option>${item}<option/>`
      )
      .join("")}
<select/>`;
  };
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://"),
];

for (let obj of elements) console.log(obj.render());