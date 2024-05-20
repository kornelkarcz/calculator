import { createContext, useEffect, useState } from "react";

export const CalculationHistoryContext = createContext();

export const CalculationHistoryProvider = ({ children }) => {
  const [lastResult, setLastResult] = useState('')
  const [historyArray, setHistoryArray] = useState([]);

  const addToHistory = (equation, result) => {
    setHistoryArray(prevHistoryArray => [...prevHistoryArray, equation+ "=" + result]);
    setLastResult(result);
  }

  useEffect(() => {
    // console.log("Updated history: " + historyArray);
  }, [historyArray]);

  return (
    <CalculationHistoryContext.Provider value={{ lastResult, historyArray, addToHistory, setLastResult }}>
      {children}
    </CalculationHistoryContext.Provider>
  );
}
