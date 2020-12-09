'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElement = function () {
  let newElement;

  if (this.selector[0] === '.') {
    newElement = document.createElement('div');
    newElement.className = this.selector.substring(1);
  } else if (this.selector[0] === '#') {
    newElement = document.createElement('p');
    newElement.id = this.selector.substring(1);
  }
  newElement.innerHTML = 'Классная штука - конструкторы!';
  newElement.style.cssText = `height: ${this.height};
    background-color: ${this.bg};
    width: ${this.width};
    font-size: ${this.fontSize};
  `;
  document.body.appendChild(newElement);
};

const firstElement = new DomElement('.first', '100px', '100px', 'red', '16px');

document.addEventListener('DOMContentLoaded', function () {
  firstElement.createElement();

  let square = document.querySelector('.first');
  square.style.position = 'absolute';

  const moveSquare = function (e) {
    let squareStyle = window.getComputedStyle(square);
    let left = parseInt(squareStyle.left);
    let top = parseInt(squareStyle.top);

    switch (e.keyCode) {
      case 37: // если нажата клавиша влево
        square.style.left = left - 10 + 'px';
        break;
      case 38: // если нажата клавиша вверх
        square.style.top = top - 10 + 'px';
        break;
      case 39: // если нажата клавиша вправо
        square.style.left = left + 10 + 'px';
        break;
      case 40: // если нажата клавиша вниз
        square.style.top = top + 10 + 'px';
        break;
    }
  };
  addEventListener('keydown', moveSquare);
});
