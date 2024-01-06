import "./button.scss";

interface ButtonProps {
  text: string;
  type?: string;
  disabled?: boolean;
  callback: () => void;
}

function Button({
  text,
  type = "base",
  callback,
  disabled = false,
}: ButtonProps) {
  return (
    <button className={`button_${type}`} onClick={callback} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
