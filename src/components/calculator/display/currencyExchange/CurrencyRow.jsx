import CurrencySelector from "./CurrencySelector.jsx";
import CurrencyHolder from "./CurrencyHolder.jsx";

const CurrencyRow = ({ type, fromIsOpen, toIsOpen, onClick, value }) => {

  return (
    <div className="flex items-center justify-between">
      <CurrencySelector type={type} fromIsOpen={fromIsOpen} toIsOpen={toIsOpen} onClick={onClick}/>
      <div className="text-black">{`>`}</div>
      <CurrencyHolder type={type} value={value}/>
    </div>
  );
}

export default CurrencyRow;
