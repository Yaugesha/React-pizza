import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../../store";
import { getCartPrice, getCartQuantity } from "../../utils/cartGetters";
import "./cartOverview.scss";

function CartOverview() {
  const [isEnter, setIsEnter] = useState<boolean>(false);
  const navigate = useNavigate();

  const cart = useSelector((store: store) => store.cart);
  const defaultText = `${getCartQuantity(cart)} pizzas €${getCartPrice(cart)}`;

  return (
    <div
      className="cart_overview"
      onClick={() => {
        navigate("/cart");
      }}
      onMouseEnter={() => {
        setIsEnter(true);
      }}
      onMouseLeave={() => {
        setIsEnter(false);
      }}
    >
      <p>{isEnter ? "Open cart →" : defaultText}</p>
    </div>
  );
}

export default CartOverview;
