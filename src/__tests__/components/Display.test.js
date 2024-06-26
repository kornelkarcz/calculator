import React from "react";
import { render, screen } from "@testing-library/react";
import Display from "../../components/calculator/display/Display.jsx";
import { ModeContext } from "../../context/ModeContext.jsx";
import { EquationInputContext } from "../../context/EquationInputContext.jsx";
import { CalculationHistoryContext } from "../../context/CalculationHistoryContext.jsx";
import { fireEvent } from "@testing-library/react";

const mockEquation = {
  firstOperand: '5',
  secondOperand: '1',
  operator: '+',
  result: '6',
};

describe('Display component', () => {
  test('Display correctly equation', () => {
    render(
      <ModeContext.Provider value={{ isCalculatorMode: true }}>
        <EquationInputContext.Provider value={{ equation: mockEquation, isTyping: true }}>
          <CalculationHistoryContext.Provider value={{ lastResult: '6'}}>
            <Display/>
          </CalculationHistoryContext.Provider>
        </EquationInputContext.Provider>
      </ModeContext.Provider>
    );

    const equationHolderElement = screen.getByTestId('equation-holder');
    expect(equationHolderElement).toBeInTheDocument();
    expect(equationHolderElement).toHaveTextContent('5+1');
  });

  test('display correctly the result of equation', () => {
    render(
      <ModeContext.Provider value={{ isCalculatorMode: true }}>
        <EquationInputContext.Provider value={{ equation: mockEquation, isTyping: false }}>
          <CalculationHistoryContext.Provider value={{ lastResult: '6'}}>
            <Display/>
          </CalculationHistoryContext.Provider>
        </EquationInputContext.Provider>
      </ModeContext.Provider>
    );

    const equationHolderElement = screen.getByTestId('equation-holder');
    expect(equationHolderElement).toBeInTheDocument();
    expect(equationHolderElement).toHaveTextContent('5+1');

    fireEvent.keyDown(window, { key: 'Enter', code: 'Enter'});

    expect(equationHolderElement).toHaveTextContent('6');
  });

  test('renders CurrencyExchangeDisplay in currency exchange mode', () => {
    render(
      <ModeContext.Provider value={{ isCalculatorMode: false }}>
        <Display/>
      </ModeContext.Provider>
    );
    expect(screen.getByTestId('currency-exchange-display')).toBeInTheDocument();
  });
});
