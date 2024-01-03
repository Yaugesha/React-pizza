import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/">REACT PIZZA CO.</Link>
      <input
        className="header__order-input"
        type="text"
        placeholder="Search order #"
      />
      <h2>Yaugesha</h2>
    </header>
  );
}

export default Header;
