import { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [isCalculatorMode, setCalculatorMode] = useState(true);

  const switchToCalculator = () => {
    if (isCalculatorMode) return;
    console.log("Changing to calc")
    setCalculatorMode(true);
  }

  const switchToCurrencyExchange = () => {
    if (!isCalculatorMode) return;
    console.log("Changing to CE")
    setCalculatorMode(false);
  }

  return (
    <ModeContext.Provider
      value={{ isCalculatorMode, switchToCalculator, switchToCurrencyExchange }}>
      {children}
    </ModeContext.Provider>
  );
};
