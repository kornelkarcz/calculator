  import { createContext, useState } from "react";

  export const InputContext = createContext();

  export const InputProvider = ({ children }) => {
    const [equation, setEquation] = useState({
      firstOperand: '',
      secondOperand: '',
      operator: '',
      result: ''
    });
    const [isTyping, setIsTyping] = useState(false);

    return (
      <InputContext.Provider value={{ equation, setEquation, isTyping, setIsTyping }}>
        {children}
      </InputContext.Provider>
    );
  }
