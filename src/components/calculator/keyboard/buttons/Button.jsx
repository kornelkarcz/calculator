import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ value, onClick, styleClass, icon }) => {

  return (
    <div
      onClick={onClick}
      className={styleClass}
    >
      { icon ? <FontAwesomeIcon icon={icon}/> : value}
    </div>
  );
}

export default Button;
