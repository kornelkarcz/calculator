import React from "react";
import ModeSwitcher from "./ModeSwitcher.jsx";
import EquationHolder from "./math/EquationHolder.jsx";
import EquationHistoryHolder from "./math/EquationHistoryHolder.jsx";
import { useContext } from "react";
import { ModeContext } from "../../../context/ModeContext.jsx";
import CurrencyExchangeDisplay from "./currencyExchange/CurrencyExchangeDisplay.jsx";

const Display = () => {
  const { isCalculatorMode } = useContext(ModeContext)

  return (
    <div data-testid="display-1" className="flex flex-col justify-between bg-gray-200 h-64 p-4 rounded-2xl">
      <div className="flex justify-center mb-4">
        <ModeSwitcher/>
      </div>
      {isCalculatorMode
        ? <div className="flex flex-col items-end w-full">
          <EquationHistoryHolder/>
          <EquationHolder/>
        </div>
        : <CurrencyExchangeDisplay />
      }
    </div>
  )
}

export default Display;
