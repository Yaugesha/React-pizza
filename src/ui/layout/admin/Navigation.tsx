import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation-container">
        <li className="navigation__item">
          <Link to="/admin/pizzas">Pizzas</Link>
        </li>
        <li className="navigation__item">
          <Link to="/admin/ingredients">Ingredients</Link>
        </li>
        <li className="navigation__item">
          <Link to="/admin/orders">Order</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
