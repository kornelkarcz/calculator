import { useContext } from "react";
import { CurrencyInputContext } from "../context/CurrencyInputContext.jsx";
import { DOT, ZERO } from "../utils/Constants.js";
import {
  canAddChar,
  canAddDot,
  canAddZero,
  canRemoveChar,
  startsWithZero
} from "../utils/EquationUtils.js";

const useExchangeActions = () => {
  const { exchange, setExchange } = useContext(CurrencyInputContext);

  const clear = () => {
    setExchange({ fromCurrency: '' });
  };

  const addChar = (char) => {
    if (!canAddChar(exchange.fromCurrency) || startsWithZero(exchange.fromCurrency)) return;
    setExchange(prevChange => ({
      fromCurrency: prevChange.fromCurrency + char,
    }));
  };

  const addZero = () => {
    if (canAddZero(exchange.fromCurrency)) {
      setExchange((prevExchange) => ({
        ...prevExchange,
        fromCurrency: prevExchange.fromCurrency + ZERO
      }));
    }
  };

  const addDot = () => {
    if (canAddDot(exchange.fromCurrency)) {
      setExchange((prevExchange) => ({
        ...prevExchange,
        fromCurrency: prevExchange.fromCurrency + DOT
      }));
    }
  };

  const deleteLastChar = () => {
    if (canRemoveChar(exchange.fromCurrency)) {
      setExchange((prevExchange) => ({
        ...prevExchange,
        fromCurrency: exchange.fromCurrency.slice(0, -1)
      }));
    }
  };

  return { clear, addChar, addZero, addDot, deleteLastChar };
};

export default useExchangeActions;
