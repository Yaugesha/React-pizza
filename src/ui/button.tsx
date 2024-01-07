import { ButtonP } from "../utils/interfaces";
import "./button.scss";

function Button({ text, type = "base", callback, disabled = false }: ButtonP) {
  return (
    <button className={`button_${type}`} onClick={callback} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
