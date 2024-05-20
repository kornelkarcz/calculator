import { useContext } from "react";
import { ModeContext } from "../../../context/ModeContext.jsx";
import Button from "./buttons/Button.jsx";
import Row from "./buttons/Row.jsx";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import useKeyboard from "../../../hooks/useKeyboard.jsx";

const Keyboard = () => {
  const { isCalculatorMode: isCalculator } = useContext(ModeContext);

  const {
    addChar,
    addOperator,
    addDot,
    addZero,
    clearEquation,
    deleteLastChar,
    executeEvaluation
  } = useKeyboard();

  return (
    <div className="h-full p-4 bg-gray-100 rounded-2xl">
      <Row>
        <Button value="C" onClick={() => clearEquation()} styleClass="clear-button"/>
        <Button icon={faBackspace} onClick={() => deleteLastChar()} styleClass="operator-button"/>
        <Button value="P" onClick={() => addOperator('P')} styleClass="operator-button"/>
        <Button value="÷" onClick={() => addOperator('/')} styleClass="operator-button"/>
      </Row>
      <Row>
        <Button value="7" onClick={() => addChar('7')} styleClass="number-button"/>
        <Button value="8" onClick={() => addChar('8')} styleClass="number-button"/>
        <Button value="9" onClick={() => addChar('9')} styleClass="number-button"/>
        <Button value="x" onClick={() => addOperator('*')} styleClass="operator-button"/>
      </Row>
      <Row>
        <Button value="4" onClick={() => addChar('4')} styleClass="number-button"/>
        <Button value="5" onClick={() => addChar('5')} styleClass="number-button"/>
        <Button value="6" onClick={() => addChar('6')} styleClass="number-button"/>
        <Button value="+" onClick={() => addOperator('+')} styleClass="operator-button"/>
      </Row>
      <Row>
        <Button value="1" onClick={() => addChar('1')} styleClass="number-button"/>
        <Button value="2" onClick={() => addChar('2')} styleClass="number-button"/>
        <Button value="3" onClick={() => addChar('3')} styleClass="number-button"/>
        <Button value="-" onClick={() => addOperator('-')} styleClass="operator-button"/>
      </Row>
      <Row>
        <Button value="0" onClick={() => addZero()} styleClass="number-button"/>
        <Button value="." onClick={() => addDot(',')} styleClass="number-button"/>
        <Button value="=" onClick={() => executeEvaluation()} styleClass="equals-button"/>
      </Row>
    </div>
  )
}

export default Keyboard;
