import { useContext } from "react";
import { InputContext } from "../../../../context/InputContext.jsx";
import { CalculationHistoryContext } from "../../../../context/CalculationHistoryContext.jsx";
import {print} from "../../../../utils/EquationUtils.js";

const EquationHolder = () => {
  const { equation, isTyping } = useContext(InputContext);
  const { lastResult } = useContext(CalculationHistoryContext)

  return (
    <div data-testid="equation-holder" className="text-right text-red-800">
      {isTyping ? print(equation) : lastResult}
    </div>
  );
}

export default EquationHolder;
