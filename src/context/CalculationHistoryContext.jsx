import { createContext, useEffect, useState } from "react";
import useHistory from "../hooks/useHistory.jsx";
import { print} from "../utils/EquationUtils.js";

export const CalculationHistoryContext = createContext();

export const CalculationHistoryProvider = ({ children }) => {
  const [lastResult, setLastResult] = useState('')
  const [historyArray, setHistoryArray] = useState([]);
  const { postHistory } = useHistory();

  const addToHistory = (equation, result) => {
    setHistoryArray(prevHistoryArray => [...prevHistoryArray, print(equation) + "=" + result]);
    setLastResult(result);
    postHistory({ ...equation });
  }



  return (
    <CalculationHistoryContext.Provider value={{ lastResult, historyArray, addToHistory, setLastResult }}>
      {children}
    </CalculationHistoryContext.Provider>
  );
}
