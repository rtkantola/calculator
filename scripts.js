let firstNumber = "";
let secondNumber = "";
let isFirstSelected = false;
let operator;
let result = "";
const operatorSigns = ["+", "-", "/", "*"];
const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");
const operators = document.querySelector("#operators");

for (i = 0; i < 4; i++) {
  const operator = document.createElement("button");
  operator.className = "operatorButton";
  operator.textContent = operatorSigns[i];
  operators.appendChild(operator);
}

for (i = 0; i < 12; i++) {
  const button = document.createElement("button");
  if (i < 10) {
    button.textContent = i;
  } else if (i < 11) {
    button.textContent = "AC";
  } else {
    button.textContent = "=";
  }
  button.className = "button";
  buttons.appendChild(button);
}

const add = (a, b) => parseInt(a) + parseInt(b);
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (first, second, operator) => {
  if (operator === "+") {
    return add(first, second);
  }
  if (operator === "-") {
    return subtract(first, second);
  }
  if (operator === "/") {
    return divide(first, second);
  }
  if (operator === "*") {
    return multiply(first, second);
  }
};
let resetState = () => {
  display.textContent = "";
  firstNumber = "";
  secondNumber = "";
  isFirstSelected = false;
  result = "";
};
// eventListeners
buttons.childNodes.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.textContent === "AC") {
      resetState();
    } else if (e.textContent === "=" && result != "") {
      result = operate(result, secondNumber, operator);
      display.textContent = result;
      secondNumber = "";
    } else if (e.textContent === "=") {
      result = operate(firstNumber, secondNumber, operator);
      display.textContent = result;
      secondNumber = "";
    } else {
      display.textContent += e.textContent;
      if (!isFirstSelected) {
        firstNumber += e.textContent;
      
      } else {
        secondNumber += e.textContent;
        display.textContent = secondNumber;
      }
    }
  });
});
operators.childNodes.forEach((e) => {
  e.addEventListener("click", () => {
    display.textContent = e.textContent;
    operator = e.textContent;
    isFirstSelected = true;
  });
});
