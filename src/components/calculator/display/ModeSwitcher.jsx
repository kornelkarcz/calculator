import {useContext} from "react";
import {ModeContext} from "../../../context/ModeContext.jsx";

const ModeSwitcher = () => {
  const {isCalculatorMode, switchToCalculator, switchToCurrencyExchange} = useContext(ModeContext);

  return (
    <div className="flex items-center">
      <p
        onClick={switchToCalculator}
        className={`m-2 cursor-pointer ${isCalculatorMode ? "font-normal underline text-blue-500" : "text-gray-600"}`}
      >
        Calculator
      </p>
      <p className="text-black">|</p>
      <p
        onClick={switchToCurrencyExchange}
        className={`m-2 cursor-pointer ${!isCalculatorMode ? "font-normal underline text-blue-500" : "text-gray-600"}`}
      >
        Exchange rate
      </p>
    </div>
  );
}

export default ModeSwitcher;
