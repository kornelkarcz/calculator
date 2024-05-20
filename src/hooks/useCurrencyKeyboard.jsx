import { useContext, useEffect } from "react";
import { ModeContext } from "../context/ModeContext.jsx";
import { VALID_KEYS, ZERO } from "../utils/Constants.js";
import useExchangeActions from "./useExchangeActions";
import { CurrencyInputContext } from "../context/CurrencyInputContext.jsx";

const useCurrencyKeyboard = () => {
  const { isCalculatorMode } = useContext(ModeContext);
  const { exchange } = useContext(CurrencyInputContext);
  const { clear, addChar, addZero, addDot, deleteLastChar } = useExchangeActions();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isCalculatorMode) return;
      const { key } = e;
      if (!VALID_KEYS.includes(key)) return;
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
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [exchange, isCalculatorMode, clear, addChar, addZero, addDot, deleteLastChar]);

  useEffect(() => {
    console.log('fromCurrency changed:', exchange.fromCurrency);
  }, [exchange.fromCurrency]);

  return { clear, addChar, addZero, addDot, deleteLastChar };
}

export default useCurrencyKeyboard;
