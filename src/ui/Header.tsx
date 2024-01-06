import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../store";
import "./header.scss";

function Header() {
  const userName = useSelector((state: store) => state.user.username);

  return (
    <header className="header">
      <Link to="/">REACT PIZZA CO.</Link>
      <input
        className="header__order-input"
        type="text"
        placeholder="Search order #"
      />
      <h2>{userName}</h2>
    </header>
  );
}

export default Header;
