import { useContext } from "react";
import { EquationInputContext } from "../../../../context/EquationInputContext.jsx";
import { CalculationHistoryContext } from "../../../../context/CalculationHistoryContext.jsx";
import {print} from "../../../../utils/EquationUtils.js";

const EquationHolder = () => {
  const { equation, isTyping } = useContext(EquationInputContext);
  const { lastResult } = useContext(CalculationHistoryContext)

  return (
    <div data-testid="equation-holder" className="text-right text-black">
      {isTyping ? print(equation) : lastResult}
    </div>
  );
}

export default EquationHolder;
