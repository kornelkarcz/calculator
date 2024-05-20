  import { createContext, useState } from "react";

  export const EquationInputContext = createContext();

  export const EquationInputProvider = ({ children }) => {
    const [equation, setEquation] = useState({
      firstOperand: '',
      secondOperand: '',
      operator: '',
      result: ''
    });
    const [isTyping, setIsTyping] = useState(false);

    return (
      <EquationInputContext.Provider value={{ equation, setEquation, isTyping, setIsTyping }}>
        {children}
      </EquationInputContext.Provider>
    );
  }
