'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElement = function () {
  let element = '',
    newElement;

  if (this.selector[0] === '.') {
    element = 'div';
    newElement = document.createElement(element);
    newElement.className = this.selector.substring(1);
  } else if (this.selector[0] === '#') {
    element = 'p';
    newElement = document.createElement(element);
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

const firstElement = new DomElement('#first', '100px', '100px', 'red', '16px');

firstElement.createElement();
