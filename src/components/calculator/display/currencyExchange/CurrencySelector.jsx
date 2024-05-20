import { CURRENCIES } from "../../../../utils/Constants.js";
import { useContext, useEffect, useState } from "react";
import { CurrencyInputContext } from "../../../../context/CurrencyInputContext.jsx";

const CurrencySelector = ({ type, fromIsOpen, toIsOpen, onClick }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(type === 'from' ? 'USD' : 'EUR');

  const { setFromCurrency, setToCurrency } = useContext(CurrencyInputContext);

  const open = type === 'from' ? fromIsOpen : toIsOpen;

  const handleCurrencySelection = (currency) => {
    setSelectedCurrency(currency);
    if (type === 'from') {
      setFromCurrency(currency);
    } else {
      setToCurrency(currency);
    }
  }

  useEffect(() => {
    handleCurrencySelection(selectedCurrency);
  }, []);

  return (
    <div className="relative w-full">
      <div
        onClick={onClick}
        className="text-black text-lg w-full p-2 flex items-start justify-start cursor-pointer">
        {selectedCurrency}
      </div>
      <ul
        className={`absolute left-0 top-full w-16 bg-gray-200 text-black rounded-2xl overflow-y-auto transition-max-height duration-300 ease-in-out ${open ? 'max-h-64' : 'max-h-0'} z-50`}
      >
        {CURRENCIES.map((currency, index) => (
          <li
            onClick={() => {
              handleCurrencySelection(currency);
              onClick();
            }}
            key={index}
            className="p-2 text-sm  hover:font-bold cursor-pointer w-16">{currency}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CurrencySelector;
