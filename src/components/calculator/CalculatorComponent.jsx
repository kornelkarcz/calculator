import Display from "./display/Display.jsx";
import Keyboard from "./keyboard/Keyboard.jsx";
import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext.jsx";
import CurrencyKeyboard from "./keyboard/CurrencyKeyboard.jsx";

const CalculatorComponent = () => {

  const { isCalculatorMode } = useContext(ModeContext);

  return (
    <div>
      <div className="flex-row bg-gray-200 rounded-2xl">
        <Display/>
        {
          isCalculatorMode
            ? <Keyboard/>
            : <CurrencyKeyboard/>
        }
      </div>
    </div>
  );

}

export default CalculatorComponent;
