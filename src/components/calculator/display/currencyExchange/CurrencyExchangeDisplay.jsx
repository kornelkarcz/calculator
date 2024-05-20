import { useContext, useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow.jsx";
import { CurrencyInputContext } from "../../../../context/CurrencyInputContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import useRates from "../../../../hooks/useRates.jsx";

const CurrencyExchangeDisplay = () => {
  const { fromCurrency, toCurrency } = useContext(CurrencyInputContext);
  const { exchange } = useContext(CurrencyInputContext);

  const { rates, fetchRates, lastUpdated, currentTime } = useRates();

  const [fromCurrencyOpen, setFromCurrencyOpen] = useState(false);
  const [toCurrencyOpen, setToCurrencyOpen] = useState(false);
  const [calculatedToCurrency, setCalculatedToCurrency] = useState('');

  useEffect(() => {
    if (rates) {
      const rate = fromCurrency === toCurrency ? 1 : rates[fromCurrency][toCurrency];
      const calculatedValue = exchange?.fromCurrency ? exchange.fromCurrency * rate : 0;
      setCalculatedToCurrency('' + calculatedValue);
    }
  }, [rates, fromCurrency, toCurrency, exchange]);

  const handleFromCurrencyOpenClick = () => {
    if (toCurrencyOpen) {
      setToCurrencyOpen(false);
    }
    setFromCurrencyOpen(!fromCurrencyOpen);
  }

  const handleToCurrencyOpenClick = () => {
    if (fromCurrencyOpen) {
      setFromCurrencyOpen(false)
    }
    setToCurrencyOpen(!toCurrencyOpen)
  }

  const formatUpdateInfoMessage = (timeStamp) => {
    if (!timeStamp) return "Updated yesterday";
    const diff = currentTime - timeStamp;
    const minutes = Math.floor(diff / 60000);

    return minutes < 1
      ? `Last updated seconds ago`
      : `Last updated ${minutes} mins ago`
  };

  return (
    <div data-testid="currency-exchange-display" className="h-full">
      <div className="flex flex-col h-full">
        <CurrencyRow onClick={handleFromCurrencyOpenClick}
                     type="from"
                     fromIsOpen={fromCurrencyOpen}
                     toIsOpen={toCurrencyOpen}
                     value={exchange?.fromCurrency}
        />
        <CurrencyRow onClick={handleToCurrencyOpenClick}
                     type="to"
                     fromIsOpen={fromCurrencyOpen}
                     toIsOpen={toCurrencyOpen}
                     value={
                       calculatedToCurrency === '0'
                         ? ''
                         : calculatedToCurrency.substring(0, 11)}
        />
        <div
          className="text-black text-sm text-center cursor-pointer mt-16 w-full flex items-center justify-center"
          onClick={fetchRates}>
          {lastUpdated
            ? <div>{formatUpdateInfoMessage(lastUpdated)}</div>
            : <div>Updated yesterday </div>}
          <FontAwesomeIcon icon={faClockRotateLeft} className="ml-1"/>
        </div>
      </div>
    </div>
  );
}

export default CurrencyExchangeDisplay;
