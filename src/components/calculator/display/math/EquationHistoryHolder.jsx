import { useContext } from "react";
import { CalculationHistoryContext } from "../../../../context/CalculationHistoryContext.jsx";
import { EquationInputContext } from "../../../../context/EquationInputContext.jsx";

const EquationHistoryHolder = () => {
  const { isTyping } = useContext(EquationInputContext);
  const { historyArray } = useContext(CalculationHistoryContext);

  return (
    <div data-testid="equation-history-holder">
      {
        isTyping ?
          historyArray?.map((history, index) => (
            <div key={index} className="text-black text-right">
              {history}
            </div>
          ))
          :
          historyArray?.slice(0, -1).map((history, index) => (
            <div key={index} className="text-black text-right">
              {history}
            </div>
          ))
      }
    </div>
  );
}

export default EquationHistoryHolder;
