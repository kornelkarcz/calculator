export const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
export const ZERO = "0"
export const DOUBLE_ZERO = "00";
export const OPERATORS = ["+", "-", "/", "*", "P"]
export const EQUALS = "=";
export const ALLOWED_LETTERS = ["P"]
export const CLEAR = "C";
export const DOT = ".";

export const CURRENCIES = ["USD", "CAD", "EUR", "JPY", "AUD"];
export const VALID_KEYS = NUMBERS.concat(
  ZERO,
  OPERATORS, EQUALS, CLEAR, ALLOWED_LETTERS, DOT, "Enter", "Backspace", "c", "p", ","
);

export const FETCH_RATES_API = "/api/rates";
export const POST_HISTORY = "/api/history";

export const initialFallbackRates = {
  USD: { EUR: 0.94, AUD: 1.56, CAD: 1.38, JPY: 154.525 },
  EUR: { USD: 1.07, AUD: 1.66, CAD: 1.47, JPY: 164.132 },
  AUD: { EUR: 0.61, USD: 0.64, CAD: 0.89, JPY: 99.0964 },
  CAD: { EUR: 0.68, USD: 0.72, AUD: 1.13, JPY: 111.885 },
  JPY: { EUR: 0.00609, USD: 0.00647, AUD: 0.01009, CAD: 0.00894 },
};
