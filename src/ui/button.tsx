import "./button.scss";

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return <button className="button">{text}</button>;
}

export default Button;
