import { useContext, useEffect } from "react";
import { CalculationHistoryContext } from "../context/CalculationHistoryContext.jsx";
import { ModeContext } from "../context/ModeContext.jsx";
import { OPERATORS, VALID_KEYS } from "../utils/Constants.js";
import { InputContext } from "../context/InputContext.jsx";
import useEquationActions from "./useEquationActions.jsx";

const useKeyboard = () => {
  const { isCalculatorMode } = useContext(ModeContext);
  const { equation, setEquation, _, setIsTyping } = useContext(InputContext);

  const {
    addChar,
    addDot,
    addOperator,
    addZero,
    clearEquation,
    deleteLastChar,
    executeEvaluation
  } = useEquationActions();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isCalculatorMode) return;
      const { key } = e;
      if (!VALID_KEYS.includes(key)) return;
      if (key === "Enter" || key === '=') {
        executeEvaluation();
      } else if (key === "Backspace") {
        deleteLastChar();
      } else if (key === "," || key === ".") {
        setIsTyping(true);
        addDot();
      } else if (key === "c" || key === "C") {
        clearEquation();
      } else if (OPERATORS.includes(key)) {
        addOperator(key);
      } else {
        setIsTyping(true);
        addChar(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [equation, isCalculatorMode, addChar, addZero, addDot, addOperator, clearEquation, deleteLastChar, executeEvaluation]);

  useEffect(() => {
  }, [equation]);

  return {
    addChar,
    addDot,
    addOperator,
    addZero,
    clearEquation,
    deleteLastChar,
    executeEvaluation
  };
}

export default useKeyboard;
