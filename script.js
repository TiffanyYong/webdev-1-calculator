let button;
let screen;
let variableOne;
let variableTwo;

function handleLoad() {
  console.log('Hello from handleLoad()');
  // document object is representation of the HTML document as an object in javascript
  // This is called the DOM (Document Object Model)
  zero = document.getElementById('zero-button');
  plus = document.getElementById('plus-button');
  equal = document.getElementById('equal-button');
  // button is an HTMLElement object

  screen = document.getElementById('screen');
  // paragraph an HTMLElement object

  zero.addEventListener('click', zeroClick);
  plus.addEventListener('click', plusClick);
  equal.addEventListener('click', equalClick);
  for (let i = 1; i < 10; i++) {
    eventHandlerCreator(i)
  }
}

function eventHandlerCreator(i) {
  buttonVar = document.getElementById(i + '-button');
  buttonVar.addEventListener('click', function() {
    previousText = screen.textContent;
    if (previousText == '0') {
      screen.textContent = i;
    } else {
      screen.textContent = previousText + i;
    }
  });
}

function zeroClick() {
  previousText = screen.textContent;
  if (previousText == '0') {
    screen.textContent = '0';
  } else {
    screen.textContent = previousText + '0';
  }
}

function plusClick() {
  previousText = screen.textContent;
  variableOne = parseInt(previousText)
  screen.textContent = '0';
}

function equalClick() {
  if (variableOne == 'clear') {
    screen.textContent = '0'
    variableOne = 0
    variableTwo = 0
  }
  variableTwo = parseInt(screen.textContent);
  // parseInt();
  screen.textContent = variableOne + variableTwo
  variableOne = 'clear'
}

// window and document: built-in objects in javascript
// it's like built-in functions (print) in python, they just happen to be objects instead of classes or functions.

window.addEventListener('load', handleLoad);
console.log('Hello from script.js');
