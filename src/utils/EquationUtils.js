import { DOT, NUMBERS, ZERO } from "./Constants.js";

export const hasDot = (value) => {
  return value.includes(DOT);
}

export const startsWithZero = (value) => {
  return value.startsWith(ZERO);
}

export const canAddChar = (value) => {
  return value.length < 10 && (!startsWithZero(value) || (startsWithZero(value) && value.charAt(1) === DOT));
}

export const canRemoveChar = (value) => {
  return value.length > 0;
}

export const canAddZero = (value) => {
  return (value === '' || value === null
    || NUMBERS.includes(value.charAt(value.length - 1))
    || ZERO === value.charAt(value.length - 1)) && !startsWithZero(value);
}

export const canAddDot = (value) => {
  return !hasDot(value) && value.length > 0;
}


export const isOperatorPresent = (equation) => {
  return equation.operator !== '' && equation.operator !== null;
}

export const canBeEvaluated = (equation) => {
  return equation.secondOperand !== null || equation.secondOperand !== '';
}

export const evaluate = (equation) => {
  try {
    const operand1 = parseFloat(equation.firstOperand);
    const operand2 = parseFloat(equation.secondOperand);
    return parseFloat(calculate(operand1, operand2, equation.operator));
  } catch (e) {
    console.error(e);
  }

  return '';
}

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2
    case '-':
      return operand1 - operand2
    case '/':
      if (operand2 === '0') return 'Infinity'
      return operand1 / operand2
    case '*':
      return operand1 * operand2
    case 'P': {
      return findPrime(operand1, operand2);
    }
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

const findPrime = (num1, num2) => {
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  let maxPrime = NaN.toString();

  for (let i = end; i >= start; i--) {
    if (isPrime(i)) {
      maxPrime = i;
      break;
    }
  }

  return maxPrime;
}

export const print = (equation) => {
  if (equation.result) {
    return equation.firstOperand + equation.operator + equation.secondOperand + "=" + equation.result
  }
  return equation.firstOperand + equation.operator + equation.secondOperand;
}
