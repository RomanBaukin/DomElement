'use strict';

const DomElement = function () {
  this.selector = '';
  this.height = '';
  this.width = '';
  this.bg = '';
  this.fontSize = '';
};

DomElement.prototype.createElement = function () {
  let element = '';

  if (this.selector[0] === '.') {
    element = 'div';
  } else if (this.selector[0] === '#') {
    element = 'p';
  }
  const newElement = document.createElement(element);
  newElement.className = this.selector.substring(1);
  newElement.innerHTML = 'Привет, Александр! А мы вот тут классами балуемся!';
  newElement.style.cssText = `height: ${this.height};
    background-color: ${this.bg};
    width: ${this.width};
    font-size: ${this.fontSize};
  `;
  document.body.appendChild(newElement);
};

const firstElement = new DomElement();

firstElement.selector = '#first';
firstElement.height = '200px';
firstElement.width = '200px';
firstElement.bg = 'green';
firstElement.fontSize = '16px';

firstElement.createElement();
