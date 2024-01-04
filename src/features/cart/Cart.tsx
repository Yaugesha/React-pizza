import { Link } from "react-router-dom";
import Button from "../../ui/button";
import CartItem from "./CartItem";
import "./cart.scss";

const cart = [
  { name: "Napoli", count: 1, price: 16 },
  { name: "Diavola", count: 2, price: 16 },
];
function Cart() {
  return (
    <div className="cart">
      <Link to="/menu">
        <p className="link">&larr; Back to menu</p>
      </Link>
      <h2 className="cart__header">Your cart, Yaugesha</h2>
      <ul className="cart__items-list">
        {cart.map((item) => {
          return <CartItem item={item} />;
        })}
      </ul>
      <div className="cart__butons">
        <Button text="ORDER PIZZAS" />
        <Button text="CLEAR CART" />
      </div>
    </div>
  );
}

export default Cart;
