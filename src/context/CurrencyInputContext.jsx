import { createContext, useState } from "react";

export const CurrencyInputContext = createContext();

export const CurrencyInputProvider = ({ children }) => {
  const [exchange, setExchange] = useState({ fromCurrency: '' });
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

  return (
    <CurrencyInputContext.Provider
      value={{ exchange, setExchange, toCurrency, setToCurrency, fromCurrency, setFromCurrency }}>
      {children}
    </CurrencyInputContext.Provider>);
}
