import Row from "./buttons/Row.jsx";
import Button from "./buttons/Button.jsx";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import useCurrencyKeyboard from "../../../hooks/useCurrencyKeyboard.jsx";

const CurrencyKeyboard = () => {
  const { addDot, addChar, clear, deleteLastChar } = useCurrencyKeyboard();

  return (
    <div className="h-full p-4 bg-gray-100 rounded-2xl">
      <Row>
        <Button value="C" onClick={() => clear()} styleClass="clear-button"/>
        <Button icon={faBackspace} onClick={() => deleteLastChar()}
                styleClass="operator-button"/>
        <Button value="" styleClass="operator-button"/>
        <Button value="" styleClass="operator-button"/>
      </Row>
      <Row>
        <Button value="7" onClick={() => addChar('7')} styleClass="number-button"/>
        <Button value="8" onClick={() => addChar('8')} styleClass="number-button"/>
        <Button value="9" onClick={() => addChar('9')} styleClass="number-button"/>
        <Button value="" styleClass="operator-button"/>
      </Row>
      <Row>
        <Button value="4" onClick={() => addChar('4')} styleClass="number-button"/>
        <Button value="5" onClick={() => addChar('5')} styleClass="number-button"/>
        <Button value="6" onClick={() => addChar('6')} styleClass="number-button"/>
        <Button value="" styleClass="operator-button"/>
      </Row>
      <Row>
        <Button value="1" onClick={() => addChar('1')} styleClass="number-button"/>
        <Button value="2" onClick={() => addChar('2')} styleClass="number-button"/>
        <Button value="3" onClick={() => addChar('3')} styleClass="number-button"/>
        <Button value="" styleClass="operator-button"/>
      </Row>
      <Row>
        <Button value="00" onClick={() => addChar('00')} styleClass="number-button"/>
        <Button value="0" onClick={() => addChar('0')} styleClass="number-button"/>
        <Button value="." onClick={() => addDot()} styleClass="number-button"/>
        <Button value="" styleClass="number-button"/>
      </Row>
    </div>

  );
}

export default CurrencyKeyboard;
