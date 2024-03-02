import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";
import { getCartQuantity } from "../../utils/cartGetters";
import { cartItem } from "../../utils/types";
import "./cart.scss";

function Cart() {
  const cart = useSelector((store: store) => store.cart);
  const user = useSelector((store: store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <Link to="/menu">
        <p className="link">&larr; Back to menu</p>
      </Link>
      <h2 className="cart__header">
        {getCartQuantity(cart) !== 0
          ? `Your cart, ${user.username}`
          : `Your cart is still empty. Start adding some pizzas :)`}
      </h2>
      <ul className="cart__items-list">
        {cart.items.map((item: cartItem) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.unitPrice}
              quantity={item.quantity}
            />
          );
        })}
      </ul>
      <div className="cart__butons">
        <Button
          text="ORDER PIZZAS"
          disabled={getCartQuantity(cart) === 0}
          callback={() => {
            navigate("/order/new");
          }}
        />
        <Button
          text="CLEAR CART"
          disabled={getCartQuantity(cart) === 0}
          callback={() => {
            dispatch({ type: "cart/clear" });
          }}
        />
      </div>
    </div>
  );
}

export default Cart;
