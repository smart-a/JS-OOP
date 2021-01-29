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
}

HtmlSelectElement.prototype = new HtmlElement();

const h = new HtmlElement();
const hs = new HtmlSelectElement();
