import { useContext, useCallback } from "react";
import { CalculationHistoryContext } from "../context/CalculationHistoryContext.jsx";
import { EquationInputContext } from "../context/EquationInputContext.jsx";
import { DOT, ZERO, OPERATORS } from "../utils/Constants.js";
import {
  canAddChar,
  canBeEvaluated,
  evaluate,
  hasDot,
  isOperatorPresent,
  print,
  startsWithZero
} from "../utils/EquationUtils.js";

const useEquationActions = () => {
  const { addToHistory } = useContext(CalculationHistoryContext);
  const { equation, setEquation, setIsTyping } = useContext(EquationInputContext);

  const addChar = useCallback((char) => {
    if (isOperatorPresent(equation)) {
      if (canAddChar(equation.secondOperand)) {
        setEquation((prevEquation) => ({
          ...prevEquation,
          secondOperand: prevEquation.secondOperand + char
        }));
      }
    } else {
      if (canAddChar(equation.firstOperand)) {
        setEquation((prevEquation) => ({
          ...prevEquation,
          firstOperand: prevEquation.firstOperand + char
        }));
      }
    }
  }, [equation, setEquation]);

  const deleteLastChar = () => {
    if (equation.operator !== '') {
      if (equation.secondOperand.length > 0) {
        setEquation((prevEquation) => ({
          ...prevEquation,
          secondOperand: prevEquation.secondOperand.slice(0, -1)
        }));
      } else {
        setEquation((prevEquation) => ({
          ...prevEquation,
          operator: ''
        }));
      }
    } else {
      if (equation.firstOperand.length > 0) {
        setEquation((prevEquation) => ({
          ...prevEquation,
          firstOperand: prevEquation.firstOperand.slice(0, -1)
        }));
      }
    }
  };

  const addOperator = (char) => {
    if (equation.firstOperand !== '') {
      setEquation((prevEquation) => ({
        ...prevEquation,
        operator: char
      }));
    }
  };

  const clearEquation = () => {
    setEquation({
      firstOperand: '',
      secondOperand: '',
      operator: '',
      result: ''
    });
  };

  const addDot = () => {
    if (isOperatorPresent(equation)) {
      if (hasDot(equation.secondOperand)) return;
      if (equation.secondOperand === "") return;
      setEquation((prevEquation) => ({
        ...prevEquation,
        secondOperand: prevEquation.secondOperand + DOT
      }));
    } else {
      if (hasDot(equation.firstOperand)) return;
      if (equation.firstOperand === "") return;
      setEquation((prevEquation) => ({
        ...prevEquation,
        firstOperand: prevEquation.firstOperand + DOT
      }));
    }
  };

  const addZero = () => {
    if (isOperatorPresent(equation)) {
      equation.secondOperand = startsWithZero(equation.secondOperand) ? equation.secondOperand : equation.secondOperand + ZERO;
    } else {
      equation.firstOperand = startsWithZero(equation.firstOperand) ? equation.firstOperand : equation.firstOperand + ZERO;
    }
  };

  const executeEvaluation = () => {
    if (!canBeEvaluated(equation)) return;
    const evaluation = evaluate(equation);
    setEquation((prevEquation) => ({
      ...prevEquation,
      result: evaluation
    }));
    addToHistory(print(equation), evaluation);
    setIsTyping(false);
    clearEquation();
  };

  return {
    addChar,
    addDot,
    addOperator,
    addZero,
    clearEquation,
    deleteLastChar,
    executeEvaluation
  };
};

export default useEquationActions;
