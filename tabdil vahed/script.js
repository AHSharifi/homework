const input = document.getElementById("input");
const selectFirst = document.getElementById("first");
const selectSecond = document.getElementById("second");
const symbol = document.getElementById("symbol");
const button = document.getElementById("btn");
const result = document.getElementById("result");

function Tabdil(event) {
  event.preventDefault();
  const firstValue = selectFirst.value;
  const secondValue = selectSecond.value;
  var firstNumber = Number(input.value);
  var secondNumber = 1;
  var originalNumber = firstNumber;
  var firstExponent = 0;
  var secondExponent = 0;

  switch (firstValue) {
    case "P":
      firstNumber *= 1e15;
      firstExponent = 15;
      break;
    case "T":
      firstNumber *= 1e12;
      firstExponent = 12;
      break;
    case "G":
      firstNumber *= 1e9;
      firstExponent = 9;
      break;
    case "M":
      firstNumber *= 1e6;
      firstExponent = 6;
      break;
    case "K":
      firstNumber *= 1e3;
      firstExponent = 3;
      break;
    case "h":
      firstNumber *= 1e2;
      firstExponent = 2;
      break;
    case "da":
      firstNumber *= 10;
      firstExponent = 1;
      break;
    case "d":
      firstNumber /= 10;
      firstExponent = -1;
      break;
    case "c":
      firstNumber /= 100;
      firstExponent = -2;
      break;
    case "m":
      firstNumber /= 1e3;
      firstExponent = -3;
      break;
    case "µ":
      firstNumber /= 1e6;
      firstExponent = -6;
      break;
    case "n":
      firstNumber /= 1e9;
      firstExponent = -9;
      break;
    case "p":
      firstNumber /= 1e12;
      firstExponent = -12;
      break;
    case "f":
      firstNumber /= 1e15;
      firstExponent = -15;
      break;
    default:
      firstNumber *= 0;
      firstExponent = 0;
      break;
  }

  switch (secondValue) {
    case "P":
      secondNumber /= 1e15;
      secondExponent = 15;
      break;
    case "T":
      secondNumber /= 1e12;
      secondExponent = 12;
      break;
    case "G":
      secondNumber /= 1e9;
      secondExponent = 9;
      break;
    case "M":
      secondNumber /= 1e6;
      secondExponent = 6;
      break;
    case "K":
      secondNumber /= 1e3;
      secondExponent = 3;
      break;
    case "h":
      secondNumber /= 1e2;
      secondExponent = 2;
      break;
    case "da":
      secondNumber /= 10;
      secondExponent = 1;
      break;
    case "d":
      secondNumber *= 10;
      secondExponent = -1;
      break;
    case "c":
      secondNumber *= 100;
      secondExponent = -2;
      break;
    case "m":
      secondNumber *= 1e3;
      secondExponent = -3;
      break;
    case "µ":
      secondNumber *= 1e6;
      secondExponent = -6;
      break;
    case "n":
      secondNumber *= 1e9;
      secondExponent = -9;
      break;
    case "p":
      secondNumber *= 1e12;
      secondExponent = -12;
      break;
    case "f":
      secondNumber *= 1e15;
      secondExponent = -15;
      break;
    default:
      secondNumber *= 0;
      secondExponent = 0;
      break;
  }
  const number = firstNumber * secondNumber;
  const regularNumber = number.toFixed(20).replace(/\.?0+$/, "");

  result.innerHTML = `${originalNumber} × 10<sup>${firstExponent - secondExponent}</sup> = ${regularNumber} ${secondValue + symbol.value}`;
}

button.addEventListener("click", Tabdil);
