import React, { useState } from "react";
import CalculatorComponent from "./components/calculator/CalculatorComponent.jsx";
import { ModeProvider } from "./context/ModeContext.jsx";
import { EquationInputProvider } from "./context/EquationInputContext.jsx";
import { CalculationHistoryProvider } from "./context/CalculationHistoryContext.jsx";
import { CurrencyInputProvider } from "./context/CurrencyInputContext.jsx";

function App() {

  const [input1, setInput1] = useState("");
  ``
  const [input2, setInput2] = useState("");
  const [data, setData] = useState();

  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handlePostRequest = () => {
    fetch("/api/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input1, input2 }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleGetRequest = (e) => {
    fetch("/api/" + e.currentTarget.name)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  return (
    <ModeProvider>
      <CalculationHistoryProvider>
        <CurrencyInputProvider>
          <EquationInputProvider>
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
              <div className="bg-white rounded-3xl shadow-lg w-full max-w-72">
                <CalculatorComponent/>
              </div>
            </div>
          </EquationInputProvider>
        </CurrencyInputProvider>
      </CalculationHistoryProvider>
    </ModeProvider>
  );
}

export default App;
