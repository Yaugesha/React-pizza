import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="header">
      <Link to="/">REACT PIZZA CO.</Link>

      <Navigation />

      <div>
        <Link to="/admin/login">Log in </Link>
        <Link to="/admin/signup">Sign up </Link>
        <Link to="/admin/logout">Log out </Link>
      </div>
    </header>
  );
}

export default Header;
