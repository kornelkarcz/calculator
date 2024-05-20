import { useContext, useEffect } from "react";
import { ModeContext } from "../context/ModeContext.jsx";
import { DOT, VALID_KEYS, ZERO } from "../utils/Constants.js";
import {
  canAddChar,
  canAddDot,
  canAddZero,
  canRemoveChar,
  startsWithZero
} from "../utils/EquationUtils.js";
import { CurrencyInputContext } from "../context/CurrencyInputContext.jsx";

const useCurrencyKeyboard = () => {
  const { isCalculatorMode } = useContext(ModeContext);
  const { exchange, setExchange } = useContext(CurrencyInputContext);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isCalculatorMode) {
        const { key } = e;
        if (VALID_KEYS.includes(key)) {
          if (key === "Backspace") {
            deleteLastChar();
          } else if (key === ZERO) {
            addZero();
          } else if (key === "," || key === ".") {
            addDot();
          } else if (key === "c" || key === "C") {
            clear()
          } else {
            addChar(key);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [exchange, isCalculatorMode]);

  useEffect(() => {
    console.log('fromCurrency changed:', exchange.fromCurrency);
  }, [exchange.fromCurrency]);

  const clear = () => {
    setExchange({ fromCurrency: '0' })
  }

  const addChar = (char) => {
    if (!canAddChar(exchange.fromCurrency) || startsWithZero(exchange.fromCurrency)) return;
    setExchange(prevChange => ({
      fromCurrency: prevChange.fromCurrency + char,
    }))
  }

  const addZero = () => {
    if (canAddZero(exchange.fromCurrency)) {
      setExchange((prevExchange) => prevExchange.fromCurrency += ZERO);
    }
  }

  const addDot = () => {
    if (canAddDot(exchange.fromCurrency)) {
      setExchange((prevExchange) => ({
        fromCurrency: prevExchange.fromCurrency + DOT
      }));
    }
  }

  const deleteLastChar = () => {
    if (canRemoveChar(exchange.fromCurrency)) {
      setExchange((prevExchange) => ({
        ...prevExchange,
        fromCurrency: exchange.fromCurrency.slice(0, -1)
      }));
    }
  }

  return { clear, addChar, addZero, addDot, deleteLastChar };
}

export default useCurrencyKeyboard;
