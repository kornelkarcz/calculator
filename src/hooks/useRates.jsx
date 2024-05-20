import { useEffect, useState } from "react";
import { FETCH_RATES_API, initialFallbackRates } from "../utils/Constants.js";

const useRates = () => {
  const [rates, setRates] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const fetchRates = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(FETCH_RATES_API);
      if (!response.ok) {
        throw new Error('Failed to fetch rates');
      }
      const data = await response.json();
      setRates(data);
      setLastUpdated(Date.now());
      setError(null);
    } catch (err) {
      setError(err.message);
      setRates(initialFallbackRates);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
    const intervalId = setInterval(fetchRates, 120000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updateCurrentTime = () => setCurrentTime(Date.now());
    const intervalId = setInterval(updateCurrentTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return { rates, fetchRates, lastUpdated, currentTime };
}

export default useRates;
